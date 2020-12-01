import { ThunkResult } from "..";
import { CardVerbTypes, IGrabFromHandVerb } from "../../../types/verb";
import {socketEmitVerb} from "../../"

export const emitGrabFromHand = (entityId: string, grabbedAtX: number, grabbedAtY: number, grabbedFrom: string, positionX: number, positionY: number, faceUp: boolean): ThunkResult =>
    (dispatch, getState) => {
        const {clientInfo} = getState();
        const verb: IGrabFromHandVerb = {
            entityId,
            grabbedAtX,
            grabbedAtY,
            grabbedFrom,
            positionX,
            positionY,
            faceUp,
            clientId: clientInfo!.clientId,
            type: CardVerbTypes.GRAB_FROM_HAND
        }
        dispatch(socketEmitVerb(verb));
    }