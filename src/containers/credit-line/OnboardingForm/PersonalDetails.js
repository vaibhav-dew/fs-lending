import React, { useState, useEffect } from "react";
import { FlexibleContainer, FlexibleItem } from "./style";
import Input from "../../../components/Input2";
import Axios from "axios";
import { connect } from "react-redux";
import { saveDateOfBirth, savePincode } from "./Actions";

const PersonalDetails = () => {
  const [personalDetails, setPersonalDetails] = useState({
    dateOfBirth: "",
    pincode: "",
  });
  const [pincodeLocation, setPincodeLocation] = useState("");
  const onChangeHandler = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };
  const fillAddressFromPincode = async (pincode) => {
    const GET_ADDRESS_API =
      "http://52.183.135.123:8090/tatapay/lending/getaddress?pinCode=";
    if (pincode && pincode.length > 0)
      await Axios.get(`${GET_ADDRESS_API}${pincode}`)
        .then((res) => res.data)
        .then((data) => setPincodeLocation(data.address));
  };
  useEffect(() => {
    setPincodeLocation("");
    if (personalDetails.pincode.length === 6)
      fillAddressFromPincode(personalDetails.pincode);
  }, [personalDetails.pincode]);
  return (
    <FlexibleContainer>
      <FlexibleItem>
        <Input
          type="date"
          value={personalDetails.dateOfBirth}
          name={"dateOfBirth"}
          label={"Date of birth"}
          onChange={onChangeHandler}
          fullWidth
        />
      </FlexibleItem>
      <FlexibleItem>
        <Input
          type="number"
          value={personalDetails.pincode}
          name={"pincode"}
          label={"Pincode"}
          onChange={onChangeHandler}
          showHint={pincodeLocation.length > 0}
          hint={pincodeLocation}
          fullWidth
        />
      </FlexibleItem>
    </FlexibleContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveDateOfBirth: (dateOfBirth) => dispatch(saveDateOfBirth(dateOfBirth)),
  savePincode: (pincode) => dispatch(savePincode(pincode)),
});

export default connect(null, mapDispatchToProps)(PersonalDetails);
