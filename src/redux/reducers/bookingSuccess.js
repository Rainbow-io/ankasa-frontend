const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchGetBookingSuccess = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_BOOKING_SUCCESS_REQUEST':
            return {...state, loading: true};
        case 'GET_BOOKING_SUCCESS_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'GET_BOOKING_SUCCESS_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchGetBookingSuccess