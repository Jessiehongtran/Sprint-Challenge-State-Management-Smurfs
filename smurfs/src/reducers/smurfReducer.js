import {FETCHING_SMURF_LOADING, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE,
    POSTING_SMURF_LOADING, POSTING_SMURF_SUCCESS, POSTING_SMURF_FAILURE} from '../actions/smurfAction'

const initialState = {
    author: "Hong",
    isLoading: false,
    error: '',
    smurfs: [],
    additionalSmurfs: [
        {name: 'Alex', age: 100, height: '10cm'},
        {name: 'Sara', age: 150, height: '15cm'},
        {name: 'Jay', age: 200, height: '12cm'},
        {name: 'Andi', age: 180, height: '14cm'},

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
        
        case POSTING_SMURF_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        
        case POSTING_SMURF_SUCCESS:

        //we need to check that we are recieving the smurf as action.payload
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: [...state.smurfs, action.payload]
                    
            }
        
        case POSTING_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}