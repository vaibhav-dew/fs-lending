import React, { useState } from "react";
import Axios from "axios";
import Input from "../../../components/Input";

const PincodeBlock = () => {
  const [pincode, setPincode] = useState("");
  const [pincodeLocation, setPincodeLocation] = useState("");
  const getLocationFromPincode = async code => {
    const pincodeApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=AIzaSyBLuUh7ApJHj9yv6JU12uYnVj4Nt1Ff5FY`;
    const result = await (await Axios.get(pincodeApi)).data.results;
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
  const changePincode = e => {
    if (!isNaN(Number(e.target.value))) {
      setPincode(e.target.value);
      setPincodeLocation("");
      if (e.target.value) getLocationFromPincode(e.target.value);
    }
  };
  return (
    <div style={{ height: 100 }}>
      <Input
        label="PIN (as per your current address"
        type="number"
        name="pincode"
        placeholder="Pincode"
        value={pincode}
        onChange={changePincode}
        orientation={"block"}
        showHint
        hint={pincodeLocation}
        fullWidth
      />
    </div>
  );
};

export default PincodeBlock;
