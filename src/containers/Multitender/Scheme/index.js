import React, { useEffect, useState } from 'react';
import MultitenderNavbar from '../common/Navbar/index';
import { Container, LimitContent, LimitHead, LimitValue } from './style';
import ProductList from './productList';
// import { fetchLendingProductDetails } from './ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { receiveLendingProduct } from './Action';
import OTP from '../../credit-line/OTP';

const Scheme = (props) => {
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const dispatch = useDispatch()
    const [showOtp, setShowOtp] = useState(false)

    useEffect(() => {
        dispatch(receiveLendingProduct())
    }, [dispatch, showOtp])
    const handleButton = () => {
        console.log(lendingProductDetails, 'lendingProductDetails')
        setShowOtp(!showOtp)
        props.history.push('/otp')
    }
    // if (showOtp) {
    //     return <OTP />
    // }
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
                <ProductList prod={lendingProductDetails.productDetails} handleButton={handleButton} />
            </Container>
            {/* <OTP show={showOtp} setShowOtp={setShowOtp} props={props} /> */}

            {/* <OTP show={showOtp} set></OTP> */}
        </>
    )
}
export default Scheme;