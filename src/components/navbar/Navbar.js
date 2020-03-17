import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { CreditLineNav, CreditLineNavTitle } from "./Navbar.style";

const Navbar = props => {
  console.log("NavProps: ", props);
  const history = useHistory();
  const icon = props.isExit
    ? "https://image.flaticon.com/icons/svg/1617/1617543.svg"
    : "https://image.flaticon.com/icons/svg/271/271218.svg";
  return (
    <CreditLineNav>
      <button style={navbarBtn} onClick={() => history.push(props.route)}>
        <img width="20" src={icon} alt={"icon"} />
      </button>
      <CreditLineNavTitle>{props.title}</CreditLineNavTitle>
    </CreditLineNav>
  );
};

Navbar.propTypes = {
  isExit: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  isExit: true,
  title: "Credit Line",
  route: "/"
};

const navbarBtn = {
  border: "none",
  backgroundColor: "transparent",
  float: "left",
  cursor: "pointer"
};

export default Navbar;
