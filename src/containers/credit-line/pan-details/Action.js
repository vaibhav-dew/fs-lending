import {
    SAVE_PAN_DETAILS
} from "/home/harshk/fs-lending/src/containers/credit-line/pan-details/Constants";


/**
 * @description save pan details action
 */
export const savePanDetails = (panName, panNumber) => ({
    type: SAVE_PAN_DETAILS,
    payload: {
        panName: panName,
        panNumber: panNumber
    }
})
