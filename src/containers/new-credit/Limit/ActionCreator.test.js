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
const limitStore = {
    limit: {
        isError: false,
        isLoading: false,
        refid: '',
        url: ''
    }
}
const store = mockStore(limitStore)

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
                    refid: '1234',
                    url: 'test.com'
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
                payload: mockResponse.data.offerDetailsResponse.offerDetailsList[0]
            }
        ]
        store.dispatch(activateLimitDetails()).then(() => {
            /** Assert */
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

})
