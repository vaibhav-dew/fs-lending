import * as actionTypes from './Constants'

/**
 * action creators 
 * Request Activate Limit data 
 */

export const requestActivateLimitDetails = () => ({
    type: actionTypes.REQUEST_ACTIVATE_LIMIT_DETAILS
})


/**
 * @description Fetch Activate limit data Success
 */
export const receiveActivateLimitDetails = (data) => ({
    type: actionTypes.RECEIVE_ACTIVATE_LIMIT_DETAILS,
    payload: data
})

/**
 * @description Fetch Activate limit data Error
 */

export const failActivateLimitDetails = (data) => ({
    type: actionTypes.FAILURE_ACTIVATE_LIMIT_DETAILS,
    payload: data
})

export const togglePopup = () => ({
    type: actionTypes.TOGGLE_POPUP
})

export const resetState = (data) => {
    console.log('mai yaha aaya')
    return {
        type: actionTypes.RESET_STATE,
        payload: data
    }
}
