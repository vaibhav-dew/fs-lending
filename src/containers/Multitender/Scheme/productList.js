import React, { useState } from 'react';
import Product from './product'
import { ButtonContent, Button } from './style';
import { selection, removeSelection } from './Action'
import { useDispatch, useSelector } from 'react-redux';
const ProductList = (props) => {
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const dispatch = useDispatch()
    const { ProductEMIList } = props.prod
    const [selectedProduct, setSelectedProduct] = useState([])
    const handleProduct = (e, productDetails) => {
        if (e.target.checked) {
            if (selectedProduct.indexOf(productDetails) === -1) {
                productDetails.TenureEMIList && productDetails.TenureEMIList.map((emiList, index) => {
                    if (index === 0) {
                        productDetails['selected Emi'] = emiList
                    }
                    return false;
                })
                setSelectedProduct([...selectedProduct, productDetails])
                dispatch(selection([...selectedProduct, productDetails]))
            }
        } else {
            setSelectedProduct(selectedProduct.filter((value) => value !== productDetails))
            dispatch(removeSelection(selectedProduct.filter((value) => value !== productDetails)))
        }
    }
    const handleButton = () => {
        console.log(lendingProductDetails, 'lendingProductDetails')
    }

    return (
        <>
            {
                ProductEMIList && ProductEMIList.map(prod => (
                    <Product
                        key={prod.ModelCode}
                        prod={prod}
                        handleProduct={handleProduct}
                        selectedProduct={selectedProduct}
                    />
                ))
            }

            <Button disabled={!selectedProduct.length > 0} onClick={handleButton} ><ButtonContent> Done</ButtonContent> </Button>

        </>
    )
}

export default ProductList;