const INITIAL_STATE = {
    mainLang: 'english'
}

const mainLangReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case('SET_MAIN_LANG'):
            return {
                ...state,
                mainLang: action.payload
            };
        default:
            return state
        }

}

export default mainLangReducer