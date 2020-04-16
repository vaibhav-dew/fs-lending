import React, { useState } from 'react';
import { ProductListContainer, ProductContent, ProductCheck, ProductNameDetails, ProductName, ProductNameDesc, ProductPrice } from './style';

const ProductList = (props) => {
    const productArray = [{
        id: 1,
        product: {
            productName: 'Croma 190 L 3 star Direct cool technology',
            productDesc: 'CRAR016 Brushline silver',
            productPrice: '10,990'
        }
    }, {
        id: 2,
        product: {
            productName: 'Croma 190 L 3 star Direct cool technology',
            productDesc: 'CRAR016 Brushline silver',
            productPrice: '10,990'
        }
    }, {
        id: 3,
        product: {
            productName: 'Croma 190 L 3 star Direct cool technology',
            productDesc: 'CRAR016 Brushline silver',
            productPrice: '10,990'
        }
    }]
    return (
        <>
            {
                productArray && productArray.map(prod => (
                    <ProductListContainer key={prod.id}>
                        <ProductContent>
                            <ProductCheck key={prod.id}
                                type="checkbox" />
                            <ProductNameDetails>
                                <ProductName>
                                    {prod.product.productName}
                                </ProductName>
                                <ProductNameDesc>
                                    ({prod.product.productDesc})
                                </ProductNameDesc>
                            </ProductNameDetails>
                            <ProductPrice>
                                &#8377;{prod.product.productPrice}
                            </ProductPrice>
                        </ProductContent>
                    </ProductListContainer>
                ))
            }
        </>
    )
}
export default ProductList;