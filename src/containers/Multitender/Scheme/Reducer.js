import * as actionTypes from './Constants'

const defaultState = {
    isLoading: false,
    isError: false,
    productDetails: {},
    selection: []
}

const lendingProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case actionTypes.REQUEST_LENDING_PRODUCT_DETAILS:
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        case actionTypes.RECEIVE_LENDING_PRODUCT_DETAILS:
            return {
                ...state,
                isLoading: false,
                productDetails: action.payload
            }
        // case actionTypes.FAILURE_LENDING_PRODUCT_DETAILS:
        //     return {
        //         isLoading: false,
        //         isError: false
        //     }
        // case actionTypes.TOGGLE_POPUP:
        //     return {
        //         ...state,
        //         isError: false
        //     }
        case actionTypes.SELECTION:
            return {
                ...state,
                selection: action.payload
            }
        case actionTypes.REMOVE_SELECTION:
            return {
                ...state,
                selection: action.payloaddata
            }
        default:
            return state
    }
}

export default lendingProductReducer;