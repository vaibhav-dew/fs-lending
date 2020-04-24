// import Axios from 'axios'
import * as action from './Action'


export const fetchLendingProductDetails = (props) => {
    return dispatch => {
        dispatch(action.requestLendingProduct())
        dispatch(action.receiveLendingProduct({
            RefID: 'b0086565c5e60fa9c60cee3c74a6fcb9',
            AvailableCreditLimit: 40000,
            ProductEMIList: [
                {
                    ModelCode: 'ABC123',
                    ProductName: 'Croma 190 l 3 star Direct Cool technology',
                    ProductColor: 'Blue',
                    ProductPrice: 30000,
                    TenureEMIList: [
                        {
                            AdvanceEMI: 0,
                            ProcessingFee: 1000,
                            Tenure: 3,
                            EMI: 10000,
                            Interest: 0
                        },
                        {
                            AdvanceEMI: 0,
                            ProcessingFee: 1000,
                            Tenure: 6,
                            EMI: 5000,
                            Interest: 0
                        }, {
                            AdvanceEMI: 0,
                            ProcessingFee: 1000,
                            Tenure: 9,
                            EMI: 2500,
                            Interest: 0
                        }, {
                            AdvanceEMI: 0,
                            ProcessingFee: 1000,
                            Tenure: 12,
                            EMI: 1250,
                            Interest: 0
                        }
                    ],
                }, {
                    ModelCode: 'ABC1235',
                    ProductName: '54’ Sony LED TV',
                    ProductColor: 'Blue',
                    ProductPrice: 15000,
                    TenureEMIList: [
                        {
                            AdvanceEMI: 0,
                            ProcessingFee: 500,
                            Tenure: 3,
                            EMI: 5000,
                            Interest: 0
                        },
                        {
                            AdvanceEMI: 1,
                            ProcessingFee: 500,
                            Tenure: 10,
                            EMI: 2500,
                            Interest: 0
                        }
                    ],
                }, {
                    ModelCode: 'ABC1234',
                    ProductName: '54’ Lenevo Laptop',
                    ProductColor: 'Blue',
                    ProductPrice: 50000,
                    TenureEMIList: [
                        {
                            AdvanceEMI: 1,
                            ProcessingFee: 500,
                            Tenure: 5,
                            EMI: 10000,
                            Interest: 0
                        },
                        {
                            AdvanceEMI: 0,
                            ProcessingFee: 500,
                            Tenure: 10,
                            EMI: 5000,
                            Interest: 0
                        }
                    ],
                },
                {
                    ModelCode: '0027858',
                    ProductName: 'Sony DVD Player',
                    ProductColor: 'Silver',
                    ProductPrice: 5000,
                    TenureEMIList: [
                        {
                            AdvanceEMI: 1,
                            ProcessingFee: 100,
                            Tenure: 5,
                            EMI: 1000,
                            Interest: 0
                        }, {
                            AdvanceEMI: 1,
                            ProcessingFee: 300,
                            Tenure: 6,
                            EMI: 1000,
                            Interest: 0
                        }
                    ]
                }
            ]
        }))
        // dispatch(action.failLendingProduct(`Oops! We could not load the details`))
        // const head = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }
        // const data = JSON.stringify({
        //     "customerhash": "G876543",
        //     "url": "string"
        // })
        // 
        // return Axios
        //     .post('http://52.183.135.123:8090/tatapay/lending/activate/limit', data, head)
        //     .then(response => {
        //         dispatch(receiveActivateLimitDetails(response.data))
        //         // props.props.history.push(response.data.url)

        //     })
        //     .catch(err => {
        //         dispatch(failActivateLimitDetails(`Oops! We could not load the details`))
        //     })
    }
}