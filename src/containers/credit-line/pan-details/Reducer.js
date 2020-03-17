import {
    SAVE_PAN_DETAILS,
} from "./Constants"

const initialState = {
    panName: '',
    panNumber: '',
}

const panVerificationReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SAVE_PAN_DETAILS:
            return {
                ...state,
                panName: action.payload.panName,
                panNumber: action.payload.panNumber
                }
        default:return state

    }
}

export default panVerificationReducer;