import { put, call } from "redux-saga/effects";

import signUpUser, { checkUser } from "../apis/auth";
import { doCheckSuccess, doSignUpSuccess, doCheckFail, doSignUpFail } from "../actions/auth";
import { doShowNotification } from "../actions/notifications";

function* handleUserCheckUp(action) {
    try {
        const { payload } = action;
        const result = yield call(checkUser, payload);
        yield put(doCheckSuccess(result.data));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            for(let error of errors) {
                yield put(doShowNotification({
                    message: error.message, alert: "danger"
                }));
            }
        }
        yield put(doCheckFail(err));
    }
}

function* handleUserSignUp(action) {
    try {
        const { payload } = action;
        const result = yield call(signUpUser, payload);
        yield put(doSignUpSuccess(result.data));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            for(let error of errors) {
                yield put(doShowNotification({
                    message: error.message, alert: "danger"
                }));
            }
        }
        yield put(doSignUpFail(err));
    }
}

export default handleUserSignUp;
export { handleUserCheckUp };
