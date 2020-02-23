import { combineReducers } from 'redux';
import index from './indexReducer';
import user from './userReducer';
import { reducer as form  } from 'redux-form';

const rootReducer = combineReducers({
    index,
    user,
    form
});

export default rootReducer;
