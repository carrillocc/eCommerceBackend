import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_CANCELLED,
} from "src/redux/constants/users";
export const getUsersReducer = (
  state = { loading: false, users: [], errors: null },
  action = {}
) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.res.data.response,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
      };
    case GET_USERS_CANCELLED:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
