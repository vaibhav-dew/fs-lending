import React, { useState } from 'react';
import MultitenderNavbar from '../common/Navbar/index';
import { Container, LimitContent, LimitHead, LimitValue } from './style';

const Scheme = (props) => {
    const [limit, setLimit] = useState('55000')
    return (
        <>
            <Container>
                <MultitenderNavbar />
                <LimitContent>
                    <LimitHead>
                        AVAILABLE LIMIT
                    </LimitHead>
                    <LimitValue>
                        &#8377;{limit}
                    </LimitValue>
                </LimitContent>
            </Container>

        </>
    )
}
export default Scheme;