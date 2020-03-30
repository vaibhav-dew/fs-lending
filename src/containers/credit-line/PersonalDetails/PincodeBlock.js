import React, { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import Input from "../../../components/Input";
import { connect } from "react-redux";
import { savePincode } from "./Actions";

const PincodeBlock = props => {
  const [pincode, setPincode] = useState("");
  const [pincodeLocation, setPincodeLocation] = useState("");
  const getLocationFromPincode = async code => {
    const pincodeApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=AIzaSyBLuUh7ApJHj9yv6JU12uYnVj4Nt1Ff5FY`;
    const result = (await Axios.get(pincodeApi)).data.results;
    if (
      result &&
      result.length > 0 &&
      result[0]["address_components"] &&
      result[0]["address_components"].length > 0 &&
      result[0]["address_components"][1] &&
      result[0]["address_components"][2]
    ) {
      const address = `${result[0]["address_components"][1]["long_name"]}, ${result[0]["address_components"][2]["long_name"]}`;
      setPincodeLocation(address);
    }
  };
  const changePincode = pincode => {
    console.log("pincode", pincode);
    if (pincode !== "" && !isNaN(Number(pincode))) {
      setPincodeLocation("");
      getLocationFromPincode(pincode);
    }
    setPincode(pincode);
    props.savePincode(pincode);
  };
  return (
    <div style={{ height: 100 }}>
      <Input
        label="PIN (as per your current address"
        type="number"
        name="pincode"
        placeholder="Pincode"
        value={pincode}
        onChange={e => changePincode(e.target.value)}
        orientation={"block"}
        showHint
        hint={pincodeLocation}
        fullWidth
      />
    </div>
  );
};

PincodeBlock.propTypes = {
  savePincode: PropTypes.func
};

PincodeBlock.defaultProps = {
  savePincode
};

const mapDispatchToProps = dispatch => ({
  savePincode: pincode => dispatch(savePincode(pincode))
});

export default connect(null, mapDispatchToProps)(PincodeBlock);
