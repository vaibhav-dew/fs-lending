import * as actions from './Actions';
import * as types from './Constants';

const data = {
    refid: 'ac4ce5c0-21fd-4104-8b86-a6efdb1cc2d0',
    url: 'https://Tata.Digital.com/ReturnUrl'
}


describe('actions', () => {
    it('should create an action to request  Activate limit data ', () => {
        const expectedAction = {
            type: types.REQUEST_ACTIVATE_LIMIT_DETAILS
        }
        expect(actions.requestActivateLimitDetails()).toEqual(expectedAction)
    })


    it('should create an action to receive Activate limit data', () => {
        const expectedAction = {
            type: types.RECEIVE_ACTIVATE_LIMIT_DETAILS,
            payload: data
        }

        expect(actions.receiveActivateLimitDetails(data)).toEqual(expectedAction)
    })
    it('should create an action if it fails to fetch Activate limit data', () => {
        const expectedAction = {
            type: types.FAILURE_ACTIVATE_LIMIT_DETAILS,
            payload: data
        }

        expect(actions.failActivateLimitDetails(data)).toEqual(
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