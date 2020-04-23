import * as actions from './Actions';
import * as types from './Constants';

const data = {
    url: 'https://Tata.Digital.com/ReturnUrl'
}


describe('actions', () => {
    it('should create an action to request  Document pickup data ', () => {
        const expectedAction = {
            type: types.REQUEST_DOCUMENT_DETAILS
        }
        expect(actions.requestDocumentDetails()).toEqual(expectedAction)
    })


    it('should create an action to receive Document pickup data', () => {
        const expectedAction = {
            type: types.RECEIVE_DOCUMENT_DETAILS,
            payload: data
        }

        expect(actions.receiveDocumentDetails(data)).toEqual(expectedAction)
    })
    it('should create an action if it fails to fetch Document pickup data', () => {
        const expectedAction = {
            type: types.FAILURE_DOCUMENT_DETAILS,
            payload: data
        }

        expect(actions.failureDocumentDetails(data)).toEqual(
            expectedAction
        )
    })
    it('should create an action to toggle the popup', () => {
        const expectedAction = {
            type: types.TOGGLE_POPUP,
        }

        expect(actions.togglePopup(data)).toEqual(
            expectedAction
        )
    })

})