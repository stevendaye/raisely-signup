import { takeEvery } from "redux-saga/effects";
import {
    NOTIFICATION_SHOW,
    CHECK_REQUEST, SIGNUP_REQUEST
} from "../types"

import handleNotification from "./notifications";
import handleUserSignUp, { handleUserCheckUp } from "./auth";

function* watchAll() {
    yield takeEvery(NOTIFICATION_SHOW, handleNotification);
    yield takeEvery(CHECK_REQUEST, handleUserCheckUp);
    yield takeEvery(SIGNUP_REQUEST, handleUserSignUp);
}

export { watchAll };
