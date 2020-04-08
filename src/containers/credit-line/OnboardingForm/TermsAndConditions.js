import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import close from "../assets/close-white.svg";

const TCWrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  position: fixed;
  top: 0;
  backdrop-filter: blur(1px);
`;

const TCContainer = styled.div`
  width: 80%;
  margin: auto;
  max-width: 400px;
  padding: 16px;
  background-color: #1e1e1e;
`;

const TCTitle = styled.h3`
  text-align: center;
`;

const TCContent = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: normal;
  color: #ffffff;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const TermsAndConditions = (props) => {
  return (
    <TCWrapper show={props.show}>
      <TCContainer>
        <div style={{ textAlign: "right" }}>
          <CloseBtn onClick={() => props.setShowTC()}>
            <img src={close} alt={close} />
          </CloseBtn>
        </div>
        <TCTitle>Terms and Conditions</TCTitle>
        <TCContent>
          1. I/We hereby declare that the above questions have been
          conscientiously and faithfully answered and I/we would be liable for
          the correctness and completeness of the statement.
          <br />
          2. I/We undertake that if any of the information given here, or in any
          statements made in future, is found to be false, fraudulent or if
          there is any misrepresentation or concealment of facts, the policy
          shall be void and all rights to past and present losses shall be
          forfeited.
          <br />
          I/We authorize the insurance company, or any of its authorized
          representatives to collect, as are relevant to verify the facts of the
          loss, information/ documents including but not limited to certified
          copies of police report, statements of witnesses, medical records,
          suits filed, bank/ card statement, charge slips, card application form
          etc. this purpose.
        </TCContent>
      </TCContainer>
    </TCWrapper>
  );
};

TermsAndConditions.propTypes = {
  show: PropTypes.bool.isRequired,
};

TermsAndConditions.defaultProps = {
  show: false,
};

export default TermsAndConditions;
