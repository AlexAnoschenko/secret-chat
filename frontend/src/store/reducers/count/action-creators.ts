import {
  CountActionsEnum,
  DecreaseCountAction,
  IncreaseCountAction,
} from "./types";

export const CountActionCreators = {
  increaseCount: (): IncreaseCountAction => ({
    type: CountActionsEnum.INCREASE_COUNT,
  }),

  decreaseCount: (): DecreaseCountAction => ({
    type: CountActionsEnum.DECREASE_COUNT,
  }),
};
