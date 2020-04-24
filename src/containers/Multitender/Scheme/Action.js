import * as actionTypes from './Constants'
import data from './data.json'


/**
 * @description Lending Product Details Success
 */
export const receiveLendingProduct = () => {
    return {
        type: actionTypes.RECEIVE_LENDING_PRODUCT_DETAILS,
        payload: data
    }
}

// /**
//  * @description Lending Product Details Error
//  */

// export const failLendingProduct = (data) => ({
//     type: actionTypes.FAILURE_LENDING_PRODUCT_DETAILS,
// })

// export const togglePopup = () => ({
//     type: actionTypes.TOGGLE_POPUP
// })



export const selection = (data) => {
    return {
        type: actionTypes.SELECTION,
        payload: data
    }
}

export const removeSelection = (data) => {
    return {
        type: actionTypes.REMOVE_SELECTION,
        payloaddata: data
    }
}