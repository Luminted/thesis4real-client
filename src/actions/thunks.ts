import {DragEvent as SyntheticDragEvent, MouseEvent as SyntheticMouseEvent} from 'react'
import { socketEmitVerb, socketJoinTable, socketGetTableDimensions } from "./socketActions";
import { SharedVerbTypes, Verb, CardVerbTypes, DeckVerbTypes } from "../types/verbTypes";
import { EntityTypes } from "../types/dataModelDefinitions";
import { MaybeNull } from "../types/genericTypes";
import { ThunkResult } from ".";
import { mouseEventTranslator, verbFactory } from "../controller";
import { VerbContextTypes, Ratio } from '../types/additionalTypes';
import { setClientInfo, setGameState, setVerticalScalingRatio, setHorizontalScalingRatio, setTableReady, setTableVirtualDimensions, setTablePixelDimensions } from './setterActions';

//TODO: catch null verbs
export function emitSharedVerb(positionX: number, positionY: number, verbType: SharedVerbTypes, entityId: MaybeNull<string>, entityType: MaybeNull<EntityTypes>): ThunkResult<void> {
    return (dispatch, getStore) => {
        const store = getStore();
        const clientId = store.clientInfo!.clientId;
        const verb: Verb = {
            type: verbType,
            entityType,
            clientId,
            positionX,
            positionY,
            entityId,
        }
        // console.log('Emitting verb: ', verb);
        dispatch(socketEmitVerb(verb));
    } 
}

export function emitCardVerb(positionX: number, positionY: number, verbType: CardVerbTypes, entityId: MaybeNull<string>): ThunkResult<void> {
    return (dispatch, getStore) => {
        const store = getStore();
        const clientId = store.clientInfo!.clientId;
        const verb: Verb = {
            type: verbType,
            entityType: EntityTypes.CARD,
            clientId,
            positionX,
            positionY,
            entityId,
        }
        // console.log('Emitting verb: ', verb)
        dispatch(socketEmitVerb(verb));
    }
}

export function emitDeckVerb(positionX: number, positionY: number, verbType: DeckVerbTypes, entityId: MaybeNull<string>): ThunkResult<void> {
    return (dispatch, getStore) => {
        const store = getStore();
        const clientId = store.clientInfo!.clientId;
        const verb: Verb = {
            type: verbType,
            entityType: EntityTypes.DECK,
            clientId,
            positionX,
            positionY,
            entityId,
        }
        // console.log('Emitting verb: ', verb);
        dispatch(socketEmitVerb(verb));
    }
}

export function emitDerivedVerb (event: SyntheticMouseEvent | SyntheticDragEvent, entityId: MaybeNull<string>, entityType: MaybeNull<EntityTypes>, verbContext: MaybeNull<VerbContextTypes> = null): ThunkResult<void>{
    return (dispatch, getStore) => {
        const store = getStore();
        const positionX = event.clientX;
        const positionY = event.clientY;
        const clientId = store.clientInfo!.clientId;
        const mouseInputType = mouseEventTranslator(event);
        const verb = verbFactory(mouseInputType, entityType, entityId, clientId, positionX, positionY, verbContext);
        // console.log('Emitting verb: ', verb);
        if(verb !== null){
            dispatch(socketEmitVerb(verb));
        }else{
            console.log('Derived Verb is null. Aborting dispatch.')
        }
    }
}

export function setScalingRatios(renderedTableWidth: number, renderedTableHeight: number): ThunkResult<void> {
   return (dispatch, getStore) => {
        const {tableVirtualDimensions} = getStore();
        const horizontalScalingRatio: Ratio = {
        numerator: renderedTableWidth,
        divisor: tableVirtualDimensions!.width
        };
        const verticalScalingRatio: Ratio = {
            numerator: renderedTableHeight,
            divisor: tableVirtualDimensions!.height
        }
        dispatch(setHorizontalScalingRatio(horizontalScalingRatio));
        dispatch(setVerticalScalingRatio(verticalScalingRatio));
   }
}

export function readyTable(renderedTableWidth: number, renderedTableHeight: number): ThunkResult<void> {
    return (dispatch) => {
        dispatch(setTableReady(false));
        const joinTablePromise = new Promise((resolve, reject) => {
            dispatch(socketJoinTable((clientInfo, gameState) => {
                dispatch(setClientInfo(clientInfo));
                dispatch(setGameState(gameState));
                resolve();
            }));
        });

        const scalingRatioPromise = new Promise((resolve, reject) => {
            dispatch(socketGetTableDimensions((tableWidth, tableHeight) => {
                const horizontalScalingRatio: Ratio = {
                    numerator: renderedTableWidth,
                    divisor: tableWidth
                };
                const verticalScalingRatio: Ratio = {
                    numerator: renderedTableHeight,
                    divisor: tableHeight
                }
                dispatch(setTableVirtualDimensions(tableWidth, tableHeight));
                dispatch(setTablePixelDimensions(renderedTableWidth, renderedTableHeight));
                dispatch(setHorizontalScalingRatio(horizontalScalingRatio));
                dispatch(setVerticalScalingRatio(verticalScalingRatio));
                resolve();
            }));
        });

        Promise.all([joinTablePromise, scalingRatioPromise])
        .then(() => dispatch(setTableReady(true)));
    }
}