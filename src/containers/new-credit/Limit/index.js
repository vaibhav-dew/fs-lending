import React, { useEffect } from 'react';
import {
    Container,
    Content,
    Header,
    ValueHeader,
    Value,
    ProceedButton,
    ProceedButtonContent,
    RedirectContent,
    LimitImage
} from './style';
import PropTypes from 'prop-types'
import Tick from '../../../Assets/purple.svg'
import Popup from '../Common/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { activateLimitDetails } from './ActionCreator';
import { togglePopup } from './Actions';
const Limit = (props) => {
    const limitDetailsReducer = useSelector(state => state.limit)
    const dispatch = useDispatch()
    // const { eligibilityAmount } = props
    // "mandateReq": "N",
    // "eligibilityAmount": 15000,
    // "refid": "ac4ce5c0-21fd-4104-8b86-a6efdb1cc2d0",
    // "message": "New Customer Successfully created!"
    const kycReq = 'Y';
    const eligibilityAmount = 15000
    useEffect(() => {
        if (limitDetailsReducer.url !== '') {
            props.history.push(limitDetailsReducer.url)
        }
    }, [limitDetailsReducer.url])
    const handleKyc = () => {
        if (kycReq === 'Y') {
            console.log('clicked')
            props.history.push("/kycdetails");
        } else if (kycReq === 'N') {
            dispatch(activateLimitDetails())
        }
    }
    const handlePopup = () => {
        dispatch(togglePopup())
    }
    // if (!props.show) return null
    // else
    return (
        <Container>
            <Content>
                <LimitImage
                    src={Tick}
                    alt='Tick' />
                <Header>
                    Application successful!
                </Header>
                <ValueHeader>
                    Your credit limit is
                </ValueHeader>
                <Value>
                    &#8377;{eligibilityAmount}
                </Value>
                <ProceedButton>
                    <ProceedButtonContent onClick={handleKyc}>{kycReq === 'Y' ? 'Proceed' : 'Activate Limit'}</ProceedButtonContent>
                </ProceedButton>
                <RedirectContent>
                    {kycReq === 'Y' ? 'You will be redirected to the Tata Capital website for KYC' : ''}
                </RedirectContent>
            </Content>
            <Popup showError={limitDetailsReducer.isError} togglePopup={handlePopup} />
        </Container >
    )
}

Limit.propTypes = {
    limit: PropTypes.string,
    kycReq: PropTypes.string,
}

export default Limit