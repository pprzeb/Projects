import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import langsReducer from './langs/langs.reducer';
import mainLangReducer from './mainLang/mainLang.reducer'


export default combineReducers({
    user: userReducer,
    langs: langsReducer,
    mainLang: mainLangReducer,

})

