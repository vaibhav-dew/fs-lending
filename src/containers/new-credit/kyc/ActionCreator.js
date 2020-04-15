import Axios from 'axios'
import {
    requestAadharDetails,
    receiveAadharDetails,
    failureAadharDetails,
    requestDocumentDetails,
    receiveDocumentDetails,
    failureDocumentDetails
} from "./Actions";


export const aadharDetails = (props) => {
    return dispatch => {
        dispatch(requestAadharDetails())
        const head = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const data = JSON.stringify({
            "customerhash": "string",
            "refid": "string"
        })
        Axios
            .post('http://52.183.135.123:8090/tatapay/lending/generate/token?channnel=P', data, head)
            .then(response => {
                if (response && response.request.status === 200) {
                    console.log('response', response)
                    dispatch(receiveAadharDetails(response.data))
                }
            })
            .catch(err => {
                if (err && err.response) {
                    dispatch(failureAadharDetails(err))
                }
            })
    }
}


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
        Axios
            .post('http://52.183.135.123:8090/tatapay/lending/document/pickup', data, head)
            .then(response => {
                if (response && response.request.status === 200) {
                    console.log('response', response)
                    dispatch(receiveDocumentDetails(response.data))
                    props.history.push(response.data.url)
                }
            })
            .catch(err => {
                if (err && err.response) {
                    dispatch(failureDocumentDetails(err))
                }
            })
    }
}

