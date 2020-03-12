import React from "react";
import {
  LPContainer,
  LPButton,
  LPHeader,
  LPStepWrapper,
  LPSteper,
  LPWrapperConditions,
  LPList,
  LPListItem,
  LPSteps
} from "./Style";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Header from "./Header";

function LandingPage(props) {
  const getStarted = () => {
    console.log("click");
  };

  return (
    <React.Fragment>
      <LPContainer>
        <Header />
        <LPHeader>Activate in 3 Simple Steps</LPHeader>
        <LPStepWrapper>
          <LPSteper>1</LPSteper>
          <LPSteps>Check eligibility</LPSteps>
          <LPWrapperConditions>Required Valid PAN</LPWrapperConditions>
        </LPStepWrapper>
        <LPStepWrapper>
          <LPSteper>2</LPSteper>
          <LPSteps>KYC</LPSteps>
          <LPWrapperConditions>Required Valid AADHAAR</LPWrapperConditions>
        </LPStepWrapper>
        <LPStepWrapper disabled>
          <LPSteper>3</LPSteper>
          <LPSteps>Setup Repayment</LPSteps>
          <LPWrapperConditions>
            Required Bank Account Number and Net Banking/Debit Card Credential
          </LPWrapperConditions>
        </LPStepWrapper>
        <LPHeader>Top Features Of credit Line</LPHeader>
        <LPList>
          <LPListItem>Instant Decisions & Disbursement</LPListItem>
          <LPListItem>One Time Setup</LPListItem>
          <LPListItem>End to End Digital Process</LPListItem>
        </LPList>
        <LPButton onClick={getStarted}>Get Started</LPButton>
      </LPContainer>
    </React.Fragment>
  );
}

export default LandingPage;
