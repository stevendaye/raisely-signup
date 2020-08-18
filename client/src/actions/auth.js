import {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL,
    CHECK_REQUEST, CHECK_SUCCESS, CHECK_FAIL,
    SIGN_OUT
} from "../types";
  
// Signup Action Creators
const doSignUp = payload => ({
    type: SIGNUP_REQUEST,
    payload
});

const doCheck = email => ({
    type: CHECK_REQUEST,
    payload: email
});

const doCheckSuccess = payload => ({
    type: CHECK_SUCCESS,
    payload
});

const doCheckFail = payload => ({
    type: CHECK_FAIL,
    payload
});

const doSignUpSuccess = payload => ({
    type: SIGNUP_SUCCESS,
    payload
});

const doSignUpFail = err => ({
    type: SIGNUP_FAIL,
    payload: err
});

const doSignOut = () => ({
    type: SIGN_OUT
});

export {
    doSignUp, doSignUpSuccess, doSignUpFail,
    doCheck, doCheckSuccess, doCheckFail,
    doSignOut
};
