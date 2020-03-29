import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import { ActivateLimitWrapper, ActivateLimitContainer } from "./style";

const ActivateLimit = () => {
  const creditLineLimit = 15000;
  return (
    <ActivateLimitWrapper>
      <Navbar />
      <ActivateLimitContainer>
        <h2>Congratulations</h2>
        <p>Your credit line limit is {creditLineLimit}</p>
        <div style={{ padding: 10 }}>
          <Link
            to="/finance/lending/kyc-details"
            style={styles.activateLimitButton}
          >
            Activate Limit
          </Link>
        </div>
        <div style={styles.increaseLimitContainer}>
          <Link
            style={styles.increaseLimitButton}
            to="/finance/lending/increase-limit"
          >
            Increase Limit
          </Link>
        </div>
      </ActivateLimitContainer>
    </ActivateLimitWrapper>
  );
};

const styles = {
  activateLimitButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    backgroundColor: "#555",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer"
  },
  increaseLimitContainer: { padding: 10 },
  increaseLimitButton: { color: "#000" }
};

export default ActivateLimit;
