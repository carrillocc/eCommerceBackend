import {
  GET_USERS_CANCELLED,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../../constants";

const initialState = {
  loading: false,
  users: [],
  errors: null,
};

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        errors: null,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case GET_USERS_CANCELLED:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};
