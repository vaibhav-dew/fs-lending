import React, { useState, useEffect } from 'react'
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
import { togglePopup } from './Actions';
import Axios from 'axios';
const NewKyc = props => {
    const dispatch = useDispatch();
    const kycDetailsReducer = useSelector(state => state.kycReducer)
    const [selectedTag, setselectedTag] = useState("");
    const [ecsData, setEcsData] = useState('')
    const ecs = {
        "clientId": "TDG_WEB",
        "data": "OlhaIoXAYzY78lGvXuIN3TbG4GmBt4rhuZFb5uxhC/N8XgCZvpl2TiuS2TTX6aoa8LAD3IZ9V7FFPWRWIc6p7pqLONQUzq60VNKv4+o62v/5uNb/4cpQTrA+MnB2ukqHuNLQ3iMti6hFA3WJkVEV04CarwX5cvIabae8xhCQcFfnHGP3/smWkypPlKmPppIs28vKOoTnbLwqjES8la/ZhwmZsEqr04KKZF3Gn9b73fhrAwV9YVX2qLM3QT1LoEvFzzKvu8TAPO/U33D/obuzyVH/b6DkLb63Wed+HFSPySAZosfwMKhAN/mC1H8vTFGK/mDQc0FtQ4f2m0iB2JgvOMlh1YYx6yJ3T8UzMX8yWFXntvxHaec83wbkvOa7MURuFIhoqPfuT7xprRHUEw0LqiW2MUr0RNg+7ktCSpC+/boyrB6AUTs+ZsOfWxeyXxxk56BHYlWbm1HVhgPIEALst+DMVRirX/7jD1udzXuOd/6ACkAu4NNmf5nTSaKU/RR6vDwpNjEFG+VOKUjkInWeHe/ghMDNT016EUXYpTzJvtSWu48APhAK7hdnQVfZjRxIkiD6K+sA2bL3ylL82fNDni3fAevUyEvy7bYiKBORlOQ1Ow5eI1SSuwaTg5uQ6g7o+d0VAvKkpmiFjMOa5h6pSSHpQWyBmt1Pj4uJOL1vTSY8a95iXQrA18hKX83cUwiBvVvDQ4SBnCfwewIhSnPkDtxU453OyzNyi1D3IOXizhv1i3+6uo699dW3So3OLRA8Uf9voOQtvrdZ534cVI/JIN6Y9/hawZx43xDn/Wcvu3FE5RO5b48JG1OrlQ7HBSIxOFXB7mElhEnFZUVWxCoUfA==",
        "signature": "DYi4c4fgsc5JriYevsrM2u8LlhOHt5LlRZubk0kAeV3lcnT6dTJfvkM14LnxEQrpglYyLQbI9RXn2ru23b+nq7sJaJBZaiwc4CMwRBFw7E+Bd3401z2C4l4oAT/1xHahCS28xFyuQlfJnoldQAZV24lCIIGIeeFOI1h6uRt7E+feawl47yKbPJDw6PRjBGEyJ9oHPPRUrOYwfkmbv3C+QYNOd7ta3FCYCrlIpx0/TPb23ZQ8JdJSVb8uIzlffXBDsE8pZP05O/9cPGn8RHRm0DbbWSkxohbo+vvgUWaKies9iSE4U04SVt6QrkfPX6LN5tvOvjRRQpaNIX7FAUpKrw==",
        "skey": "eZlFFUaaGuX0z7okPVBjHnGLbWMSOtYcXezmO+m8ZXFOM3s+yxhbnXshuNB7HdsObD8UPtOqhl4j7PdiCgIElwKho9O5aqBSW+Na2bipYlFoD0tDnonZ8DOfAB+R3bStYU6CvoewoB9y6bJhWTNFDcK0fx8l5ANHnrs7CLhkT6oZcxawu1wLVlUrW17CVICTlpL5nbesfBBSiX+kyJ+8XWu/DBTFAMEM/erH2keAUbTCRUC3f4xe6XBaG0CGxJVmcikNaXo+gOsb/2xPnUy/B13kqjNEnk+r99wfLmAgSzdC4a4VF3VVarYmqib4fuLRqBMkTaRBqMfBifwRdQ321Q=="
    }
    const handleOption = e => setselectedTag(e.target.value);
    useEffect(() => {
        if (kycDetailsReducer.url !== '') {
            props.history.push(kycDetailsReducer.url)
        }
    }, [kycDetailsReducer.url, props.history])
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
            Axios
                .post('http://52.183.135.123:8090/tatapay/lending/generate/token/forchannel', data, head).then(res => res)
                .then((res) => {
                    console.log(res.data.token)
                    setEcsData(JSON.stringify(res.data.token));
                    console.log('escccccccccc', ecsData)
                    document.getElementById("ecsForm").submit()
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
            <form action='https://okyc.tatacapital.com/EcsOkycWeb/ProcessRequest.jsp' method="POST" id="ecsForm"><input type="hidden" name="WEBAPI_REQUEST_DATA" value={ecsData} /></form>
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

