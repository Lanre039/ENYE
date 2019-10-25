import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import userFormReducer from '../reducers/userFormReducer';

export default combineReducers({
    form: userFormReducer
});