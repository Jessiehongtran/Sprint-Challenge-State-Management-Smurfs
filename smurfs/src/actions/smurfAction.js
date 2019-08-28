import axios from 'axios';


export const FETCHING_SMURF_LOADING = 'FETCHING_SMURF_LOADING';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

export const POSTING_SMURF_LOADING = 'POSTING_SMURF_LOADING';
export const POSTING_SMURF_SUCCESS = 'POSTING_SMURF_SUCCESS';
export const POSTING_SMURF_FAILURE = 'POSTING_SMURF_FAILURE';


export const getSmurfs = () => {

    return dispatch => {
        console.log('get smurf dispatch fire')
        dispatch({type: FETCHING_SMURF_LOADING});
        axios
            .get(`http://localhost:3333/smurfs`)
            .then (res => 
                dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data}))
            .catch(err => 
                dispatch({type: FETCHING_SMURF_FAILURE, payload: err.response}))
    }
}

export const addSmurfs = smurf => {
    
    return dispatch => {
        console.log('addSmurf dispatch fire')
        dispatch({type: POSTING_SMURF_LOADING})
        axios
            .post(`http://localhost:3333/smurfs`, smurf)
            .then (res => 
                dispatch({type: POSTING_SMURF_SUCCESS, payload: res.data})
            )
            .catch(err => 
                dispatch({type: POSTING_SMURF_FAILURE, payload: err.response})
            )

    }

}