import React, { useState } from 'react'
import Navbar from '/home/harshk/fs-lending/src/components/navbar'
import {
  Container,
  Header,
  StepHeader,
  Details,
  Input,
  Button,
  PanValidation
} from './Style'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { savePanDetails } from './Action'
import axios from 'axios'
import Loader from '../../../components/Loader/Loader'
import Modal from '../../../components/Modal'

const PanDetails = props => {
  console.log(props)
  const state = useSelector(state => state)
  console.log(state)
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ exists: false, title: "", text: "" });
  const [showPopup, setShowPopup] = useState(false)
  const [panNumber, setPanNumber] = useState('')
  const [panName, setPanName] = useState('')
  const [isPanNumberValid, setIsPanNumberValid] = useState(true)
  const enabled = panNumber.length === 10 && panName.length > 0


  /**
   * @description button click on verify
   */
  const verifyPan = () => {
    setIsLoading(true)
    const head = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const data = JSON.stringify({
      name: panName,
      pan: panNumber
    })
    axios
      .post('http://52.183.135.123:8090/tatapay/lending/storing/customerinfo', data, head)
      .then(response => {
        setIsLoading(false)
        if (response && response.request.status === 200) {
          if (response.data.message === "Records are successfully Inserted!") {
            dispatch(savePanDetails(panName, panNumber))
            props.history.push('/credit-line/personal-details')
          }
          else {
            setError({
              exists: true,
              text: response.data.message
            });
          }
        }
      })
      .catch(err => {
        if (err && err.response) {
          setIsLoading(false)
          setError({
            exists: true,
            text: err.data.status,
          })
        }
      })

  }
  /**
   * @description handling pan regex
   */
  const handlePanNumber = e => {
    if (
      e.target.value &&
      e.target.value.length === 10 &&
      !e.target.value.match('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')
    ) {
      setIsPanNumberValid(false)
    } else {
      setIsPanNumberValid(true)
      setPanNumber(e.target.value)
    }
  }
  /**
   * @description handling pan validate
   */
  const handlePanValidation = e => {
    if (e.target.value.length < 10) {
      setIsPanNumberValid(false)
    }
  }

  const modalclick = () => {
    setShowPopup(!showPopup)
    setError({
      exists: false
    })
  };
  if (isLoading) {
    return (
      <Loader />
    )
  }
  if (error.exists) {
    return (
      <Modal title={error.title} text={error.text} closePopUp={modalclick} />
    )
  }

  return (
    <>
      <div>
        <Navbar isExit title='Credit Line' route='/credit-line' />
        <Container>
          <Header>Confirm Limit</Header>
          <StepHeader>Step 1 of 3</StepHeader>
          <Details>Enter your PAN details</Details>
          <Input
            placeholder='PAN e.g. ALOPR0999R'
            value={panNumber}
            style={{ textTransform: 'uppercase' }}
            onBlur={handlePanValidation}
            onChange={handlePanNumber}
            maxLength='10'
          ></Input>
          {isPanNumberValid ? '' : <PanValidation>Invalid Pan</PanValidation>}
          <Input
            placeholder='Full Name (as per PAN card )'
            value={panName}
            style={{ textTransform: 'capitalize' }}
            onChange={e => setPanName(e.target.value)}
          />
          <Button disabled={!enabled} onClick={verifyPan}>
            Verify
        </Button>
        </Container>
      </div>

    </>
  )
}
PanDetails.propTypes = {
  panNumber: PropTypes.string,
  panName: PropTypes.string,
  isLoading: PropTypes.bool,
  isPanNumberValid: PropTypes.bool,
  isInvalidDetails: PropTypes.bool,
  history: PropTypes.object
}
export default PanDetails
