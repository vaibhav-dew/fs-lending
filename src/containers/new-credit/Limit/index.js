import React from 'react';
import {
    Container,
    Content,
    Header,
    ValueHeader,
    Value,
    ProceedButton,
    ProceedButtonContent,
    RedirectContent,
    IncreaseLimitContent,
    IncreaseLimtButtonContent,
} from './style';
import PropTypes from 'prop-types'
import Logo from '../../../Assets/purple.svg'
import Axios from 'axios';

const Limit = (props) => {
    // const [limit, setLimit] = useState('15000');
    // const limit = props.eligibilityamount;
    // const mandatereq = props.mandatereq;
    // const kycreq = props.kycreq;
    // const refid = props.refid;
    // const message = props.message;
    const limit = 15000;
    const kycreq = 'Y';
    const handleKyc = () => {
        if (kycreq === 'Y') {
            props.props.history.push('/kycdetails')
        } else if (kycreq === 'N') {
            const head = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const data = JSON.stringify({
                "customerhash": "G876543",
                "url": "string"
            })
            Axios
                .post('http://52.183.135.123:8090/tatapay/lending/activate/limit', data, head)
                .then(response => {
                    if (response && response.request.status === 200) {
                        console.log('response', response)
                        props.props.history.push(response.data.url)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            console.log('Something Bad happend')
        }
    }

    return (
        <Container show={props.show}>
            <Content>
                <img
                    src={Logo}
                    alt='completed'
                    style={{ margin: '32px auto 0 auto', display: 'block' }} />
                <Header>
                    Application successful!
                </Header>
                <ValueHeader>
                    Your credit limit is
                </ValueHeader>
                <Value>
                    &#8377;{limit}
                </Value>
                <ProceedButton>
                    <ProceedButtonContent onClick={handleKyc}>{kycreq === 'Y' ? 'Proceed' : 'Activate Limit'}</ProceedButtonContent>
                </ProceedButton>
                <RedirectContent>
                    {kycreq === 'Y' ? 'You will be redirected to the Tata Capital website for KYC' : 'Activate Limit'}
                </RedirectContent>
                <IncreaseLimitContent>
                    You can also increase your limit
                </IncreaseLimitContent>
                <ProceedButton style={{ backgroundColor: '#1e1e1e', margin: '16px 18px 35px 18px' }}>
                    <IncreaseLimtButtonContent>Increase Limit</IncreaseLimtButtonContent>
                </ProceedButton>
            </Content>
        </Container>
    )
}

Limit.propTypes = {
    limit: PropTypes.string,
    kycreq: PropTypes.string,
}

export default Limit