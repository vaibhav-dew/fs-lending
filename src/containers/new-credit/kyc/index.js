import React, { useState } from 'react'
import {
    Container,
    Navbar,
    NavbarRoute,
    NavbarHead,
    NavbarSubHead,
    ContentHead,
    ContentSubHead,
    OptionContainer,
    OptionValue,
    OptionSubValue,
    Button,
    ButtonContent,
    LinkContent,
    NavbarHeadContent
} from './style'
import PropTypes from 'prop-types'
import Instructions from './Instructions.js';
import Radio from './Radio';
import Axios from 'axios'
const NewKyc = props => {
    const [selectedTag, setselectedTag] = useState("");
    const handleOption = e => setselectedTag(e.target.value);
    const navbarRoute = () => props.history.push('/');
    const handleChange = () => {
        if (selectedTag === 'aadhar') {
            const head = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const data = JSON.stringify({
                "customerhash": "string",
                "refid": "string"
            })
            Axios
                .post('http://52.183.135.123:8090/tatapay/lending/generate/token?channnel=M', data, head)
                .then(response => {
                    if (response && response.request.status === 200) {
                        console.log('response', response)
                        console.log(response.data.token)
                        props.history.push('/tatacapital',
                            { selectedTag })
                    } else {
                        console('token is null ')
                    }
                })
                .catch(err => {
                    if (err && err.response) {
                        console.log(err)
                    }
                })
        } else if (selectedTag === 'document') (
            props.history.push('/tatacapital',
                { selectedTag })
        )
    }

    return (
        <>
            <Container value={selectedTag}>
                <Navbar>
                    <NavbarHead>
                        <NavbarRoute onClick={navbarRoute}>
                            {/* <img style={{}} */}
                            <div style={{ height: '16px', width: '10px', margin: '4px 7px 4px 7px' }}>
                                &lt;
                            </div>
                        </NavbarRoute>
                        <NavbarHeadContent>Tata Credit Line</NavbarHeadContent>
                    </NavbarHead>
                    <NavbarSubHead>Step 2/3</NavbarSubHead>
                </Navbar>
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
            </Container>
        </>
    )
}
NewKyc.propTypes = {
    selectedTag: PropTypes.string,
}
export default NewKyc

