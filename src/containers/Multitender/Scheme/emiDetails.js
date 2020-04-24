import React from 'react';
import {
    EmiHead,
    EmiContainer,
} from './style';
import Table from './table';
const EmiDetails = (props) => {
    const { prod } = props;
    return (
        <EmiContainer>
            <EmiHead>
                Choose EMI Option
            </EmiHead>
            <Table prod={prod} key={prod.ModelCode} selectedProduct={props.selectedProduct} />

        </EmiContainer >
    )
}
export default EmiDetails;