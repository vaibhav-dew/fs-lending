import React, { useEffect, useState } from 'react';
import MultitenderNavbar from '../common/Navbar/index';
import { Container, LimitContent, LimitHead, LimitValue } from './style';
import ProductList from './productList';
// import { fetchLendingProductDetails } from './ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { receiveLendingProduct } from './Action';

const Scheme = (props) => {
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const dispatch = useDispatch()
    const [showOtp, setShowOtp] = useState(false)
    const [disable, setDisable] = useState(true)
    // function isOneChecked() {
    //     // All <inputinput> tags...
    //     var chx = document.getElementsByTagName('input');
    //     for (var i = 0; i < chx.length; i++) {
    //         if (chx[i].type === 'radio' && chx[i].checked) {
    //             // setDisable(false)
    //             return false;
    //         }

    //     }
    //     // setDisable(true)
    //     return true;
    // }
    const handle = () => {
        for (let i = 0; i < lendingProductDetails.selection.length; i++) {
            console.log(i, 'iiii')
            // if (typeof lendingProductDetails.selection[i].selected_Emi == "undefined") {
            //     return true;
            // }
            if (Object.keys(lendingProductDetails.selection[i].selected_Emi).length <= 0) {
                console.log('ssssssss')
                return true;
            }
        }
        console.log('bhar aagya')
        return false;
    }
    useEffect(() => {
        dispatch(receiveLendingProduct())
        // setDisable(isOneChecked())
        console.log(lendingProductDetails.selection, 'selelelelelel')

        setDisable(handle())
        // for (let i = 0; i < lendingProductDetails.selection.length; i++) {
        //     console.log(i, 'iiii')
        //     if (Object.keys(lendingProductDetails.selection[i].selected_Emi).length <= 0) {
        //         console.log('lo aur andar aagya')
        //         setDisable(true)
        //         break;
        //     } else {
        //         setDisable(false)
        //     }
        // }
        // var sum = 0
        // lendingProductDetails.selection && lendingProductDetails.selection.map(value => {
        //     sum += Object.keys(value.selected_Emi).length
        //     console.log(sum, 'summmm')
        //     console.log('hi', Object.keys(value.selected_Emi).length)
        //     console.log('hi2', lendingProductDetails.selection.length)
        //     // setDisable(value.includes('selected_Emi'))
        //     // if (Object.keys(value.selected_Emi).length <= 0) {
        //     //     console.log('lo aur andar aagya')
        //     //     setDisable(true)
        //     //     return;
        //     // } 
        //     if (sum === lendingProductDetails.selection.length * 5) {
        //         setDisable(false)
        //     } else {
        //         setDisable(true)
        //     }
        //     // if (Object.keys(value.selected_Emi).length === lendingProductDetails.selection.length) {
        //     //     console.log('lo aur andar aagya')
        //     //     return setDisable(false)
        //     // } else {
        //     //     setDisable(true)
        //     // }
        // })
    }, [handle(lendingProductDetails.selection), disable, dispatch, lendingProductDetails.selection])

    const handleButton = () => {
        console.log(lendingProductDetails.selection.length)
        console.log(lendingProductDetails, 'lendingProductDetails')
        setShowOtp(!showOtp)
        props.history.push('/otp')
    }
    // const handle = () => {
    //     for (let i = 0; i < lendingProductDetails.selection.length; i++) {
    //         console.log(i, 'iiii')
    //         // if (typeof lendingProductDetails.selection[i].selected_Emi == "undefined") {
    //         //     return true;
    //         // }
    //         if (Object.keys(lendingProductDetails.selection[i].selected_Emi).length <= 0) {
    //             console.log('ssssssss')
    //             return true;
    //         }
    //     }
    //     console.log('bhar aagya')
    //     return false;
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
                <ProductList prod={lendingProductDetails.productDetails} handleButton={handleButton} disable={disable} />
            </Container>
        </>
    )
}
export default Scheme;