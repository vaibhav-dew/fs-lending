import configureMockStore from 'redux-mock-store'
import axiosMock from 'axios'
import thunk from 'redux-thunk'
import {
    REQUEST_DOCUMENT_DETAILS,
    RECEIVE_DOCUMENT_DETAILS,
    FAILURE_DOCUMENT_DETAILS
} from './Constants'
import { documentDetails } from './ActionCreator'

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
    it('should dispatch when  REQUEST_DOCUMENT_DETAILS ,RECEIVE_DOCUMENT_DETAILS fetching  details', () => {
        /** Arrange */
        const mockResponse = {
            data: {
                url: 'https://Tata.Digital.com/ReturnUrl'

            }
        }
        axiosMock.post.mockResolvedValueOnce(mockResponse)

        /** Act */
        const expectedActions = [
            {
                type: REQUEST_DOCUMENT_DETAILS
            },
            {
                type: RECEIVE_DOCUMENT_DETAILS,
                payload: mockResponse.data
            }
        ]
        store.dispatch(documentDetails()).then(() => {
            /** Assert */
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
    it('should dispatch FAILURE_DOCUMENT_DETAILS,  with `Oops! We could not load the  details` message when fetching  details', () => {
        /* Arrange */
        const error = {
            message: 'Network Error'
        }
        axiosMock.post.mockImplementationOnce(() => Promise.reject(error))

        /** Act */
        const expectedActions = [
            { type: REQUEST_DOCUMENT_DETAILS },
            {
                type: FAILURE_DOCUMENT_DETAILS,
                payload: `Oops! We could not load the details`
            }
        ]
        store.dispatch(documentDetails()).then(() => {
            /** Assert */
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
