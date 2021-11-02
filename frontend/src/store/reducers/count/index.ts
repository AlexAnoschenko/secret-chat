import { CountAction, CountActionsEnum, CountState } from "./types";

const initialState: CountState = {
  count: 0,
};

export default function countReducer(
  state = initialState,
  action: CountAction
): CountState {
  switch (action.type) {
    case CountActionsEnum.INCREASE_COUNT:
      return { ...state, count: ++state.count };

    case CountActionsEnum.DECREASE_COUNT:
      return { ...state, count: --state.count };

    default:
      return state;
  }
}
