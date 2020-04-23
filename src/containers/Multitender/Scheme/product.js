import React, { useState, useEffect } from 'react';
import {
    ProductListContainer, ProductContent, ProductCheck, ProductNameDetails, ProductName, ProductNameDesc, ProductValue,
} from './style';
import EmiDetails from './emiDetails';
import { useSelector } from 'react-redux';

const Product = React.memo((props) => {
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const { prod, selectedProduct, handleProduct } = props
    const [enable, setEnable] = useState(false)
    const totalPrice = selectedProduct.reduce((a, b) => a + b.ProductPrice, 0)
    const creditLimit = lendingProductDetails.productDetails.AvailableCreditLimit
    const remaining = creditLimit - totalPrice
    const array3 = lendingProductDetails.productDetails.ProductEMIList && lendingProductDetails.productDetails.ProductEMIList.filter(val => !selectedProduct.includes(val));
    useEffect(() => {
        handleDisable()
    }
        // , [selectedProduct]
    )
    const handleDisable = () => {
        return array3 && array3.map((value) => {
            if (value.ModelCode === prod.ModelCode) {
                if (remaining < prod.ProductPrice) {
                    setEnable(true);
                    return false;
                }
                setEnable(false)
                return false;
            }
            return false;
        })
    }
    return (
        <div key={prod.ModelCode}>
            <ProductListContainer key={prod.ModelCode}>
                <ProductContent>
                    <ProductCheck
                        value={prod.ModelCode}
                        key={prod.ModelCode}
                        type='checkbox'
                        onClick={(e) => handleProduct(e, prod)}
                        disabled={(prod.ProductPrice > lendingProductDetails.productDetails.AvailableCreditLimit) || enable} />
                    <ProductNameDetails>
                        <ProductName>
                            {prod.ProductName}
                        </ProductName>
                        <ProductNameDesc>
                            ({prod.ProductColor})
                </ProductNameDesc>
                    </ProductNameDetails>
                    <ProductValue>
                        &#8377;{prod.ProductPrice}
                    </ProductValue>
                </ProductContent>
            </ProductListContainer>
            {selectedProduct && selectedProduct.map((value) => {
                if (value.ModelCode === prod.ModelCode) {
                    return <EmiDetails key={value.ModelCode} prod={value} selectedProduct={selectedProduct} />
                }
                return false;
            })}
        </div >
    )
})
export default Product;