import Axios from 'axios'
import {
    requestDocumentDetails,
    receiveDocumentDetails,
    failureDocumentDetails
} from "./Actions";

export const documentDetails = (props) => {
    return dispatch => {
        dispatch(requestDocumentDetails())
        const head = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const data = JSON.stringify({
            "customerhash": "G876543",
        })
        return Axios
            .post('http://52.183.135.123:8090/tatapay/lending/document/pickup', data, head)
            .then(response => {
                dispatch(receiveDocumentDetails(response.data))
            })
            .catch(err => {
                dispatch(failureDocumentDetails(`Oops! We could not load the details`))
            })
    }
}

