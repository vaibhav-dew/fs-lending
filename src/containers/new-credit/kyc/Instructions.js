import React, {
} from "react";

import {
    InstructionContainer, Instructions, InstructionsHeader, InstructionContent,
    InstructionContentContainer, StepContent,
    Steper,
} from './style';
import PropTypes from 'prop-types'
import DocumentProof from './DocumentProof'

const AadharInstructions = (props) => {
    const { value } = props
    const IdentityProof = ['Pan Card', 'Aadhar Card', 'Passport', 'Voter Id']
    const AddressProof = ['Utility Bill', 'Aadhar Card', 'Passport', 'Voter Id']
    return (
        <>
            {props.value === 'aadhar' ?
                (
                    <InstructionContainer>
                        <InstructionsHeader>
                            Takes less than 30 seconds. Select this if you
                            are Aadhaar is updated with your mobile
                            number.
                        </InstructionsHeader>
                        <Instructions>
                            Instructions
                        </Instructions>
                        <InstructionsHeader style={{ marginTop: '9px', height: '20px' }}>
                            KYC via Aadhaar is 4 step process
                        </InstructionsHeader>
                        <InstructionContentContainer>
                            <Steper>
                                <StepContent>1</StepContent>
                            </Steper>
                            <InstructionContent>
                                Enter your Aadhaar Number & Captcha
                            </InstructionContent>
                        </InstructionContentContainer>
                        <InstructionContentContainer>
                            <Steper>
                                <StepContent>2</StepContent>
                            </Steper>
                            <InstructionContent>
                                Set a 4 digit share code of your choice
                            </InstructionContent>
                        </InstructionContentContainer>
                        <InstructionContentContainer>
                            <Steper>
                                <StepContent>3</StepContent>
                            </Steper>
                            <InstructionContent>
                                Enter OTP sent to your mobile number
                            </InstructionContent>
                        </InstructionContentContainer>
                        <InstructionContentContainer>
                            <Steper>
                                <StepContent>4</StepContent>
                            </Steper>
                            <InstructionContent>
                                Share the share code you just set with us
                            </InstructionContent>
                        </InstructionContentContainer>
                    </InstructionContainer>
                )
                : ''
            }
            {
                props.value === 'document' ? (
                    <div>
                        <InstructionContainer>
                            <Instructions style={{ width: '220px', marginTop: '16px' }}>
                                Accepted Proof of Identity
            </Instructions>
                            {IdentityProof &&
                                IdentityProof.map((id) => <DocumentProof key={id} id={id} />)}
                            <Instructions style={{ width: '220px', marginTop: '16px' }}>
                                Accepted Proof of Address
            </Instructions>
                            {AddressProof &&
                                AddressProof.map((id) => <DocumentProof key={id} id={id} />)}
                        </InstructionContainer>
                        <InstructionsHeader style={{
                            margin: '22px 16px 0px 16px',
                            width: '328px',
                            height: '120px',
                        }}>
                            Hard copies of Proof of Identity and Proof of
                            Address will be picked up.<br /><br />
                            Tip: In case none of the accepted documents
                            contain your current address, you may want to get
                            your Aadhaar updated and then proceed.
                        </InstructionsHeader>
                    </div>
                ) : ''
            }
        </>

    );
}
AadharInstructions.propTypes = {
    selectedTag: PropTypes.string,
}
export default AadharInstructions;
