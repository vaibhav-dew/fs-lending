import React from 'react';
import {
    Navbar,
    NavbarRoute,
    NavbarHead,
    NavbarSubHead,
    NavbarHeadContent
} from './style'
import { Link } from 'react-router-dom';

const NewNavbar = (props) => {
    return (
        <>
            <Navbar>
                <NavbarHead>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <NavbarRoute>
                            {/* <img style={{}} */}
                            <div style={{ height: '16px', width: '10px', margin: '4px 7px 4px 7px' }}>
                                &lt;
                            </div>
                        </NavbarRoute>
                    </Link>
                    <NavbarHeadContent>Tata Credit Line</NavbarHeadContent>
                </NavbarHead>
                <NavbarSubHead>Step 2/3</NavbarSubHead>
            </Navbar>
        </>
    )
}
export default NewNavbar;