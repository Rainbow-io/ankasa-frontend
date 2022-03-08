const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchBook = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POSTBOOKING_REQUEST':
            return {...state, loading: true};
        case 'POSTBOOKING_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'POSTBOOKING_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchBook