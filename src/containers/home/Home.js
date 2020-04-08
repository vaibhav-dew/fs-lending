import React from "react";
import { Link } from "react-router-dom";
import "./Home.style.css";

const Home = () => {
  return (
    <div>
      Home
      <ul className="module-links">
        <li>
          <Link to="/credit-line">Credit Line</Link>
        </li>
        <li>
          <Link to="/credit-line/pan-details">Pan Details</Link>
        </li>
        <li>
          <Link to="/credit-line/personal-details">Personal Details</Link>
        </li>
        <li>
          <Link to="/credit-line/kyc-details">KYC details</Link>
        </li>
        <li>
          <Link to="/credit-line/confirm">Confirm</Link>
        </li>
        <li>
          <Link to="/credit-line/activate-limit">Activate Limit</Link>
        </li>
        <li>
          <Link to="/credit-line/onboarding-form">Onboarding</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
