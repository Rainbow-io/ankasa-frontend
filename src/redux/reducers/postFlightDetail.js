const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPostFlight = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POST_FLIGHT_REQUEST':
            return {...state, loading: true};
        case 'POST_FLIGHT_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'POST_FLIGHT_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchPostFlight