import React, { useState } from 'react';
import Product from './product'
import { ButtonContent, Button } from './style';
import { selection, removeSelection } from './Action'
import { useDispatch, useSelector } from 'react-redux';
import OTP from '../../credit-line/OTP';
const ProductList = (props) => {
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const dispatch = useDispatch()
    const { ProductEMIList } = props.prod
    const [selectedProduct, setSelectedProduct] = useState([])
    const [showOtp, setShowOtp] = useState(false)
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
        setShowOtp(!showOtp)
    }
    if (showOtp) {
        return <OTP />
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
            {/* {showOtp && <OTP />} */}
        </>
    )
}

export default ProductList;