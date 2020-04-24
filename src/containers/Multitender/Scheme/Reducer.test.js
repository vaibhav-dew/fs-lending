import lendingProductReducer from './Reducer'
import * as types from './Constants'
import dummy from './data.json'

const initialState = {
    isLoading: false,
    isError: false,
    productDetails: {},
    selection: []
}

const data = dummy
const arr = dummy.ProductEMIList
describe('lending product reducer', () => {
    it('should retrun the initial state', () => {
        expect(lendingProductReducer(undefined, {})).toEqual(initialState)
    })
    it('should handle RECEIVE_LENDING_PRODUCT_DETAILS', () => {
        expect(
            lendingProductReducer([], {
                type: types.RECEIVE_LENDING_PRODUCT_DETAILS,
                payload: dummy
            })
        ).toEqual({
            isLoading: false,
            productDetails: data
        })
    })
    it('should handle data after selection', () => {
        expect(
            lendingProductReducer([], {
                type: types.SELECTION,
                payload: dummy.ProductEMIList
            })
        ).toEqual({
            selection: arr
        })
    })
    it('should handle data after deselection', () => {
        expect(
            lendingProductReducer([], {
                type: types.REMOVE_SELECTION,
                payloaddata: dummy.ProductEMIList
            })
        ).toEqual({
            selection: arr
        })
    })
})
