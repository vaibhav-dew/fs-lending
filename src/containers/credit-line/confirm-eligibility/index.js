import React from "react";
import {
    Container,
    Header,
    Steps,
    StepHeader,
    Conditions,
    ConfirmButton
} from "./style";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Details from "./Details";

export const DetailConfirmation = props => {
    const Confirm = () => console.log('button clicked')
    return (
        <>
            <Navbar isExit route="/credit-line"></Navbar>
            <Container>
                <Header>Confirm Limit</Header>
                <Steps>Step 1 of 3</Steps>
                <StepHeader>Confirm Details</StepHeader>
                <Steps>
                    Please Review the details below as you won't able to change them later
                </Steps>
                <Details />
                <Conditions>
                    By proceeding, you accept our &nbsp;
                    <Link to="/">terms and conditions</Link>
                    &nbsp;and authorise us to pull your bureau score from CIBIL
                </Conditions>
                <ConfirmButton onClick={Confirm}>Confirm Eligibility</ConfirmButton>
            </Container>
        </>
    );
};

export default DetailConfirmation;
