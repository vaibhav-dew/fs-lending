import React, { useState } from 'react'
import {
    Container,
    ContentHead,
    ContentSubHead,
    OptionContainer,
    OptionValue,
    OptionSubValue,
    Button,
    ButtonContent,
    LinkContent,
} from './style'
import PropTypes from 'prop-types'
import Instructions from './Instructions.js';
import Radio from './Radio';
import NewNavbar from '../Common/new-navbar';
import Popup from '../Common/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { aadharDetails, documentDetails } from './ActionCreator';
import { handle } from './Actions';
const NewKyc = props => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    console.log(state)
    const [selectedTag, setselectedTag] = useState("");
    // const [error, setError] = useState(state.kycReducer.error)
    const handleOption = e => setselectedTag(e.target.value);
    const handleChange = () => {
        if (selectedTag === 'aadhar') {
            dispatch(aadharDetails(props))
        } else if (selectedTag === 'document') {
            dispatch(documentDetails(props))
        }
    }
    const togglePopup = () => {
        dispatch(handle())
    }
    return (
        <>
            <Container value={selectedTag}>
                <NewNavbar />
                <ContentHead>
                    COMPLETE YOUR KYC
                </ContentHead>
                <ContentSubHead>
                    How would you like to proceed?
                </ContentSubHead>
                <OptionContainer>
                    <Radio value='aadhar' onValueChange={handleOption} />
                    <OptionValue>
                        AADHAR
                    </OptionValue>
                </OptionContainer>
                <OptionSubValue>
                    Instant online verification
                </OptionSubValue>
                {selectedTag === 'aadhar' ? <Instructions value={selectedTag} /> : ''}
                <OptionContainer>
                    <Radio value='document' onValueChange={handleOption} />
                    <OptionValue>
                        Document PickUp
                    </OptionValue>
                </OptionContainer>
                <OptionSubValue>
                    Takes 24 hours
                </OptionSubValue>
                {selectedTag === 'document' ? <Instructions value={selectedTag} /> : ''}
                {selectedTag === 'aadhar' ? <LinkContent>You will be redirected to Aadhar website</LinkContent>
                    : ''}
                {selectedTag === 'document' ? <LinkContent style={{ margin: '57px 20px 0px 21px' }}>You will be redirected to Tata Capital website</LinkContent>
                    : ''}
                {selectedTag ? <Button onClick={handleChange}><ButtonContent> Next</ButtonContent> </Button> : ''}
                <Popup showError={state.kycReducer.error} togglePopup={togglePopup} />
            </Container>
        </>
    )
}
NewKyc.propTypes = {
    selectedTag: PropTypes.string,
}
export default NewKyc

