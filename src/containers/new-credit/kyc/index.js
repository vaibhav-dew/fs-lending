import React, { useState, useEffect, useRef } from 'react'
import {
    Container,
    ContentHead,
    ContentSubHead,
    OptionContainer,
    OptionValue,
    OptionSubValue,
    Button,
    ButtonContent,
    LinkContent,
} from './style'
import PropTypes from 'prop-types'
import Instructions from './Instructions.js';
import Radio from './Radio';
import NewNavbar from '../Common/new-navbar';
import Popup from '../Common/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { documentDetails } from './ActionCreator';
import { togglePopup, resetState } from './Actions';
import Axios from 'axios';
const NewKyc = props => {
    const dispatch = useDispatch();
    const kycDetailsReducer = useSelector(state => state.kycReducer)
    const [selectedTag, setselectedTag] = useState("");
    // const [ecsData, setEcsData] = useState(
    //     '{"clientId":"TDG_WEB","data":"sGk9Z2pZNJu6tZ9t9yIJiyhW3ynsFxoSRbnImHvo9aKbmXo5Y8OTUvAq/O26+aSJJfcaEB/PVlBv2HUneDuNQ19aPfAo1YEEsH3fBQqflnzsH7gyGAABD2TjlrEeZj1AVMqGKGGuyepJ8ivi+PaiXcb25+Gog4bXt8ucYcxcPlTk/UIJaTWOEad8R3Ckl67ykCRsobiubJTT+W258ltBsUVpX1cp7MfDYsB8PBBreWjIN9tR8K91pNIzcA3R/madu4DV4jR8NRizz9j+zLAS5zXiWtGPKKVdvbWzesdSuMJU8sqGgJiu5iLSdz1YHhtxFBi9vOq9iNstsnEssglaMjF8qOOaTlzCf00FPBAlb+PO0UcN3j14k/ioDIVC/sCHKiclcn7gjLAj4T0o8dXHv5uSiPT89W6CCfIc8W6qCrmD7pVlfPI7m6fgoxQsQ206","signature":"EuYkXY/C3BPYddR+UKEN8e0/s7jngH0W1OKDfWIBsy6iRQ7hLhXxlwU479MvM1fhWsP18FV+5cStvXe9HNi4w1MMU3TccCEOh5u5vj8lftXkiEli+R6IexckujkyHooCbKtxzlEJjPa49sC1QFk+lHTdQKFxOzjo3uDWijHZilRNSAmeQuJd2DBUAGFmnS9sa8qg1zg8L7ay9v6bY6A+08jo4uVdDI+9yZCR9xWa7Q020z2XNZ4JzeeToIWE6XTOwRypXysPKj6p97tecrb7P3PY0C0Zrtb0QaLEIjrOTJrbS1N4gNWI79Hlz4EqkfVW0GVkPf9eRwjDdB9AdX5o1w==","skey":"D0jxNX9KBO0piAFX8n0KiFTQoCsrSkV+CyrOqndbFew9zTg7H5pnKX5y2YjAffkOiy7UrCX/54Ujh3YbQzOchAOrGR1k22vcQXilbX9Ym4QTIyxJEMBxIfcud9uWoVWPOuV6L8wDXYSfRNPcLsyAoYoPMJXvQW2Dr4lktxmbv3TFbp17uWe56wI9BCxPJbDMeWiqpd5f7O2psc7tFH4EVzeM4TZewqwdY3pAdxuudam1pV20rM1rgZY0yCPSPXW1fO06D+ZNyLeK8BfcYjVlv6MioqocDPYSmxb/KinM5M3a1GSxWG/3bBHWy1jbwiripYVNbMuLHhPkBHwEHa/dhA=="}'
    // )
    const [ecsData, setEcsData] = useState('')
    const handleOption = e => setselectedTag(e.target.value);
    const ecsRef = useRef(null);
    useEffect(() => {
        if (kycDetailsReducer.url !== '') {
            // props.history.push(kycDetailsReducer.url)
            window.location.assign(kycDetailsReducer.url);
        }
        return (() => {
            dispatch(resetState(kycDetailsReducer.url = ''))
        })
    }, [dispatch, kycDetailsReducer.url, props.history])
    const handleChange = () => {
        if (selectedTag === 'aadhar') {
            console.log('aadhar details')
            const head = {
                headers: {
                    'Content-Type': 'application/json',
                    'channel': 'p'
                }
            }
            const data = JSON.stringify({
                "customerhash": "string",
            })
            // setEcsData(JSON.stringify(ecsData));
            console.log('escccccccccc', ecsData)
            // ecsRef.current.submit()
            Axios
                .post('http://52.183.135.123:8090/tatapay/lending/generate/token/forchannel', data, head).then(res => res)
                .then((res) => {
                    console.log(res.data.token)
                    // setEcsData(JSON.stringify(res.data.token));
                    setEcsData(res.data.token)
                    console.log('escccccccccc', ecsData)
                    ecsRef.current.submit()
                    // document.getElementById("frmRequest").submit()
                })
                .then(() => document.getElementById("ecsForm").submit())
                .catch((err) => {
                    console.log(err)
                })
        } else if (selectedTag === 'document') {
            dispatch(documentDetails(props))
        }
    }
    const handlePopup = () => {
        dispatch(togglePopup())
    }
    return (
        <>
            {/* <form action='https://okyc.tatacapital.com/EcsOkycWeb/ProcessRequest.jsp' method="POST" id="ecsForm">
                <input type="hidden" name="WEBAPI_REQUEST_DATA" value={ecsData} />
            </form> */}
            <form ref={ecsRef} id="frmRequest" action='https://okyc.tatacapital.com/EcsOkycWeb/ProcessRequest.jsp'
                method="POST">
                <input type="hidden" id="WEBAPI_REQUEST_DATA"
                    name="WEBAPI_REQUEST_DATA"
                    value={ecsData}
                // value='{"clientId":"TDG_WEB","data":"sGk9Z2pZNJu6tZ9t9yIJiyhW3ynsFxoSRbnImHvo9aKbmXo5Y8OTUvAq/O26+aSJJfcaEB/PVlBv2HUneDuNQ19aPfAo1YEEsH3fBQqflnzsH7gyGAABD2TjlrEeZj1AVMqGKGGuyepJ8ivi+PaiXcb25+Gog4bXt8ucYcxcPlTk/UIJaTWOEad8R3Ckl67ykCRsobiubJTT+W258ltBsUVpX1cp7MfDYsB8PBBreWjIN9tR8K91pNIzcA3R/madu4DV4jR8NRizz9j+zLAS5zXiWtGPKKVdvbWzesdSuMJU8sqGgJiu5iLSdz1YHhtxFBi9vOq9iNstsnEssglaMjF8qOOaTlzCf00FPBAlb+PO0UcN3j14k/ioDIVC/sCHKiclcn7gjLAj4T0o8dXHv5uSiPT89W6CCfIc8W6qCrmD7pVlfPI7m6fgoxQsQ206","signature":"EuYkXY/C3BPYddR+UKEN8e0/s7jngH0W1OKDfWIBsy6iRQ7hLhXxlwU479MvM1fhWsP18FV+5cStvXe9HNi4w1MMU3TccCEOh5u5vj8lftXkiEli+R6IexckujkyHooCbKtxzlEJjPa49sC1QFk+lHTdQKFxOzjo3uDWijHZilRNSAmeQuJd2DBUAGFmnS9sa8qg1zg8L7ay9v6bY6A+08jo4uVdDI+9yZCR9xWa7Q020z2XNZ4JzeeToIWE6XTOwRypXysPKj6p97tecrb7P3PY0C0Zrtb0QaLEIjrOTJrbS1N4gNWI79Hlz4EqkfVW0GVkPf9eRwjDdB9AdX5o1w==","skey":"D0jxNX9KBO0piAFX8n0KiFTQoCsrSkV+CyrOqndbFew9zTg7H5pnKX5y2YjAffkOiy7UrCX/54Ujh3YbQzOchAOrGR1k22vcQXilbX9Ym4QTIyxJEMBxIfcud9uWoVWPOuV6L8wDXYSfRNPcLsyAoYoPMJXvQW2Dr4lktxmbv3TFbp17uWe56wI9BCxPJbDMeWiqpd5f7O2psc7tFH4EVzeM4TZewqwdY3pAdxuudam1pV20rM1rgZY0yCPSPXW1fO06D+ZNyLeK8BfcYjVlv6MioqocDPYSmxb/KinM5M3a1GSxWG/3bBHWy1jbwiripYVNbMuLHhPkBHwEHa/dhA=="}'
                />
            </form>
            <Container value={selectedTag}>
                <NewNavbar />
                <ContentHead>
                    COMPLETE YOUR KYC
                    </ContentHead>
                <ContentSubHead>
                    How would you like to proceed?
                    </ContentSubHead>
                <OptionContainer>
                    <Radio value='aadhar' onValueChange={handleOption} />
                    <OptionValue>
                        AADHAR
                        </OptionValue>
                </OptionContainer>
                <OptionSubValue>
                    Instant online verification
                    </OptionSubValue>
                {selectedTag === 'aadhar' ? <Instructions value={selectedTag} /> : ''}
                <OptionContainer>
                    <Radio value='document' onValueChange={handleOption} />
                    <OptionValue>
                        Document PickUp
                        </OptionValue>
                </OptionContainer>
                <OptionSubValue>
                    Takes 24 hours
                    </OptionSubValue>
                {selectedTag === 'document' ? <Instructions value={selectedTag} /> : ''}
                {selectedTag === 'aadhar' ? <LinkContent>You will be redirected to Aadhar website</LinkContent>
                    : ''}
                {selectedTag === 'document' ? <LinkContent style={{ margin: '57px 20px 0px 21px' }}>You will be redirected to Tata Capital website</LinkContent>
                    : ''}
                {selectedTag ? <Button onClick={handleChange}><ButtonContent> Next</ButtonContent> </Button> : ''}
                <Popup showError={kycDetailsReducer.isError} togglePopup={handlePopup} />
            </Container>
        </>
    )

}
NewKyc.propTypes = {
    selectedTag: PropTypes.string,
}
export default NewKyc

