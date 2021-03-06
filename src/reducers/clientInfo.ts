import { ESetterActionTypeKeys, TActionTypes } from "../actions";
import { TClientInfo, TMaybeNull } from "../typings";

const initialState = null;

export const clientInfo = (state: TMaybeNull<TClientInfo> = initialState, action: TActionTypes) => {
  switch (action.type) {
    case ESetterActionTypeKeys.SET_CLIENT_INFO:
      return action.clientInfo;
    default:
      return state;
  }
};
