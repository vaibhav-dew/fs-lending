import React from "react";
import Navbar from "../../components/confirm-navbar";
import styled from 'styled-components';


const Loader = () => {
    const LoaderContent = styled.div`
        font-size:30px;
        width: 80%;
        margin: 0 auto;
        padding: 120px;
    `;
    return (
        <React.Fragment>
            <Navbar isExit={false} title="Credit Line" route={'/'} />
            <LoaderContent> Loading...</LoaderContent>
        </React.Fragment>


    );
}
export default Loader;
