const CHANGE_OPTION = "CHANGE_OPTION";


const defaultState = {
    avatarURL: "/public/avatars/1.jpg",
    name: 'John',
    status: 'Soldier',
    color: '#ffb50e'
}

export default function user(state = defaultState, action) {
    switch (action.type) {
        
        case CHANGE_OPTION:
            console.log(action.payload.optionName, action.payload.optionValue)
            return {
                ...state,
                [action.payload.optionName]: action.payload.optionValue
            }
            
            
        default:
            return state;
    }
}

export const onUserOptionChange = (updatedOption) => ({type: CHANGE_OPTION, payload: updatedOption})
