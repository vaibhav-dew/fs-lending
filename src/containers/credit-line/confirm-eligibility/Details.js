import React from "react";
import {
    DetailContainer,
    DetailOption,
    Value,
    DetailWrapper,
    EditOption
} from "./style";
import { Link } from 'react-router-dom'

export const Details = props => {
    const panNumber = "BJLPG1020R";
    const panName = "Harsh Kumar Gupta";
    const dob = "26 November 1994";
    const pincode = "244412";
    const employmentType = "Salaried";

    return (
        <>
            <DetailContainer>
                <EditOption>
                    <Link to='/credit-line/pan-details'>
                        <img
                            src="https://image.flaticon.com/icons/svg/1250/1250925.svg"
                            width="15"
                            style={{ margin: "5px" }}
                            alt="edit"
                        />
                    </Link>
                </EditOption>
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
