import React, { useState, useEffect } from "react";
import PanDetails from "./PanDetails";
import { PersonalDetailsWrapper } from "./style";
import PincodeBlock from "./PincodeBlock";
import DateOfBirthBlock from "./DateOfBirthBlock";
import EmploymentBlock from "./EmploymentBlock";
import Error from "../../../components/Error";
import Navbar from "../../../components/navbar";
import ProceedButton from "../../../components/ProceedButton";
import { useSelector } from "react-redux";

const PersonalDetails = (props) => {
  const state = useSelector(state => console.log(state))
  const [geoLocation, setGeoLocation] = useState({});
  const [error, setError] = useState({ exists: false, title: "", text: "" });
  const setLocationFromPosition = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("position>>", { latitude, longitude });
    setGeoLocation({ latitude, longitude });
  };
  const handleGeoLocationError = err => {
    if (err.code === 1) {
      setError({
        exists: true,
        title: "Location Access Denied",
        text:
          "Dear user, your location is required for the credit line. Please allow access to your location."
      });
    }
  };
  const getGPSLocation = () => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        setLocationFromPosition,
        handleGeoLocationError
      );
    else
      setError({
        exists: true,
        title: "Location Not Supported!",
        text: "Geolocation is not supported in this device!"
      });
  };
  const handleClick = () => props.history.push('/credit-line/confirm')
  useEffect(() => {
    getGPSLocation();
  }, [geoLocation.coords]);
  return (
    <PersonalDetailsWrapper>
      {error.exists && (
        <Error show={error.exists} title={error.title} text={error.text} />
      )}
      <Navbar />
      <PanDetails />
      <DateOfBirthBlock />
      <PincodeBlock />
      <EmploymentBlock />
      <ProceedButton
        active={true}
        content="Next"
        route="/credit-line/confirm"
      />
      {/* <button onClick={handleClick}>click</button> */}
    </PersonalDetailsWrapper>
  );
};

const mapStateToProps = state => ({
  geoLocation: state.lending.personalDetails.geoLocation
});

export default PersonalDetails;
