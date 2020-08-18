import {
    SIGNUP_SUCCESS, SIGNUP_FAIL,
    CHECK_SUCCESS, CHECK_FAIL,
    SIGN_OUT
} from "../types";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    status: null,
    error: null
};

const applyCheckSucess = (state, payload) => {
    const { data: { status } } = payload;

    return {
        ...state,
        status,
        error: null
    };
};

const applySignUpSuccess = (state, payload) => {
    const { data, token } = payload;
    return {
        ...state,
        user: data,
        token: token,
        isAuthenticated: true,
        status: null,
        error: null
    }
};

const applySignUpFail = (state, payload) => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    status: null,
    error: payload.response.data.errors
});

const applySignUpClear = state => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    status: null,
    error: null
});

const authReducer = (state = initialState, action) => {
    const { type, payload } =action; 
    switch (type) {
        case CHECK_SUCCESS:
            return applyCheckSucess(state, payload);
        case SIGNUP_SUCCESS:
            return applySignUpSuccess(state, payload);
        case CHECK_FAIL:
        case SIGNUP_FAIL:
            return applySignUpFail(state, payload);
        case SIGN_OUT:
            return applySignUpClear(state)
        default:
            return state;
    }
};

export default authReducer;
