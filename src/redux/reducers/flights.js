const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchFlights = (state = initialState, action={}) => {
    switch (action.type) {
        case 'FLIGHTS_REQUEST':
            return {...state, loading: true};
        case 'FLIGHTS_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'FLIGHTS_ERROR':
            return {...state, loading: false, error: true, data: []};
        default:
            return state;
    }
}

export default FetchFlights