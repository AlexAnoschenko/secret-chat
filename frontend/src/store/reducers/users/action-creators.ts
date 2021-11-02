import axios from "axios";
import { AppDispatch } from "../..";
import { UsersActionsEnum } from "./types";

export const UsersActionCreators = {
  setUsers: (users: any) => ({
    type: UsersActionsEnum.SET_USERS,
    payload: users,
  }),
  getUsers: () => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (response) {
        dispatch(UsersActionCreators.setUsers(response.data));
      }
    } catch (e) {
      console.log(e);
    }
  },
};
