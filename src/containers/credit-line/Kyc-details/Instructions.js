import React, {
} from "react";

import {InstructionContainer,Instructions,InstructionsHeader,InstructionContent,ProceedButton
} from './Style';

const AadharInstructions = (props) =>{
    return (
        <>  
        {props.value==='aadhar' ?
            (
                <InstructionContainer>
                <Instructions>
                    <InstructionsHeader>Please Note: </InstructionsHeader>
                    <InstructionContent>KYC via Aadhar is 4 step process</InstructionContent> 
                </Instructions>
                <Instructions>
                    <InstructionsHeader>Step1: </InstructionsHeader>
                    <InstructionContent>Enter your Aadhar Number and captcha </InstructionContent> 
                </Instructions>
                <Instructions>
                    <InstructionsHeader>Step2: </InstructionsHeader>
                    <InstructionContent>Set a 4 digit share code of your choice</InstructionContent> 
                </Instructions>
                <Instructions>
                    <InstructionsHeader>Step3: </InstructionsHeader>
                    <InstructionContent>Enter OTP sent to your mobile number</InstructionContent> 
                </Instructions>
                <Instructions>
                    <InstructionsHeader>Step4: </InstructionsHeader>
                    <InstructionContent>Share the share code you just set with us</InstructionContent> 
                </Instructions>
                <ProceedButton>Proceed</ProceedButton>
                </InstructionContainer>  
            )  
            :''
        }
        {props.value==='document' ?
            (
                <InstructionContainer style={{fontSize:"12px"}}>
                    <InstructionContent style={{display:"block", marginBottom:"10px"}}>
                    Hard copies of Proof of Identity and Proof of Address will be picked up.
                    Accepted proof of Identity 1.PAN 2.AADHAAR 3.VOTER ID 4.PASSPORT. Accepted proof of Address 1.UTILITY BILL 
                    2.AADHHAR 3.VOTER ID 4.PASSPORT.
                    </InstructionContent>
                    <InstructionsHeader>
                        Tip:
                    </InstructionsHeader>
                    In case none of the accepted documents containyour current address, you may want to get your Aadhaar updated and then proceed.  
                    <ProceedButton>Proceed</ProceedButton>                  
                </InstructionContainer>  
            )  
            :''
        }         
        </>            

    );
}
export default AadharInstructions;
