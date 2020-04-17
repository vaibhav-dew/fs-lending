import Axios from 'axios'
import { requestActivateLimitDetails, receiveActivateLimitDetails, failActivateLimitDetails } from "./Actions";


export const activateLimitDetails = (props) => {
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

        return Axios
            .post('http://52.183.135.123:8090/tatapay/lending/activate/limit', data, head)
            .then(response => {
                dispatch(receiveActivateLimitDetails(response.data))
                props.props.history.push(response.data.url)

            })
            .catch(err => {
                dispatch(failActivateLimitDetails(`Oops! We could not load the details`))
            })
    }
}