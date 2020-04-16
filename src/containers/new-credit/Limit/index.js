import React from 'react';
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
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const limit = '15000';
    const kycreq = 'N';
    const handleKyc = () => {
        if (kycreq === 'Y') {
            props.props.history.push('/kycdetails')
        } else if (kycreq === 'N') {
            dispatch(activateLimitDetails(props))
        }
    }
    const handlePopup = () => {
        dispatch(togglePopup())
    }
    if (!props.show) return null
    else return (
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
                    &#8377;{limit}
                </Value>
                <ProceedButton>
                    <ProceedButtonContent onClick={handleKyc}>{kycreq === 'Y' ? 'Proceed' : 'Activate Limit'}</ProceedButtonContent>
                </ProceedButton>
                <RedirectContent>
                    {kycreq === 'Y' ? 'You will be redirected to the Tata Capital website for KYC' : ''}
                </RedirectContent>
            </Content>
            <Popup showError={state.limit.isEerror} togglePopup={handlePopup} />
        </Container >
    )
}

Limit.propTypes = {
    limit: PropTypes.string.isRequired,
    kycreq: PropTypes.string.isRequired,
}

export default Limit