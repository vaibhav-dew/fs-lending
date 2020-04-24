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
          <Link to="/credit-line/confirm">Confirm</Link>
        </li>
        <li>
          <Link to="/credit-line/activate-limit">Activate limit</Link>
        </li>
        <li>
          <Link to="/credit-line/kyc-details">KYC details</Link>
        </li>
        <li>
          <Link to="/credit-line/details">Details of kyc</Link>
        </li>
        <hr />
        <li>
          <Link to="/kycdetails"> New Kyc Page</Link>
        </li>
        <li>
          <Link to="/credit-line/onboarding-form">Onboarding Form</Link>
        </li>
        <li>
          <Link to="/limit"> New Limit Page</Link>
        </li>
        <li>
          <Link to="/tatacapital"> Tata Capital Dummy</Link>
        </li>
        <hr />
        <li>
          <Link to='/schemeselection'>Scheme Selection</Link>
        </li>
        <hr />
        <li>
          <Link to="/testingcomponent"> Testing </Link>
        </li>
        <li>
          <Link to="/otp"> OTP </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
