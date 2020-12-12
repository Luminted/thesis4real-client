import { ESetterActionTypeKeys, TActionTypes } from "../actions";
import { TRatio } from "../typings";

const initialState = {
  numerator: 1,
  divisor: 1,
};

export const horizontalScalingRatio = (state: TRatio = initialState, action: TActionTypes) => {
  switch (action.type) {
    case ESetterActionTypeKeys.SET_HORIZONTAL_SCALING_RATIO:
      return action.ratio;
    default:
      return state;
  }
};
