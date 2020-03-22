import * as React from "react";
import Navbar from "../navbar/index";
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
            <Navbar isExit={false} title="Credit Line" />
            <LoaderContent> Loading...</LoaderContent>
        </React.Fragment>


    );
}
export default Loader;
