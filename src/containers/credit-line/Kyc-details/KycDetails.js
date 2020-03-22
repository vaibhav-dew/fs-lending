import React, { useState } from "react";
import Navbar from "../../../components/navbar/index";
import ConfirmNavbar from "../../../components/confirm-navbar/index";
import {
  Container,
  Header,
  Horizontal,
  StepHeader,
  Details,
  Option,
  OptionContainer,
  OptionValue,
  OptionSubValue,
  OptionWrapper
} from "./Style";
import Instructions from "./Instructions";

const KycDetails = () => {
  const [completeOption, setCompleteOption] = useState("");
  const handleOption = e => {
    console.log(e.target.value);
    setCompleteOption(e.target.value);
  };
  return (
    <React.Fragment>
      <Container>
        <Navbar isExit={true} title="Credit Line" route="/credit-line" />
        <ConfirmNavbar
          title="1. Confirm Eligibility"
          route="/credit-line"
        ></ConfirmNavbar>
        <Horizontal />
        <Header>KYC</Header>
        <StepHeader>Step 2 of 3</StepHeader>
        <Details>Select how you would like to complete your KYC </Details>
        <OptionContainer>
          <OptionWrapper>
            <Option
              type="radio"
              name="value"
              value="aadhar"
              onChange={handleOption}
            ></Option>
            <OptionValue>AADHAR (Instant)</OptionValue>
          </OptionWrapper>
          <OptionSubValue>
            Take less than 30 secconds. Select this if your Aadhar is updated
            with your mobile number.
          </OptionSubValue>
        </OptionContainer>
        <OptionContainer style={{ marginBottom: "10px" }}>
          <OptionWrapper>
            <Option
              type="radio"
              name="value"
              value="document"
              onChange={handleOption}
            ></Option>
            <OptionValue>Document pick-up</OptionValue>
          </OptionWrapper>
          <OptionSubValue>
            Limit activation in 24 Hours after Document is picked up.
          </OptionSubValue>
        </OptionContainer>
        {completeOption ? <Instructions value={completeOption} /> : ""}
      </Container>
    </React.Fragment>
  );
};
export default KycDetails;
