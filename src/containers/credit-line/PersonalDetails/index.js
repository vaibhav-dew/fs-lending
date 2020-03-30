import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Error from "../../../components/Error";
import PanDetails from "./PanDetails";
import { PersonalDetailsWrapper, SubmitButton } from "./style";
import PincodeBlock from "./PincodeBlock";
import DateOfBirthBlock from "./DateOfBirthBlock";
import Navbar from "../../../components/Navbar";
import EmploymentBlock from "./EmploymentBlock";
import { saveGeolocation } from "./Actions";

const PersonalDetails = props => {
  const [geoLocation, setGeoLocation] = useState({});
  const [error, setError] = useState({ exists: false, title: "", text: "" });
  const [proceed, setProceed] = useState(false);
  const setLocationFromPosition = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setGeoLocation({ latitude, longitude });
    props.saveGeolocation(geoLocation);
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
  const validatePesonalDetails = personalDetails => {
    if (!personalDetails.geoLocation && personalDetails.geoLocation === {})
      return false;
    if (!personalDetails.dateOfBirth) return false;
    if (!personalDetails.pincode && personalDetails.pincode === "")
      return false;
    if (!personalDetails.employmentType) return false;
    return true;
  };
  useEffect(() => {
    getGPSLocation();
  }, [JSON.stringify(geoLocation)]);
  useEffect(() => {
    console.log("props", props.personalDetails);
    if (validatePesonalDetails(props.personalDetails)) setProceed(true);
    else setProceed(false);
  }, [JSON.stringify(props.personalDetails)]);
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
      <SubmitButton disabled={error.exists || !proceed}>Next</SubmitButton>
    </PersonalDetailsWrapper>
  );
};

PersonalDetails.propTypes = {
  saveGeolocation: PropTypes.func.isRequired,
  personalDetails: PropTypes.object.isRequired
};

PersonalDetails.defaultProps = {
  saveGeolocation,
  personalDetails: {}
};

const mapStateToProps = state => ({
  personalDetails: state.personalDetails
});

const mapDispatchToProps = dispatch => ({
  saveGeolocation: location => dispatch(saveGeolocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
