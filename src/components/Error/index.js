import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ErrorModal, ErrorWrapper, RedirectButton } from "./style";

const Error = ({
  title,
  text,
  show,
  redirect,
  redirectBtnTitle,
  redirectUrl
}) => {
  if (!show) return null;
  else
    return (
      <ErrorWrapper id="myModal">
        <ErrorModal>
          <h3>{title}</h3>
          <p>{text}</p>
          {redirect && (
            <RedirectButton href={redirectUrl}>
              {redirectBtnTitle}
            </RedirectButton>
          )}
        </ErrorModal>
      </ErrorWrapper>
    );
};

Error.defaultProps = {
  title: "Error",
  text: "",
  show: true,
  redirect: false,
  redirectBtnTitle: "Go Back",
  redirectUrl: "/"
};

Error.propsTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  redirect: PropTypes.bool,
  redirectBtnTitle: PropTypes.string,
  redirectUrl: PropTypes.string
};

export default Error;
