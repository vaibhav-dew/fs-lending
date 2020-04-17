import configureMockStore from 'redux-mock-store'
import axiosMock from 'axios'
import thunk from 'redux-thunk'
import {
    REQUEST_ACTIVATE_LIMIT_DETAILS,
    RECEIVE_ACTIVATE_LIMIT_DETAILS,
    FAILURE_ACTIVATE_LIMIT_DETAILS
} from './Constants'
import { activateLimitDetails } from './ActionCreator'

/** Mocks */
jest.mock('axios')
const middleware = [thunk]
const mockStore = configureMockStore(middleware)
const store = mockStore({})

beforeEach(() => {
    /** Clear mocks and actions before each test run */
    store.clearActions()
    axiosMock.mockClear()
    jest.clearAllMocks()
})

describe('limit details ActionCreators', () => {
    it('should dispatch REQUEST_ACTIVATE_LIMIT_DETAILS ,RECEIVE_ACTIVATE_LIMIT_DETAILS,when fetching offer details', () => {
        /** Arrange */
        const mockResponse = {
            response: {
                data: {
                    refid: '2aa75562-c627-4721-9e65-1c4d2e1cfd1b',
                    url: 'https://Tata.Digital.com/ReturnUrl'
                }
            }
        }
        axiosMock.post.mockResolvedValueOnce(mockResponse)

        /** Act */
        const expectedActions = [
            {
                type: REQUEST_ACTIVATE_LIMIT_DETAILS
            },
            {
                type: RECEIVE_ACTIVATE_LIMIT_DETAILS,
                payload: mockResponse.data
            }
        ]
        store.dispatch(activateLimitDetails({})).then(() => {
            /** Assert */
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
    it('should dispatch FETCH_OFFER_DETAILS_BEGIN, FETCH_OFFER_DETAILS_FAILURE with `Oops! We could not load the offer details` message when fetching offer details', () => {
        /* Arrange */
        const error = {
            message: 'Network Error'
        }
        axiosMock.post.mockImplementationOnce(() => Promise.reject(error))

        /** Act */
        const expectedActions = [
            { type: REQUEST_ACTIVATE_LIMIT_DETAILS },
            {
                type: FAILURE_ACTIVATE_LIMIT_DETAILS,
                payload: `Oops! We could not load the details`
            }
        ]
        store.dispatch(activateLimitDetails({})).then(() => {
            /** Assert */
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
