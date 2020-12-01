import { SerializedGameState } from "../../types/dataModelDefinitions";
import { Verb } from "../../types/verb";
import { SocketActionTypeKeys } from "../actionTypeKeys";

export type SocketEmitVerbAction = {
    type: SocketActionTypeKeys.EMIT_VERB,
    verb: Verb,
    ackFunction?: Function
}


type SocketVerbAckFunction = (nextGameState: SerializedGameState) => void;


export const socketEmitVerb = (verb: Verb, ackFunction?: SocketVerbAckFunction): SocketEmitVerbAction => {
    return {
        type: SocketActionTypeKeys.EMIT_VERB,
        verb,
        ackFunction
    }
}