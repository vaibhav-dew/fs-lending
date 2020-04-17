import React, { useState } from 'react';
import {
    EmiHead,
    EmiContainer,
    TableHeader,
    TableHeaderData,
    TableRowData,
    TableRow,
} from './style';
import Radio from '../../new-credit/kyc/Radio'
const EmiDetails = (props) => {
    const { prod } = props
    return (
        <EmiContainer>
            <EmiHead>
                Choose EMI Option
            </EmiHead>
            <TableHeader>
                <TableHeaderData style={{ width: '60px', marginLeft: '37px' }}>Tenure (in Months)</TableHeaderData>
                <TableHeaderData style={{ width: '50px' }}>Total Interest</TableHeaderData>
                <TableHeaderData>Emi Per Month</TableHeaderData>
                <TableHeaderData>Processing Fee</TableHeaderData>
                <TableHeaderData>Advance EMI</TableHeaderData>
            </TableHeader>
            <TableRow>
                <Radio style={{ height: '20px', width: '20px', margin: '16px 0 16px 16px' }} />
                <TableRowData style={{ marginLeft: '6px' }}>{prod.Tenure}</TableRowData>
                <TableRowData style={{ marginLeft: '13px' }}>&#8377;{prod.Interest}</TableRowData>
                <TableRowData style={{ marginLeft: '11px' }}>&#8377;{prod.EMI}</TableRowData>
                <TableRowData style={{ marginLeft: '14px' }}>&#8377;{prod.ProcessingFee}</TableRowData>
                <TableRowData>{prod.AdvanceEMI}</TableRowData>
            </TableRow>
        </EmiContainer>
    )
}
export default EmiDetails;