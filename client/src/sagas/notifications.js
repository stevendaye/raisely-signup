import { put, delay } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import { doSetNotification, doRemoveNotification } from "../actions/notifications";

const id = uuidv4();
const timeout = 5000;

function* handleNotification(action) {
    const { payload: { message, alert } } = action;
    yield put(doSetNotification(id, message, alert));
    yield delay(timeout);
    yield put(doRemoveNotification(id));
}

export default handleNotification;
