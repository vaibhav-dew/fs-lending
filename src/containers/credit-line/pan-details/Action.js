import {
    SAVE_PAN_DETAILS,
} from './Constants';


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
