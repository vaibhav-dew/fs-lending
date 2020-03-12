import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <Fragment>
      <button>{props.isExit ? "Close" : "Back"}</button>
      {props.title}
    </Fragment>
  );
};

Navbar.propTypes = {
  isExit: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;
