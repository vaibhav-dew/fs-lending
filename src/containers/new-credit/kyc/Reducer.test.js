import kycReducer from './Reducer'
import * as types from './Constants'

const initialState = {
    isLoading: false,
    isError: false,
    url: ''
}

const data = {
    url: 'test.com'
}
describe('kyc reducer', () => {
    it('should retrun the initial state', () => {
        expect(kycReducer(undefined, {})).toEqual(initialState)
    })
    it('should handle REQUEST_DOCUMENT_DETAILS', () => {
        expect(
            kycReducer([], {
                type: types.REQUEST_DOCUMENT_DETAILS
            })
        ).toEqual({
            isLoading: true
        })
    })
    it('should handle RECEIVE_ACTIVATE_LIMIT_DATA', () => {
        expect(
            kycReducer([], {
                type: types.RECEIVE_DOCUMENT_DETAILS,
                payload: data
            })
        ).toEqual({
            isLoading: false,
            url: data.url
        })
    })
    it('should handle FAILURE_ACTIVATE_LIMIT_DATA', () => {
        expect(
            kycReducer([], {
                type: types.FAILURE_DOCUMENT_DETAILS,
                payload: data
            })
        ).toEqual({
            isLoading: false,
            isError: true
        })
    })
    it('should handle TOGGLE_POPUP', () => {
        expect(
            kycReducer([], {
                type: types.TOGGLE_POPUP,
            })
        ).toEqual({
            isError: false
        })
    })
})
