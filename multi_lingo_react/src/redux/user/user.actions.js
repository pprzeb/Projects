import userActionTypes from './user.types';

export const setCurrentUser = (user) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user

})

export const getUserWordsCollection = (collection) => ({
    type: userActionTypes.GET_USER_WORDS_COLLECTION,
    payload: collection
})


