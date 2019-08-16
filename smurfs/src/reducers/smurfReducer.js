import {FETCHING_SMURF_LOADING, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE} from '../actions/smurfAction'

const initialState = {
    author: "Hong",
    isLoading: false,
    error: '',
    smurfs: [],
    additionalSmurfs: [
        {id: 1, name: 'Alex', age: 100, height: '10cm'},
        {id: 2, name: 'Sara', age: 150, height: '15cm'},
        {id: 3, name: 'Jay', age: 200, height: '12cm'},
        {id: 4, name: 'Andi', age: 180, height: '14cm'},

    ]
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
                error: action.payload
            }


        default:
            return state
    }
}