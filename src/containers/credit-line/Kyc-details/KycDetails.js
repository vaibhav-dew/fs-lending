import React, {
    useState
} from "react";
import Navbar from "../../../components/navbar/Navbar";
import {
    KDContainer,
    KDHeader,
    KDNavConfirmation,
    KDNavConfirmationItem,
    KDHorizontal,
    KDStepHeader,
    KDDetails,
    KDCompelteOption,
    KDCompelteOptionBorder,
    KDCompelteOptionValue,
    KDCompelteOptionBorderContent,
    KDCompelteOptionWrapper,
    KDCompelteOptionDetailsList,
    KDCompelteOptionDetailsListTitleDetails,
    KDCompelteOptionSubValue,
} from './Style';

const KycDetails = () =>{
    const [completeOption,setCompleteOption] = useState('')
    const handleCompleteOption = (e) => {
        console.log(e.target.value)
        setCompleteOption(e.target.value)
    }
    return (
        <React.Fragment>
            <KDContainer>
                <Navbar isExit={false} title="Credit Line"/>
                <KDNavConfirmation>
                    <KDNavConfirmationItem>
                        @
                    </KDNavConfirmationItem>
                    <KDNavConfirmationItem style={{marginLeft:'-50px'}}>
                        1.Confirm Eligibility
                    </KDNavConfirmationItem>
                    <KDNavConfirmationItem>
                        Details
                    </KDNavConfirmationItem> 
                </KDNavConfirmation>
                <KDHorizontal></KDHorizontal>
                <KDHeader>
                    KYC
                </KDHeader>
                <KDStepHeader>Step 2 of 3</KDStepHeader>
                <KDDetails>Select how you would like to complete your KYC </KDDetails>
                <KDCompelteOptionBorder>
                    <KDCompelteOptionBorderContent>
                        <KDCompelteOption type='radio' name= 'optionValue' value="aadhar" onChange={handleCompleteOption} ></KDCompelteOption>
                        <KDCompelteOptionWrapper>
                        <KDCompelteOptionValue>AADHAR (Instant)</KDCompelteOptionValue>
                        <KDCompelteOptionSubValue>Take less than 30 secconds. Select this if your
                            Aadhar is updated with your mobile number.
                        </KDCompelteOptionSubValue>
                        </KDCompelteOptionWrapper>
                    </KDCompelteOptionBorderContent> 
                </KDCompelteOptionBorder>
                <KDCompelteOptionBorder style={{marginBottom:'10px'}}>
                    <KDCompelteOptionBorderContent>
                        <KDCompelteOption type='radio' name= 'optionValue' value="document" onChange={handleCompleteOption}></KDCompelteOption>
                        <KDCompelteOptionWrapper>
                        <KDCompelteOptionValue>Document pick-up</KDCompelteOptionValue>
                        <KDCompelteOptionSubValue>Limit activation in 24 Hours after
                            Document is picked up
                        </KDCompelteOptionSubValue>
                        </KDCompelteOptionWrapper>
                    </KDCompelteOptionBorderContent> 
                </KDCompelteOptionBorder>
                {completeOption==='aadhar' ? (
                <div>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Please Note: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            KYC via Aadhar is 4 step process 
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 1: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            Enter your Aadhar Number and captcha 
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 2: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            Set a 4 digit share code of your choice
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 3: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            Enter OTP sent to your mobile number
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 4: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                             Share the share code you just set with us
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                </div>
                ) : null} 
                {completeOption==='document' ? (
                <div>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Please Note: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            KYC via Aadhar is 4 step process 
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 1: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            Enter your Aadhar Number and captcha 
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 2: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            Set a 4 digit share code of your choice
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 3: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                            Enter OTP sent to your mobile number
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                    <KDCompelteOptionDetailsList>
                         <KDCompelteOptionDetailsList> Step 4: </KDCompelteOptionDetailsList>   
                         <KDCompelteOptionDetailsListTitleDetails >
                             Share the share code you just set with us
                        </KDCompelteOptionDetailsListTitleDetails> 
                    </KDCompelteOptionDetailsList>
                </div>
                ) : null}           
            </KDContainer>
            
        </React.Fragment>
                     

    );
}
export default KycDetails;
