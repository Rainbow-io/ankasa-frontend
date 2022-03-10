const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchEditBiodata = (state = initialState, action={}) => {
    switch (action.type) {
        case 'EDIT_BIODATA_REQUEST':
            return {...state, loading: true};
        case 'EDIT_BIODATA_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'EDIT_BIODATA_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchEditBiodata