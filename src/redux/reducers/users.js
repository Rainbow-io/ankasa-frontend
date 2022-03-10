const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchUsers = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_USERS_REQUEST':
            return {...state, loading: true};
        case 'GET_USERS_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'GET_USERS_ERROR':
            return {...state, loading: false, error: true, data: []};
        default:
            return state;
    }
}

export default FetchUsers