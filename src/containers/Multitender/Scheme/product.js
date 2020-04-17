import React, { useState } from 'react';
import {
    ProductListContainer, ProductContent, ProductCheck, ProductNameDetails, ProductName, ProductNameDesc, ProductValue,
} from './style';
import EmiDetails from './emiDetails';


const Product = (props) => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const [emi, setEmi] = useState(false)
    const handleClick = (e, id) => {
        if (e.target.checked) {
            if (selectedProduct.indexOf(id) === -1) {
                setSelectedProduct([...selectedProduct, id])
                setEmi(!emi)
            }
        } else {
            setSelectedProduct(selectedProduct.filter((value) => value !== id))
            setEmi(!emi)
        }
    }
    const { prod } = props
    return (
        <div key={prod.id}>
            <ProductListContainer key={prod.id}>
                <ProductContent>
                    <ProductCheck key={prod.id}
                        type='checkbox' onClick={(e) => handleClick(e, prod.id)} />
                    <ProductNameDetails>
                        <ProductName>
                            {prod.product.productName}
                        </ProductName>
                        <ProductNameDesc>
                            ({prod.product.productDesc})
                </ProductNameDesc>
                    </ProductNameDetails>
                    <ProductValue>
                        &#8377;{prod.product.productPrice}
                    </ProductValue>
                </ProductContent>
            </ProductListContainer>
            {selectedProduct && selectedProduct.map(value => {
                if (value === prod.id) {
                    return <EmiDetails prod={prod} />
                }
            })}
        </div >
    )
}
export default Product;