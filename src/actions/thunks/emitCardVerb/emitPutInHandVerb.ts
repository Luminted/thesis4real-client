import { ThunkResult } from "..";
import { SerializedGameState } from "../../../types/dataModelDefinitions";
import { CardVerbTypes, IPutInHandVerb } from "../../../types/verb";
import { socketEmitVerb } from "../../";

export const emitPutInHandVerb = (entityId: string, faceUp: boolean, ackFunction?: (nextGameState: SerializedGameState) => void): ThunkResult => 
    (dispatch, getState) => {
        const {clientInfo} = getState();
        const verb: IPutInHandVerb = {
            entityId,
            faceUp,
            clientId: clientInfo!.clientId,
            type: CardVerbTypes.PUT_IN_HAND
        }
        dispatch(socketEmitVerb(verb, ackFunction));
    }