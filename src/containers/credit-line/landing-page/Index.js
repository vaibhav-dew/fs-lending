import React from "react";
import {
  LPContainer,
  StartedButton,
  Header,
  StepWrapper,
  Steper,
  WrapperConditions,
  List,
  ListItem,
  Steps
} from "./Style";
import Navbar from "../../../components/navbar/Navbar";

const  LandingPage = (props) => {
  const {
    history
  } = props
  const getStarted = () => history.push('/credit-line/pan-details')
  return (
    <React.Fragment>
      <LPContainer>
        <Navbar isExit title="Credit Line" />
        <Header>Activate in 3 Simple Steps</Header>
        <StepWrapper>
          <Steper>1</Steper>
          <Steps>Check eligibility</Steps>
          <WrapperConditions>Required Valid PAN</WrapperConditions>
        </StepWrapper>
        <StepWrapper>
          <Steper>2</Steper>
          <Steps>KYC</Steps>
          <WrapperConditions>Required Valid AADHAAR</WrapperConditions>
        </StepWrapper>
        <StepWrapper disabled>
          <Steper>3</Steper>
          <Steps>Setup Repayment</Steps>
          <WrapperConditions>
            Required Bank Account Number and Net Banking/Debit Card Credential
          </WrapperConditions>
        </StepWrapper>
        <Header>Top Features Of credit Line</Header>
        <List>
          <ListItem>Instant Decisions & Disbursement</ListItem>
          <ListItem>One Time Setup</ListItem>
          <ListItem>End to End Digital Process</ListItem>
        </List>
        <StartedButton onClick={getStarted}>Get Started</StartedButton>
      </LPContainer>
    </React.Fragment>
  );
}

export default LandingPage;
