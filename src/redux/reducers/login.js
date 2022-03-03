const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchUserLogin = (state = initialState, action={}) => {
    switch (action.type) {
        case 'LOGIN_USER_REQUEST':
            return {...state, loading: true};
        case 'LOGIN_USER_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'LOGIN_USER_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchUserLogin