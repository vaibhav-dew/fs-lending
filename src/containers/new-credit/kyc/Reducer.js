import {
    REQUEST_DOCUMENT_DETAILS,
    RECEIVE_DOCUMENT_DETAILS,
    FAILURE_DOCUMENT_DETAILS,
    TOGGLE_POPUP,
    RESET_STATE
} from './Constants'
const defaultState = {
    isLoading: false,
    isError: false,
    url: ''
}

const kycReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_DOCUMENT_DETAILS:
            return {
                ...state,
                isLoading: true
            }
        case RECEIVE_DOCUMENT_DETAILS:
            return {
                ...state,
                isLoading: false,
                url: action.payload.url,
            }
        case FAILURE_DOCUMENT_DETAILS:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case TOGGLE_POPUP:
            return {
                ...state,
                isError: false
            }
        case RESET_STATE:
            return state
        default:
            return state
    }
}

export default kycReducer;