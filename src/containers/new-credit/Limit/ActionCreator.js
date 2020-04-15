import Axios from 'axios'
import { requestLimitDetails, receiveLimitDetails, failLimitDetails } from "./Actions";


export const limitDetails = (props) => {
    return dispatch => {
        dispatch(requestLimitDetails())
        const head = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const data = JSON.stringify({
            "customerhash": "G876543",
            "url": "string"
        })
        Axios
            .post('http://52.183.135.123:8090/tatapay/lending/activate/limit', data, head)
            .then(response => {
                if (response && response.request.status === 200) {
                    dispatch(receiveLimitDetails(response.data))
                    props.props.history.push(response.data.url)
                }
            })
            .catch(err => {
                dispatch(failLimitDetails(err))
            })
    }
}