import React, { useState } from "react";
import PanDetails from "./PanDetails";
import Location from "./Location";
import PersonalDetails from "./PersonalDetails";
import EmploymentDetails from "./EmploymentDetails";
import TermsAndConditions from "./TermsAndConditions";
import TCPNav from "../../../components/TCPNav";

const OnboardingForm = () => {
  const [showTC, setShowTC] = useState(false);
  return (
    <div>
      <TCPNav />
      <Location />
      <PanDetails />
      <PersonalDetails />
      <EmploymentDetails />
      <div style={{ color: "#fff" }}>
        <p>
          By proceeding, you accept our{" "}
          <span
            style={{
              color: "#a990d0",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => setShowTC(!showTC)}
          >
            terms and conditions
          </span>{" "}
          and authorise us to pull your bureau score from CIBIL.
        </p>
      </div>
      <TermsAndConditions show={showTC} setShowTC={setShowTC} />
      <div>
        <button>Confirm Eligibility</button>
      </div>
    </div>
  );
};

export default OnboardingForm;
