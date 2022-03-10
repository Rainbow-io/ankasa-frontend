const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPostPay = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POST_PAY_REQUEST':
            return {...state, loading: true};
        case 'POST_PAY_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'POST_PAY_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchPostPay