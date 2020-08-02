import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    userWordsCollection: []
    
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       
        case userActionTypes.SET_CURRENT_USER: 
            return {
                ...state, 
                currentUser: action.payload,              
            }
        case userActionTypes.GET_USER_WORDS_COLLECTION:
            
            return {
                ...state,
                userWordsCollection: action.payload
            }   
            
       
        default:
            return state;
    }
}

export default userReducer