import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../../constants";

function* fetchUserData() {
  try {
    const response = yield call(axios.get, "http://localhost:5001/users");
    yield put({ type: GET_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: GET_USERS_FAILURE, payload: error.message });
  }
}

export function* getUserSaga() {
  yield takeLatest(GET_USERS_REQUEST, fetchUserData);
}
