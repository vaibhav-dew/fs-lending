import * as actions from './Action';
import * as types from './Constants';
import dummy from './data.json'

const data = dummy
const arr = []



describe('actions', () => {

    it('should create an action to receive Product data', () => {
        const expectedAction = {
            type: types.RECEIVE_LENDING_PRODUCT_DETAILS,
            payload: data
        }

        expect(actions.receiveLendingProduct(data)).toEqual(expectedAction)
    })
    it('should create an action to product  data after deselection', () => {
        const expectedAction = {
            type: types.REMOVE_SELECTION,
            payloaddata: []
        }

        expect(actions.removeSelection(arr)).toEqual(
            expectedAction
        )
    })
    it('should create an action to production data after selection', () => {
        const expectedAction = {
            type: types.SELECTION,
            payload: []

        }

        expect(actions.selection(arr)).toEqual(
            expectedAction
        )
    })

})