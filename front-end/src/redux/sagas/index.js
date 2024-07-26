import { all } from "redux-saga/effects";
import { getUserSaga } from "./users/getUsersSaga";

export function* rootSaga() {
  yield all([getUserSaga()]);
}
