import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../../constants";

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const getUsers = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};
