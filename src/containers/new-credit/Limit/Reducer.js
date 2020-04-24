import { REQUEST_ACTIVATE_LIMIT_DETAILS, RECEIVE_ACTIVATE_LIMIT_DETAILS, FAILURE_ACTIVATE_LIMIT_DETAILS } from "./Constants"
import { TOGGLE_POPUP } from "../kyc/Constants"

const defaultState = {
    isLoading: false,
    isError: false,
    refid: '',
    url: ''
}

const activateLimitReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_ACTIVATE_LIMIT_DETAILS:
            return {
                ...state,
                isLoading: true
            }
        case RECEIVE_ACTIVATE_LIMIT_DETAILS:
            return {
                ...state,
                isLoading: false,
                refid: action.payload.refid,
                url: action.payload.url
            }
        case FAILURE_ACTIVATE_LIMIT_DETAILS:
            return {
                isLoading: false,
                isError: true
            }
        case TOGGLE_POPUP:
            return {
                ...state,
                isError: false
            }
        default:
            return state
    }
}

export default activateLimitReducer;