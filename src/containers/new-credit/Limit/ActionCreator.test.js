import axiosMock from 'axios'
import * as types from './Constants'
import {
    activateLimitDetails
} from './ActionCreator'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('axios')
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ refid: '', url: '' })

beforeEach(() => {
    /** Clear mocks and actions before each test run */
    store.clearActions()
    axiosMock.mockClear()
    jest.clearAllMocks()
})

describe('actionCreators', () => {
    it('should dispatch activate limit details action', () => {
        const data = {
            refid: '1234',
            url: 'test.com'
        }
        axiosMock.post.mockImplementationOnce(() =>
            Promise.resolve({
                response: {
                    data: {
                        refid: '1234',
                        url: 'test.com'
                    }
                }
            })
        )

        const expectedAction = [
            { type: types.REQUEST_ACTIVATE_LIMIT_DETAILS },
            { type: types.RECEIVE_ACTIVATE_LIMIT_DETAILS, payload: data }
        ]

        return store.dispatch(activateLimitDetails()).then(() => {
            const actionList = store.getActions()

            // To check wheather the axios GET call have been made only once
            expect(axiosMock.post).toHaveBeenCalledTimes(1)
            const head = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const body = JSON.stringify({
                "customerhash": "G876543",
                "url": "string"
            })
            // To validate the URL and other parameters that has been used while making the http get request
            expect(axiosMock.post).toHaveBeenCalledWith('http://52.183.135.123:8090/tatapay/lending/activate/limit', body, head
            )

            // To validate the actions that have been dispatched
            expect(actionList).toEqual(expectedAction)
        })
    })
})
