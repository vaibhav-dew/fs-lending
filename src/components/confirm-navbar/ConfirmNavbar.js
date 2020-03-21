import React from "react";
import PropTypes from "prop-types";
import { Container, DetailsButton, Title } from './style'
import { useHistory } from "react-router-dom";


const ConfirmNavbar = props => {
  console.log("NavConfirmation props: ", props);
  const history = useHistory();
  const icon = "https://image.flaticon.com/icons/svg/446/446191.svg";
  return (
    <>
      <Container>
        <img width="20" src={icon} alt={icon} />
        <Title>{props.title}</Title>
        <DetailsButton onClick={() => history.push(props.route)}>
          Details
        </DetailsButton>
      </Container>
    </>
  );
};
ConfirmNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default ConfirmNavbar;
