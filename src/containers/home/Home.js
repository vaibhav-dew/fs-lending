import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <ul>
        <li>
          <Link to="/credit-line">Credit Line</Link>
        </li>
        <li>
          <Link to="/credit-line/pan-details">Pan Details</Link>
        </li>
        <li>
          <Link to="/credit-line/confirm-limit">Confirm Limit</Link>
        </li>
        <li>
          <Link to="/credit-line/kyc-details">KYC details</Link>
        </li>
        <li>
          <Link to="/credit-line/confirm">Confirm</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
