import {FETCHING_SMURF_LOADING} from '../actions/smurfAction'

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


        default:
            return state
    }
}