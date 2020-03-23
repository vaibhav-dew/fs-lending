import React, { useState } from "react";
import Input from "../../../components/Input";

const DateOfBirthBlock = () => {
  const [dob, setDob] = useState("");
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

export default DateOfBirthBlock;
