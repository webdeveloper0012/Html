import {SAMPLE_ACTION_TYPE} from "../actionTypes/index";
import {ERROR_1_TYPE} from "../actionTypes/index";
import {LOGIN_FORM_SHOW_TYPE} from "../actionTypes/index";
import {LOGIN_FORM_HIDE_TYPE} from "../actionTypes/index";

const initialState = {
    counter : 0,
    error_1:false,
    loginformshow_flag :false,
};

export default function indexReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        //add your cases according to action types
        case SAMPLE_ACTION_TYPE:
            //do the changes to state, keep in mind that state should be kept immutable
                newState = {...state};
                newState.counter = newState.counter + action.val;
            return newState;
        case ERROR_1_TYPE:
            //do the changes to state, keep in mind that state should be kept immutable
                newState = {...state};
                newState.error_1 = action.val;
            return newState;
        case LOGIN_FORM_SHOW_TYPE:
            //do the changes to state, keep in mind that state should be kept immutable
                newState = {...state};
                newState.loginformshow_flag = action.val;
            return newState;
        case LOGIN_FORM_HIDE_TYPE:
            //do the changes to state, keep in mind that state should be kept immutable
                newState = {...state};
                newState.loginformshow_flag = action.val;
            return newState;

        default: return state;
    }
}