import React from "react";
import PropTypes from "prop-types";
import { ErrorModal, ErrorWrapper } from "./style";

const Error = ({ title, text, show }) => {
  if (!show) return null;
  else
    return (
      <ErrorWrapper id="myModal">
        <ErrorModal>
          <h3>{title}</h3>
          <p>{text}</p>
        </ErrorModal>
      </ErrorWrapper>
    );
};

Error.defaultProps = {
  title: "Error",
  text: "",
  show: true,
};

Error.propsTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Error;
