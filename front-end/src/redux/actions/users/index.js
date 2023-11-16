import * as types from "front-end/src/redux/constants/users";

// export const getUsers = (payload) => ({
//   type: types.GET_USERS_REQUEST,
//   payload,
// });
import { userService } from "./services/userService";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const users = await userService.getUsers();
      dispatch({ type: types.GET_USERS_SUCCESS, payload: users });
    } catch (error) {
      dispatch({ type: types.GET_USERS_FAILURE, payload: error.message });
    }
  };
};
