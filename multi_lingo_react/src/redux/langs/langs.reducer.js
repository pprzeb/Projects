const INITIAL_STATE = {
    checkedItems: new Map([
        ['english', [false, 'menu-item eng']],
        ['french', [false, 'menu-item fre']],
        ['romanian', [false, 'menu-item rom']],
        ['italian', [false, 'menu-item ita']],
        ['spanish', [false, 'menu-item spa']],
      ])
}

const langsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_LANGS':
            return {
                ...state,
                checkedItems: new Map(state.checkedItems.set(action.payload.item, action.payload.setButtonStyle))
            }
        default:
            return state
    }
}

export default langsReducer;