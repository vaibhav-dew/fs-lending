import React from "react";
import {
    DetailContainer,
    DetailOption,
    Value,
    DetailWrapper,
} from "./style";
import Navbar from "../../../components/navbar";

export const Details = props => {
    const panNumber = "BJLPG1020R";
    const panName = "Harsh Kumar Gupta";
    const dob = "26 November 1994";
    const pincode = "244412";
    const employmentType = "Salaried";

    return (
        <>
            <Navbar route='/credit-line/kyc-details' />
            <DetailContainer >
                <h3 style={{ textAlign: 'center' }}>Details</h3>
                <DetailOption>
                    <DetailWrapper>
                        <Value detailHead>Pan</Value>
                        <Value>{panNumber}</Value>
                    </DetailWrapper>
                    <DetailWrapper>
                        <Value detailHead>Full Name</Value>
                        <Value>{panName}</Value>
                    </DetailWrapper>
                    <DetailWrapper>
                        <Value detailHead>Date of Birth</Value>
                        <Value>{dob}</Value>
                    </DetailWrapper>
                    <DetailWrapper>
                        <Value detailHead>Pincode</Value>
                        <Value>{pincode}</Value>
                    </DetailWrapper>
                    <DetailWrapper>
                        <Value detailHead>Employment Type</Value>
                        <Value>{employmentType}</Value>
                    </DetailWrapper>
                </DetailOption>
            </DetailContainer>
        </>
    );
};

export default Details;
