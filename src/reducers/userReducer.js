import {FORMAT_USERINFO_TYPE} from "../actionTypes/index";
import {SAVE_USERINFO_TYPE} from "../actionTypes/index";
import {SAVE_USERTOKEN_TYPE} from "../actionTypes/index";
import {ERROR_2_TYPE} from "../actionTypes/index";

import * as datas from '../utils/DataUtil'

const initialState = {
    user : datas.get('user'),
    token : datas.get('token'),
    loggedIn: false,
    loggingIn: false,
    loginError: undefined,
    registerError: undefined,
    userProfile: null,
    lastPage: '/page/dashboard',
    error_2: false,
};

export function logout() {
    datas.format();
    let user = datas.get('user');
    return {
      type: FORMAT_USERINFO_TYPE,
      user
    };
}

export default function userReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FORMAT_USERINFO_TYPE:
                newState = {...state};
                datas.format();
                newState.user = datas.get('user');
            return newState;
        case SAVE_USERINFO_TYPE:
                newState = {...state};
                newState.user = action.val;
            return newState;
        case SAVE_USERTOKEN_TYPE:
                newState = {...state};
                newState.token = action.val;
            return newState;
        case ERROR_2_TYPE:
                newState = {...state};
                newState.error_2 = action.val;
            return newState;

        default: return state;
    }
}
