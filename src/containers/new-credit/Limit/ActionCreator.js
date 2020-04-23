import axios from 'axios'
import { requestActivateLimitDetails, receiveActivateLimitDetails, failActivateLimitDetails } from "./Actions";
import { FS_LENDING_ACTIVATE_LIMIT_API } from './Constants'


export const activateLimitDetails = () => {
    return dispatch => {
        dispatch(requestActivateLimitDetails())
        const head = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const data = JSON.stringify({
            "customerhash": "G876543",
            "url": "string"
        })
        return axios
            .post(FS_LENDING_ACTIVATE_LIMIT_API, data, head)
            .then(response => {
                dispatch(receiveActivateLimitDetails(response.data))
            })
            .catch(err => {
                dispatch(failActivateLimitDetails(`Oops! We could not load the details`))
            })
    }
}