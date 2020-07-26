import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import langReducer from './languages/languages.reducer'

export default combineReducers({
    user: userReducer,
    lang: langReducer

})

