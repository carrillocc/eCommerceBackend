import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_CANCELLED,
  API_URL_GET_USERS,
} from "src/redux/constants/users";

// Define a function to fetch user data from your API
function* fetchUserData() {
  try {
    // Call your API function to fetch user data
    const userData = yield call(API_URL_GET_USERS); // Make sure to replace with your actual API function.

    // Dispatch a success action with the fetched user data
    yield put({ type: GET_USERS_SUCCESS, payload: userData });
  } catch (error) {
    // Dispatch a failure action in case of an error
    yield put({ type: GET_USERS_FAILURE, error });
  }
}

// Define the saga to watch for GET_USERS_REQUEST action
function* getUserSaga() {
  yield takeLatest(GET_USERS_REQUEST, API_URL_GET_USERS);
}

export default getUserSaga;
