import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import {
  Container,
  Header,
  StepHeader,
  Details,
  Input,
  Button,
  PanValidation
} from "./Style";
import PropTypes from "prop-types";
// import Loader from '../Common/Loader/Loader'
// import { useDispatch } from 'react-redux'
// import { savePanDetails } from './Action'
// import axios from 'axios'

const PanDetails = props => {
  // const dispatch = useDispatch()
  // const [isLoading, setIsLoading] = useState(false)
  const [panNumber, setPanNumber] = useState("");
  const [panName, setPanName] = useState("");
  const [isPanNumberValid, setIsPanNumberValid] = useState(true);
  const enabled = panNumber.length === 10 && panName.length > 0;

  /**
   * @description button click on verify
   */
  const verifyPan = () => {
    props.history.push("/credit-line/confirm-limit");
    // setIsLoading(true)
    // const head = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-karza-key': 'qZcPjx96QuNOEtf4'
    //   }
    // }
    // const data = JSON.stringify({
    //   consent: 'Y',
    //   pan: panNumber
    // })
    // axios
    //   .post('https://testapi.karza.in/v2/pan', data, head)
    //   .then(response => {
    //     setIsLoading(false)
    //     if (response && response.request.status === 200) {
    //       dispatch(savePanDetails(panName, panNumber))
    //       props.history.push('/credit-line/confirm-limit')
    //     } else {
    //       alert('pancard details did not matched')
    //     }
    //   })
    //   .catch(err => {
    //     if (err && err.response) {
    //       // const {
    //       //   response: { data: errorMessage }
    //       // } = err
    //       //dispatch(failuresavePanDetails(errorMessage))
    //     }
    //   })
  };

  /**
   * @description handling pan regex
   */
  const handlePanNumber = e => {
    if (
      e.target.value &&
      e.target.value.length === 10 &&
      !e.target.value.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")
    ) {
      setIsPanNumberValid(false);
    } else {
      setIsPanNumberValid(true);
      setPanNumber(e.target.value);
    }
  };

  /**
   * @description handling pan validation on focus out
   */
  const handlePanValidation = e => {
    if (e.target.value.length < 10) {
      setIsPanNumberValid(false);
    }
  };

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <Navbar isExit title="Credit Line" route="/credit-line" />
      <Container>
        <Header>Confirm Limit</Header>
        <StepHeader>Step 1 of 3</StepHeader>
        <Details>Enter your PAN details</Details>
        <Input
          placeholder="PAN e.g. ALOPR0999R"
          value={panNumber}
          style={{ textTransform: "uppercase" }}
          onBlur={handlePanValidation}
          onChange={handlePanNumber}
          maxLength="10"
        ></Input>
        {isPanNumberValid ? "" : <PanValidation>Invalid Pan</PanValidation>}
        <Input
          placeholder="Full Name (as per PAN card )"
          value={panName}
          style={{ textTransform: "capitalize" }}
          onChange={e => setPanName(e.target.value)}
        />
        <Button disabled={!enabled} onClick={verifyPan}>
          Verify
        </Button>
      </Container>
      {/*  )} */}
    </>
  );
};

PanDetails.propTypes = {
  panNumber: PropTypes.string,
  panName: PropTypes.string,
  isLoading: PropTypes.bool,
  isPanNumberValid: PropTypes.bool,
  isInvalidDetails: PropTypes.bool,
  history: PropTypes.any
};
export default PanDetails;
