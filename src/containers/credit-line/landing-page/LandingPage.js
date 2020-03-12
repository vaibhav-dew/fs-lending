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
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";

const  LandingPage = () => {
  return (
    <React.Fragment>
      <LPContainer>
        <Navbar isExit title="Credit Line" />
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
        <Link to='/credit-line/pan-details' style={{textDecoration:'none'}}><LPButton>Get Started</LPButton></Link>
      </LPContainer>
    </React.Fragment>
  );
}

export default LandingPage;
