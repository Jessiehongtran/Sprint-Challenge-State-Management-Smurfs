import axios from 'axios';


export const FETCHING_SMURF_LOADING = 'FETCHING_SMURF_LOADING';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';


export const getSmurfs = () => {

    return dispatch => {
        dispatch({type: FETCHING_SMURF_LOADING});
        axios
            .get(`http://localhost:3333/smurfs`)
            .then (res => 
                dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data}))
            .catch(err => 
                dispatch({type: FETCHING_SMURF_FAILURE, payload: err.response}))
    }
}

