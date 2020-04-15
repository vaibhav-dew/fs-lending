import React from 'react';
import {
    Navbar,
    NavbarRoute,
    NavbarHead,
    NavbarHeadContent
} from './style'
import { Link } from 'react-router-dom';
import close from '../../../../Assets/close.svg'

const MultitenderNavbar = (props) => {
    return (
        <>
            <Navbar>
                <NavbarHead>
                    <NavbarHeadContent>Tata Credit Line</NavbarHeadContent>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <NavbarRoute src={close} alt='close' />
                    </Link>
                </NavbarHead>
            </Navbar>
        </>
    )
}
export default MultitenderNavbar;