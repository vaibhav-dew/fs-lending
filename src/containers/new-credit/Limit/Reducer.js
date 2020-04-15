import { REQUEST_LIMIT_DETAILS, RECEIVE_LIMIT_DETAILS, FAILURE_LIMIT_DETAILS } from "./Constants"

const defaultState = {
    loading: false,
    error: false,
    refid: '',
    url: ''
}

const limit = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_LIMIT_DETAILS:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_LIMIT_DETAILS:
            return {
                ...state,
                loading: false,
                refid: action.payload.refid,
                url: action.payload.url
            }
        case FAILURE_LIMIT_DETAILS:
            return {
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default limit;