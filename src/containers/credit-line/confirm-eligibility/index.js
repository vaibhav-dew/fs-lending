import React, { useState } from "react";
import {
    Container,
    Header,
    Steps,
    StepHeader,
    Conditions,
    ConfirmButton,
    Terms,
    DetailContainer,
    DetailOption,
    Value,
    DetailWrapper,
    EditOption
} from "./style";
import Navbar from "../../../components/confirm-navbar";
import Modal from '../../../components/Modal'
import Axios from "axios";
import Loader from '../../../components/Loader/Loader'
import { useSelector } from "react-redux";


export const DetailConfirmation = props => {
    const state = useSelector(state => state)
    console.log(state)
    const [modal, setModal] = useState(false);
    const [modalMsg, setModalMsg] = useState();
    const [isActive, setIsActive] = useState(false);
    const panNumber = state.panVerificationReducer.panNumber;
    const panName = state.panVerificationReducer.panName;
    const dob = "26 November 1994";
    const pincode = "244412";
    const employmentType = "Salaried";
    const [isLoading, setIsLoading] = useState(false)

    const confirmDetails = () => {
        setIsLoading(true)
        const head = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const data = JSON.stringify({
            address: "string",
            customerHash: "string",
            deviceid: "string",
            dob: dob,
            mobileNo: "string",
            employmentType: employmentType,
            geoLocation: {
                "latitude": "22.5958",
                "longitude": "88.2636"
            },
            name: panName,
            panCard: panNumber,
            pinCode: "125005"
        })
        Axios.post('http://52.183.135.123:8090/tatapay/lending/geteligibility/withpan', data, head)
            .then(response => {
                setIsLoading(false)
                if (response && response.request.status === 200) {
                    props.history.push('/credit-line/activate-limit')
                }
            })
            .catch(err => {
                if (err && err.response) {
                    setIsLoading(false)
                    setModal(!modal)
                    setModalMsg(err.response.data.message)
                }
            })
    }
    if (isLoading) {
        return (
            <Loader />
        )
    }
    const termsClick = () => {
        setModal(!modal)
        setModalMsg('Terms and Condition')
    };
    const handleClick = () => {
        console.log('hi')
        setIsActive(!isActive)
        console.log(props)
        props.history.push({
            pathname: '/credit-line/pan-details',
            params: { panName, panNumber }
        })

    }

    return (
        <>
            <Navbar title={'/'} isExit route="/credit-line"/>
            <Container >
                <Header>Confirm Limit</Header>
                <Steps>Step 1 of 3</Steps>
                <StepHeader>Confirm Details</StepHeader>
                <Steps>
                    Please Review the details below as you won't able to change them later
                </Steps>
                <DetailContainer >
                    <EditOption onClick={handleClick}>
                        <img

                            src="https://image.flaticon.com/icons/svg/1250/1250925.svg"
                            width="15"
                            style={{ margin: "5px" }}
                            alt="edit"
                        />
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
                <Conditions>
                    By proceeding, you accept our &nbsp;
                    <Terms onClick={termsClick}>terms and conditions</Terms>
                    &nbsp;and authorise us to pull your bureau score from CIBIL
                </Conditions>
                <ConfirmButton onClick={confirmDetails}>Confirm Eligibility</ConfirmButton>
                {modal ? <Modal closePopUp={termsClick} title={modalMsg} /> : ''}
            </Container>
        </>
    );
};


export default DetailConfirmation;
