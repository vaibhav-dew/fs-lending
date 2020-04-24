import React, { useEffect } from 'react';
import MultitenderNavbar from '../common/Navbar/index';
import { Container, LimitContent, LimitHead, LimitValue } from './style';
import ProductList from './productList';
// import { fetchLendingProductDetails } from './ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { receiveLendingProduct } from './Action';

const Scheme = () => {
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(receiveLendingProduct())
    }, [dispatch])
    return (
        <>
            <Container>
                <MultitenderNavbar />
                <LimitContent>
                    <LimitHead>
                        AVAILABLE LIMIT
                    </LimitHead>
                    <LimitValue>
                        &#8377;{lendingProductDetails.productDetails.AvailableCreditLimit}
                    </LimitValue>
                </LimitContent>
                <ProductList prod={lendingProductDetails.productDetails} />
            </Container>
        </>
    )
}
export default Scheme;