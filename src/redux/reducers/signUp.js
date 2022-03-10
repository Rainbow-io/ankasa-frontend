const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchUserSignUp = (state = initialState, action={}) => {
    switch (action.type) {
        case 'SIGN_UP_USER_REQUEST':
            return {...state, loading: true};
        case 'SIGN_UP_USER_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'SIGN_UP_USER_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchUserSignUp