const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchEditPicLink = (state = initialState, action={}) => {
    switch (action.type) {
        case 'EDIT_PIC_LINK_REQUEST':
            return {...state, loading: true};
        case 'EDIT_PIC_LINK_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'EDIT_PIC_LINK_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchEditPicLink