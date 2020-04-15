import {
    REQUEST_AADHAR_DETAILS,
    RECEIVE_AADHAR_DETAILS,
    FAILURE_AADHAR_DETAILS,
    REQUEST_DOCUMENT_DETAILS,
    RECEIVE_DOCUMENT_DETAILS,
    FAILURE_DOCUMENT_DETAILS,
    TOGGLE_POPUP
} from './Constants'
export const requestAadharDetails = () => ({
    type: REQUEST_AADHAR_DETAILS
})

export const receiveAadharDetails = (data) => ({
    type: RECEIVE_AADHAR_DETAILS,
    payload: data
})

export const failureAadharDetails = (errorMessage) => ({
    type: FAILURE_AADHAR_DETAILS,
    payload: errorMessage
})

export const requestDocumentDetails = () => ({
    type: REQUEST_DOCUMENT_DETAILS
})

export const receiveDocumentDetails = (data) => ({
    type: RECEIVE_DOCUMENT_DETAILS,
    payload: data
})

export const failureDocumentDetails = (errorMessage) => ({
    type: FAILURE_DOCUMENT_DETAILS,
    payload: errorMessage
})

export const handle = () => ({
    type: TOGGLE_POPUP

})