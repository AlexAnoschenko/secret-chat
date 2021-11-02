import { UsersAction, UsersActionsEnum, UsersState } from "./types";

const initialState: UsersState = {
  users: [],
};

export default function countReducer(
  state = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case UsersActionsEnum.SET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };

    default:
      return state;
  }
}
