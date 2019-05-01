import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import { login } from "../../api-middleware/login";
import * as actions from "./actions";
import { delay } from "redux-saga";

function* appLogin(action) {
  debugger;

  try {
    const response = yield call(login, action.model, "token");
    yield put({
      type: actions.LOGIN_SUCCESS,
      data: response.data
    });
    debugger;
  } catch (error) {
    debugger;
    yield put({
      type: actions.ERROR,
      error
    });
  }
}

function* appLoginWatcher() {
  debugger;
  yield takeEvery(actions.LOGIN_REQUEST, appLogin);
}

function* watchAppLogin() {
  yield all([appLoginWatcher()]);
}

export default [watchAppLogin];