import React, { useState } from "react";
import PanDetails from "./PanDetails";
import Location from "./Location";
import PersonalDetails from "./PersonalDetails";
import EmploymentDetails from "./EmploymentDetails";
import TermsAndConditions from "./TermsAndConditions";
// import TCPNav from "../../../components/TCPNav";
// Added by harsh
import Limit from "../../new-credit/Limit";
import {
  Navbar,
  NavbarRoute,
  NavbarHead,
  NavbarSubHead,
  NavbarHeadContent
} from '../../new-credit/kyc/style'
// Added by harsh

const OnboardingForm = (props) => {
  const [showTC, setShowTC] = useState(false);
  // Added by harsh
  const [limit, setLimit] = useState(false);
  const navbarRoute = () => props.history.push('/')
  // Added by harsh
  return (
    <div>
      {/* Navbar added by harsh */}
      <Navbar>
        <NavbarHead>
          <NavbarRoute onClick={navbarRoute}>
            {/* <img style={{}} */}
            <div style={{ height: '16px', width: '10px', margin: '4px 7px 4px 7px' }}>
              &lt;
                            </div>
          </NavbarRoute>
          <NavbarHeadContent>Tata Credit Line</NavbarHeadContent>
        </NavbarHead>
        <NavbarSubHead>Step 2/3</NavbarSubHead>
      </Navbar>
      {/* Navbar added by harsh */}
      {/* <TCPNav /> */}
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
      </div>setLimit
      <TermsAndConditions show={showTC} setShowTC={setShowTC} />
      <div>
        {/*  On click event added by harsh */}
        <button onClick={() => setLimit(!limit)}>Confirm Eligibility</button>
        {/* Added by harsh */}
        <Limit show={limit} setLimit={setLimit} props={props} />
        {/* Added by harsh */}
      </div>
    </div>
  );
};

export default OnboardingForm;
