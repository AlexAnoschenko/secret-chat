export interface UsersState {
  users: any;
}

export enum UsersActionsEnum {
  SET_USERS = "SET_USERS",
}

export interface SetUsersAction {
  type: UsersActionsEnum.SET_USERS;
  payload?: any;
}

export type UsersAction = SetUsersAction;
