const INITIAL_STATE = {
    checkedItems: new Map([
        ['english', [false, 'menu-item eng']],
        ['french', [false, 'menu-item fre']],
        ['romanian', [false, 'menu-item rom']],
        ['italian', [false, 'menu-item ita']],
        ['spanish', [false, 'menu-item spa']],
      ])
}

const langReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_LANG':
            
            return {
                ...state,
                checkedItems: state.checkedItems.set(action.payload.item, action.payload.setButtonStyle)
            }
        default:
            return state
    }
}

export default langReducer;