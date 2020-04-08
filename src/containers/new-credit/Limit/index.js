import React, { useState } from 'react';
import {
    Container, Content, Header, ValueHeader, Value, ProceedButton,
    ProceedButtonContent, RedirectContent, IncreaseLimitContent, IncreaseLimtButtonContent,
} from './style';
import Logo from '../../../Assets/purple.svg'

const Limit = () => {
    const [limit, setLimit] = useState('15000');
    return (
        <Container>
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
                    <ProceedButtonContent>Proceed</ProceedButtonContent>
                </ProceedButton>
                <RedirectContent>
                    You will be redirected to the Tata Capital website for KYC
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

export default Limit