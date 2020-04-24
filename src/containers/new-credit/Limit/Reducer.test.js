import activateLimitReducer from './Reducer'
import * as types from './Constants'

const initialState = {
    isLoading: false,
    isError: false,
    refid: '',
    url: ''
}

const data = {
    refid: '1234',
    url: 'test.com'
}
describe('activate limit reducer', () => {
    it('should retrun the initial state', () => {
        expect(activateLimitReducer(undefined, {})).toEqual(initialState)
    })
    it('should handle REQUEST_ACTIVATE_LIMIT_DATA', () => {
        expect(
            activateLimitReducer([], {
                type: types.REQUEST_ACTIVATE_LIMIT_DETAILS
            })
        ).toEqual({
            isLoading: true
        })
    })
    it('should handle RECEIVE_ACTIVATE_LIMIT_DATA', () => {
        expect(
            activateLimitReducer([], {
                type: types.RECEIVE_ACTIVATE_LIMIT_DETAILS,
                payload: data
            })
        ).toEqual({
            isLoading: false,
            refid: data.refid,
            url: data.url
        })
    })

    it('should handle FAILURE_ACTIVATE_LIMIT_DATA', () => {
        expect(
            activateLimitReducer([], {
                type: types.FAILURE_ACTIVATE_LIMIT_DETAILS,
                payload: data
            })
        ).toEqual({
            isLoading: false,
            isError: true
        })
    })
    it('should handle TOGGLE_POPUP', () => {
        expect(
            activateLimitReducer([], {
                type: types.TOGGLE_POPUP,
            })
        ).toEqual({
            isError: false
        })
    })
})
