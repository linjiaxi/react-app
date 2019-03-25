const ADD = 'add'
const MINUS = 'minus'

const counterReducer = (state = 0, action) => {
    switch (action.type){
        case 'add':
            return state + 1
        case 'minus':
            return state - 1
        default:
            return state
    }
}

function add() {
    return { type: ADD }
}

function minus() {
    return { type: MINUS }
}

function asyncAdd() {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        },1000)
    }
}

export { counterReducer, add, minus, asyncAdd }