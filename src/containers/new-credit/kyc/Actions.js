import {
    REQUEST_DOCUMENT_DETAILS,
    RECEIVE_DOCUMENT_DETAILS,
    FAILURE_DOCUMENT_DETAILS,
    TOGGLE_POPUP
} from './Constants'

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

export const togglePopup = () => ({
    type: TOGGLE_POPUP

})