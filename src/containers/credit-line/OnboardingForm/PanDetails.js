import React, { useState, useEffect } from "react";
import Input from "../../../components/Input2";
import { FlexibleContainer, FlexibleItem } from "./style";
import { connect } from "react-redux";
import { savePanDetails } from "./Actions";

const PanDetails = (props) => {
  const [panDetails, setPanDetails] = useState({ pan: "", name: "" });
  const [panError, setPanError] = useState({ exist: false, msg: "" });
  useEffect(() => {
    const pan = panDetails.pan;
    setPanError({ exist: false, msg: "" });
    if (pan && pan.length === 10) {
      if (pan.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")) {
        setPanDetails({ ...panDetails, pan });
        if (panDetails.name && panDetails.name.length > 0) {
          props.savePanDetails(panDetails);
        }
      } else setPanError({ exist: true, msg: "Entered PAN is invalid!" });
    }
  }, [panDetails, props]);
  const onChangeHandler = (e) => {
    setPanDetails({ ...panDetails, [e.target.name]: e.target.value });
  };
  return (
    <FlexibleContainer className="flexible">
      <FlexibleItem>
        <Input
          id="pan"
          type="text"
          value={panDetails.pan}
          onChange={onChangeHandler}
          name={"pan"}
          label={"PAN"}
          fullWidth
        />
      </FlexibleItem>
      <FlexibleItem>
        <Input
          type="text"
          value={panDetails.name}
          onChange={onChangeHandler}
          label={"Full Name"}
          name={"name"}
          isError={panError.exist}
          errorHint={panError.msg}
          fullWidth
        />
      </FlexibleItem>
    </FlexibleContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  savePanDetails: (panDetails) => dispatch(savePanDetails(panDetails)),
});

export default connect(null, mapDispatchToProps)(PanDetails);
