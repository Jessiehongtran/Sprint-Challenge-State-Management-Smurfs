import {FETCHING_SMURF_LOADING, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE} from '../actions/smurfAction'

const initialState = {
    author: "Hong",
    isLoading: false,
    error: '',
    smurfs: []
}

export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload,
            }

        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }


        default:
            return state
    }
}