import React, { useState, useEffect } from "react";
import Error from "../../../components/Error";
import { connect } from "react-redux";
import { saveGeolocation } from "./Actions";

const Location = (props) => {
  const [geoLocation, setGeoLocation] = useState({});
  const [locationError, setLocationError] = useState({
    exists: false,
    title: "",
    text: "",
  });
  const setError = (error) => {
    if (error) {
      if (error.code === 1) {
        setLocationError({
          exists: true,
          title: "Location Denied",
          text: "Location is required for the onboarding journey!",
        });
      }
    }
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position && position.coords) {
          const { latitude, longitude } = position.coords;
          setGeoLocation({ latitude, longitude });
          props.saveGeoLocation({ latitude, longitude });
        }
      }, setError);
    } else
      setLocationError({
        exists: true,
        title: "Location Not Supported",
        text: "Location service is not supported by this browser!",
      });
  }, [geoLocation.coords, props]);
  return (
    <>
      <Error
        show={locationError.exists}
        title={locationError.title}
        text={locationError.text}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveGeoLocation: (location) => dispatch(saveGeolocation(location)),
});

export default connect(null, mapDispatchToProps)(Location);
