import React from 'react';
import Product from './product'

const ProductList = (props) => {
    const productArray = [{
        id: 1,
        product: {
            productName: 'Croma 190 L 3 star Direct cool technology',
            productDesc: 'CRAR016 Brushline silver',
            productPrice: '10,990'
        },
        AdvanceEMI: 2,
        ProcessingFee: 500,
        Tenure: 10,
        EMI: 500,
        Interest: 0
    }, {
        id: 2,
        product: {
            productName: 'Croma 190 L 3 star Direct cool technology',
            productDesc: 'CRAR016 Brushline silver',
            productPrice: '10,990'
        },
        AdvanceEMI: 2,
        ProcessingFee: 500,
        Tenure: 10,
        EMI: 500,
        Interest: 0

    }, {
        id: 3,
        product: {
            productName: 'Croma 190 L 3 star Direct cool technology',
            productDesc: 'CRAR016 Brushline silver',
            productPrice: '10,990'
        },
        AdvanceEMI: 2,
        ProcessingFee: 500,
        Tenure: 10,
        EMI: 500,
        Interest: 0
    }]
    return (
        <>
            {
                productArray && productArray.map(prod => (
                    <Product prod={prod} />
                ))
            }
        </>
    )
}
export default ProductList;