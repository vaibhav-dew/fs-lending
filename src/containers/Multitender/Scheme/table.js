import React, { useEffect, cloneElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selection } from './Action';
import styled from 'styled-components';
const table = {
    width: '100%',
    marginTop: '16px',
    fontsize: '12px',
    textAlign: 'center',
    borderSpacing: '0',
    emptyCells: 'show'
}
// const table = styled.div`
//     display:table;
//     width: ${props => props.enabled ? '100% !impprtant' : 'auto'};
//    /* margin-top: 16px; */
//    font-size: 12px;
//     /* text-align: center; */
//     border-spacing: 0;
//     border:0;
// `
// const tableHead = styled.div`
//     width: 74px;
//     height:32px;

// `
const tableHead = {
    width: '74px',
    height: '32px',
}
const tableHeadData = {
    verticalAlign: 'top',
    width: '74px',
    height: '32px',
    padding: '0px',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '1.33',
    textAlign: 'center',
    color: '#8f8f8f',
    overflow: 'unset'
    // marginLeft: '34px',
}
const tableRow = {
    width: '464px',
    height: '52px',
    border: 'solid 1px #ffffff',
    backgroundColor: 'rgba(30, 30, 30, 0.65)',
    textAlign: 'center',
    overflow: 'unset'
}
// const table = styled.div`
//     width: 100%;
//    margin-top: 16px;
//    font-size: 12px;
//     text-align: center;
//     border-spacing: 0;
//     border:0;
// `
const tableRowData = {
    width: '74px',
    height: '20px',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '1.43',
    textAlign: 'center',
    color: '#ffffff',
    borderSpacing: '0'
}
const Table = (props) => {
    const lendingProductDetails = useSelector(state => state.lendingProductReducer)
    const dispatch = useDispatch()
    const { prod, selectedProduct } = props
    var headerArray = ['', 'Tenure (in Months)', 'Total Interest', 'Emi Per Month', 'Processing Fee', 'Advance EMI']
    if (prod.TenureEMIList.reduce((a, b) => a + b.AdvanceEMI, 0) === 0) {
        headerArray = headerArray.slice(0, headerArray.length - 1)
    }
    const handleSelect = (list, prod) => {
        lendingProductDetails.selection && lendingProductDetails.selection.map((value) => {
            if (prod.ModelCode === value.ModelCode) {
                value['selected_Emi'] = list
                dispatch(selection(selectedProduct))
                // return;
            }
            // dispatch(selection(selectedProduct))
            return false;
        })
        // dispatch(selection(selectedProduct))
        // for (var i = 0; i < selectedProduct.length; i++) {
        //     if (prod.ModelCode === selectedProduct[i].ModelCode) {
        //         selectedProduct[i]['selected_Emi'] = list
        //         console.log(selectedProduct[i]['selected_Emi'])
        //         dispatch(selection(selectedProduct))
        //         break;
        //     }
        // }
    }
    return (
        <table style={table} >
            <thead>
                <tr style={tableHead}>
                    {
                        headerArray.map((value, index) => {
                            if (index === 0) {
                                return <th style={tableHeadData} key={value}></th>
                            } else {
                                return <th style={tableHeadData} key={value}>{value}</th>
                            }

                        }
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.prod.TenureEMIList && props.prod.TenureEMIList.map((list, index) => (
                        <tr style={tableRow} list={list} key={list.Tenure} onChange={() => handleSelect(list, props.prod)} >
                            <td style={tableRowData}><input type='radio'
                                name={prod.ModelCode}
                                id='prod'
                                // defaultChecked={index === 0}
                                style={{ height: '20px', width: '20px' }} /></td>
                            <td style={tableRowData}>{list.Tenure}</td>
                            <td style={tableRowData}>&#8377;{list.Interest}</td>
                            <td style={tableRowData}>&#8377;{list.EMI}</td>
                            <td style={tableRowData}>&#8377;{list.ProcessingFee}</td>
                            {prod.TenureEMIList.reduce((a, b) => a + b.AdvanceEMI, 0) === 0 ? '' : <td style={tableRowData}>{list.AdvanceEMI}</td>}
                        </tr>
                    ))
                }
            </tbody>
        </table >
    )
}
export default Table;