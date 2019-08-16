import axios from 'axios';


export const FETCHING_SMURF_LOADING = 'FETCHING_SMURF_LOADING';


export const getSmurfs = () => {

    return dispatch => {
        dispatch({type: FETCHING_SMURF_LOADING});
    }
}