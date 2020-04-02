import React, { useState } from 'react'
import {
    Container, Navbar, NavbarRoute, NavbarHead,
    NavbarSubHead, ContentHead, ContentSubHead, Input, OptionContainer
    , OptionValue, OptionSubValue, Button, ButtonContent, LinkContent
} from './style'
import Instructions from './Instructions.js';
const NewKyc = props => {
    const [selectedTag, setselectedTag] = useState("");
    const handleOption = e => setselectedTag(e.target.value);

    return (
        <>
            <Container value={selectedTag}>
                <Navbar>
                    <div style={{ display: 'flex' }}>
                        <NavbarRoute>
                            &lt;
                        </NavbarRoute>
                        <NavbarHead>Tata Credit Line</NavbarHead>
                    </div>
                    <NavbarSubHead>Step 2/3</NavbarSubHead>
                </Navbar>
                <ContentHead>
                    COMPLETE YOUR KYC
                </ContentHead>
                <ContentSubHead>
                    How would you like to proceed?
                </ContentSubHead>
                <OptionContainer>
                    <Input
                        name='type'
                        type='radio'
                        value='aadhar'
                        onChange={handleOption}
                    />
                    <OptionValue value={selectedTag}>
                        AADHAR
                    </OptionValue>
                </OptionContainer>
                <OptionSubValue value={selectedTag}>
                    Instant online verification
                </OptionSubValue>
                {selectedTag === 'aadhar' ? <Instructions value={selectedTag} /> : ''}
                <OptionContainer>
                    <Input
                        name='type'
                        type='radio'
                        value='document'
                        onChange={handleOption}
                    />
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
                {selectedTag ? <Button><ButtonContent> Next</ButtonContent> </Button> : ''}
            </Container>
        </>
    )
}
export default NewKyc
