import React, { useState,useEffect, useCallback } from "react";
import Navbar from "../../../components/navbar/Navbar";
import {PDContainer,PDHeader, PDStepHeader,PDDetails,PDInput,PDButton} from './Style'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PanDetails = (props) => {
  const [panNumber,setPanNumber] = useState('');
  const [panName,setPanName] = useState('');
  const enabled = panNumber.length===10 && panName.length>0;
  useEffect( () => {
    
  })
  const verifyPan = useCallback( () =>{
    console.log(panName);
    console.log(panNumber);
    // fetch('https://testapi.karza.in/v2/pan',{
    //   method:"POST"
    // })
    // .then(function (response) {
    //     response.json().then(function (json) {
    //         console.log(json)
    //     })
    // }).catch(function (error) {
    //     console.log("invalid")
    //     console.log(error)
    // })
    
  })
  return (
    <React.Fragment>
      <PDContainer>
        <Navbar isExit={false} title="Credit Line"/>
        <PDHeader>Confirm Limit</PDHeader>
        <PDStepHeader>Step 1 of 3</PDStepHeader>
        <PDDetails>Enter your PAN details</PDDetails>
        <PDInput placeholder="PAN e.g. ALOPR0999R" value={panNumber} onChange={e => setPanNumber(e.target.value)} maxLength="10" pattern="[A-Za-z]{5}\d{4}[A-Za-z]{1}"></PDInput>
        <PDInput placeholder="Full Name (as per PAN card )" value={panName} onChange={e => setPanName(e.target.value)} ></PDInput>
        <Link to='/credit-line/confirm-limit' style={{textDecoration:'none'}}>
          <PDButton disabled={!enabled} onClick={verifyPan} >Verify</PDButton>
        </Link>
      </PDContainer>
    </React.Fragment>
  )
};


PanDetails.propTypes = {
  panNumber: PropTypes.string,
  panName: PropTypes.string
};
export default PanDetails;

