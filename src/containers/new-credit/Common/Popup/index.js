import React from 'react';
import {
    Container,
    Content,
    PopupHeader,
    PopupDetail,
    PopupButton,
    PopupButtonContent
} from './style';
import Logo from '../../../Assets/purple.svg'
import PropTypes from 'prop-types'

const Popup = (props) => {
    const handlePopup = () => {
        props.setShowError(!props.showError)
    }
    console.log(props.showError)
    if (!props.showError) return null;
    else
        return (
            <Container>
                <Content>
                    <img
                        src={Logo}
                        alt='completed'
                        style={{ margin: '32px auto 0 auto', display: 'block' }} />
                    <PopupHeader>
                        Timeout
                </PopupHeader>
                    <PopupDetail>
                        Your Transaction is timed out.<br />
                        Initiate again
                </PopupDetail>
                    <PopupButton>
                        <PopupButtonContent onClick={handlePopup}>OK</PopupButtonContent>
                    </PopupButton>
                </Content>
            </Container>
        )
}

Popup.propTypes = {
    showError: PropTypes.string.isRequired,
    setShowError: PropTypes.string.isRequired
}
export default Popup;