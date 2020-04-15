import { REQUEST_LIMIT_DETAILS, RECEIVE_LIMIT_DETAILS, FAILURE_LIMIT_DETAILS } from "./Constants";

export const requestLimitDetails = () => ({
    type: REQUEST_LIMIT_DETAILS
})

export const receiveLimitDetails = (data) => ({
    type: RECEIVE_LIMIT_DETAILS,
    payload: data
})

export const failLimitDetails = (errorMessage) => ({
    type: FAILURE_LIMIT_DETAILS,
    payload: errorMessage
})