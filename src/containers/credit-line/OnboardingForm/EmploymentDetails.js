import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  EMPLOYMENT_TYPE_SALARIED,
  EMPLOYMENT_TYPE_SELF_EMPLOYED,
} from "./Constants";
import { FlexibleItem, FlexibleContainer } from "./style";
import { connect } from "react-redux";
import { saveEmploymentType } from "./Actions";

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  color: white;
`;

const EmploymentDetails = (props) => {
  const [employmentType, setEmploymentType] = useState(null);
  const toggle = (e) => {
    setEmploymentType(e.target.value);
  };
  useEffect(() => {
    props.saveEmploymentType(employmentType);
  }, [employmentType, props]);
  return (
    <div style={{ maxWidth: 400 }}>
      <div style={{ color: "#999", padding: 5 }}>Employment Type</div>
      <FlexibleContainer>
        <FlexibleItem>
          <RadioButton
            id="salaried"
            type="radio"
            name="employmentType"
            value={EMPLOYMENT_TYPE_SALARIED}
            onClick={toggle}
          />
          <RadioLabel htmlFor="salaried">Salaried</RadioLabel>
        </FlexibleItem>
        <FlexibleItem>
          <RadioButton
            id="selfEmployed"
            type="radio"
            name="employmentType"
            value={EMPLOYMENT_TYPE_SELF_EMPLOYED}
            onClick={toggle}
          />
          <RadioLabel htmlFor="selfEmployed">Self Employed</RadioLabel>
        </FlexibleItem>
      </FlexibleContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveEmploymentType: (employmentType) =>
    dispatch(saveEmploymentType(employmentType)),
});

export default connect(null, mapDispatchToProps)(EmploymentDetails);
