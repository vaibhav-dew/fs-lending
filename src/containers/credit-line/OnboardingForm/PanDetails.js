import React, { useState, useEffect } from "react";
import Input from "../../../components/Input2";
import { FlexibleContainer, FlexibleItem } from "./style";
import { connect } from "react-redux";
import { savePanDetails } from "./Actions";

const PanDetails = (props) => {
  const [panDetails, setPanDetails] = useState({ pan: "", name: "" });
  const [panError, setPanError] = useState({ exist: false, msg: "" });
  const { pan, name } = panDetails;
  useEffect(() => {
    setPanError({ exist: false, msg: "" });
    if (
      pan.length > 10 ||
      (pan.length === 10 &&
        !pan.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"))
    )
      setPanError({ exist: true, msg: "PAN is invalid!" });
    else if (pan.length > 0 && name.length > 0) {
      props.savePanDetails({ pan, name });
    }
  }, [pan, name, props]);
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
          isError={panError.exist}
          errorHint={panError.msg}
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
