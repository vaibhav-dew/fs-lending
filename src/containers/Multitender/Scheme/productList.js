import React, { useState, useEffect } from 'react';
import Product from './product'
import { ButtonContent, Button } from './style';
import { selection, removeSelection } from './Action'
import { useDispatch, useSelector } from 'react-redux';
const ProductList = (props) => {
    console.log(props)
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const dispatch = useDispatch()
    const { ProductEMIList } = props.prod
    const [selectedProduct, setSelectedProduct] = useState([])
    const handleProduct = (e, productDetails) => {
        if (e.target.checked) {
            if (selectedProduct.indexOf(productDetails) === -1) {
                productDetails['selected_Emi'] = {}
                setSelectedProduct([...selectedProduct, productDetails])
                dispatch(selection([...selectedProduct, productDetails]))
            }
        } else {
            setSelectedProduct(selectedProduct.filter((value) => value !== productDetails))
            dispatch(removeSelection(selectedProduct.filter((value) => value !== productDetails)))
        }
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

            <Button
                disabled={props.disable || selectedProduct.length <= 0}
                onClick={props.handleButton} ><ButtonContent> Done</ButtonContent> </Button>

        </>
    )
}

export default ProductList;