import React, { useState,useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import {PDContainer,PDHeader, PDStepHeader,PDDetails,PDInput,PDButton,PDPanValidation} from './Style'
import PropTypes from "prop-types";
import axios from 'axios';
import Loader from "../../../components/Loader/Loader";
import InvalidDetailsModal from './InvalidDetailsModal';

const PanDetails = (props) => {
  const [panNumber, setPanNumber] = useState('');
  const [panName, setPanName] = useState('');
  const [isLOading, setIsLoading] = useState(false);
  const [isPanNumberValid, setIsPanNumberValid] = useState(true);
  const [isInvalidDetails,setisInvalidDetails] = useState(false)
  const enabled = panNumber.length === 10 && panName.length > 0;
  useEffect(() => {

  })
  const verifyPan = () => {
    setIsLoading(true)
    let head = {
      headers: {
        'Content-Type': "application/json",
        'x-karza-key': "qZcPjx96QuNOEtf4"
      }
    }
    let data = JSON.stringify({
      "consent": "Y",
      "pan": panNumber
    })
    axios.post('https://testapi.karza.in/v2/pan', data, head)
      .then(res => {
        setIsLoading(false)
        if (res.status) {
          if (res.data.result.name === panName.toUpperCase()) {
            props.history.push('/credit-line/confirm-limit')
          } else {
            setisInvalidDetails(!isInvalidDetails)
            alert("pancard details did not matched")
          }
        }
      }).catch((error) => {
        setIsLoading(false)
        console.log("invalid")
        console.log(error)
      })
  }
  const handlePanNumber = (e) => {
    if (e.target.value && e.target.value.length === 10 && !e.target.value.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")) {
      setIsPanNumberValid(false)
    } else {
      setIsPanNumberValid(true)
      setPanNumber(e.target.value)
    }
  }
  const handlePanValidation = (e) => {
    if (e.target.value.length < 10) {
      setIsPanNumberValid(false)
    }
  }
  const handleInvalidDetailsModal = () =>{
    setisInvalidDetails(!isInvalidDetails)
  }
  return (
    <React.Fragment>
      {isLOading ? <Loader/> : 
      <PDContainer>
        <Navbar isExit={false} title="Credit Line"/>
        <PDHeader>Confirm Limit</PDHeader>
        <PDStepHeader>Step 1 of 3</PDStepHeader>
        <PDDetails>Enter your PAN details</PDDetails>
        <PDInput placeholder="PAN e.g. ALOPR0999R" value={panNumber} style={{textTransform:"uppercase"}} onBlur={handlePanValidation} onChange={handlePanNumber} maxLength="10" ></PDInput>
        {isPanNumberValid ? '': <PDPanValidation>Invalid Pan</PDPanValidation>}
        <PDInput placeholder="Full Name (as per PAN card )" value={panName} style={{textTransform:"capitalize"}} onChange={e => setPanName(e.target.value)} ></PDInput>
        <PDButton disabled={!enabled} onClick={verifyPan} >Verify</PDButton>
        {isInvalidDetails ? <InvalidDetailsModal onClose={handleInvalidDetailsModal}/> : null}
      </PDContainer>}
    </React.Fragment>
  )
};


PanDetails.propTypes = {
  panNumber: PropTypes.string,
  panName: PropTypes.string,
  isLoading:PropTypes.bool,
  isPanNumberValid:PropTypes.bool
};
export default PanDetails;

