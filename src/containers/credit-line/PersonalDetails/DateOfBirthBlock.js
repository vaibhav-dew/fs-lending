import React, { useState, useEffect } from "react";
import Input from "../../../components/Input";
import { connect } from "react-redux";
import { saveDateOfBirth } from "./Actions";
import PropTypes from "prop-types";

const DateOfBirthBlock = props => {
  const [dob, setDob] = useState("");
  useEffect(() => {
    props.saveDateOfBirth(new Date(dob));
  });
  return (
    <Input
      type="date"
      label="Date Of Birth"
      value={dob}
      onChange={e => setDob(e.target.value)}
      fullWidth
    />
  );
};

DateOfBirthBlock.propTypes = {
  saveDateOfBirth: PropTypes.func.isRequired
};

DateOfBirthBlock.defaultProps = {
  saveDateOfBirth
};

const mapDispatchToProps = dispatch => ({
  saveDateOfBirth: dob => dispatch(saveDateOfBirth(dob))
});

export default connect(null, mapDispatchToProps)(DateOfBirthBlock);
