import {
    REQUEST_AADHAR_DETAILS,
    RECEIVE_AADHAR_DETAILS,
    FAILURE_AADHAR_DETAILS,
    REQUEST_DOCUMENT_DETAILS,
    RECEIVE_DOCUMENT_DETAILS,
    FAILURE_DOCUMENT_DETAILS,
    TOGGLE_POPUP
} from './Constants'
const defaultState = {
    loading: false,
    error: false,
    token: '',
    url: ''
}

const kycReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_AADHAR_DETAILS:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_AADHAR_DETAILS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
            }
        case FAILURE_AADHAR_DETAILS:
            return {
                ...state,
                loading: false,
                error: true
            }
        case REQUEST_DOCUMENT_DETAILS:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_DOCUMENT_DETAILS:
            return {
                ...state,
                loading: false,
                url: action.payload.url,
            }
        case FAILURE_DOCUMENT_DETAILS:
            return {
                ...state,
                loading: false,
                error: true
            }
        case TOGGLE_POPUP:
            return {
                ...state,
                error: !state.error
            }
        default:
            return state
    }
}

export default kycReducer;