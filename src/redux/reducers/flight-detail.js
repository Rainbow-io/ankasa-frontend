const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchFlightDetail = (state = initialState, action={}) => {
    switch (action.type) {
        case 'FLIGHTDETAIL_REQUEST':
            return {...state, loading: true};
        case 'FLIGHTDETAIL_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'FLIGHTDETAIL_ERROR':
            return {...state, loading: false, error: true, data: []};
        default:
            return state;
    }
}

export default FetchFlightDetail