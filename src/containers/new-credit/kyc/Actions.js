import {
    REQUEST_DOCUMENT_DETAILS,
    RECEIVE_DOCUMENT_DETAILS,
    FAILURE_DOCUMENT_DETAILS,
    TOGGLE_POPUP,
    RESET_STATE
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
export const resetState = (data) => {
    console.log('mai yaha aaya', data)
    return {
        type: RESET_STATE,
        payload: data
    }
}
