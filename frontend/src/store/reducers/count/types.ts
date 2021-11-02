export interface CountState {
  count: number;
}

export enum CountActionsEnum {
  INCREASE_COUNT = "INCREASE_COUNT",
  DECREASE_COUNT = "DECREASE_COUNT",
}

export interface IncreaseCountAction {
  type: CountActionsEnum.INCREASE_COUNT;
  payload?: any;
}

export interface DecreaseCountAction {
  type: CountActionsEnum.DECREASE_COUNT;
  payload?: any;
}

export type CountAction = IncreaseCountAction | DecreaseCountAction;
