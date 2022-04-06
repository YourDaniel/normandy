const CHECK_REDUX_STATUS = "CHECK_REDUX_STATUS";

const defaultState = {
    reduxCounter: 0
}

export default function exampleReducer(state = defaultState, action) {
    switch (action.type) {
      
        case CHECK_REDUX_STATUS:
            return {
                ...state,
                reduxCounter: action.payload
            }
            
        default:
            return state;
    }
}

export const checkReduxStatus = (counter) => ({type: CHECK_REDUX_STATUS, payload: counter})