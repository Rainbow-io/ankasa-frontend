import axios from "axios";

const token = localStorage.getItem('token')

export const getUserIDRequest = () => {
    return {
        type: 'GET_USERS_ID_REQUEST'
    }
}
export const getUserIDResponse = (data) => {
    return {
        type: 'GET_USERS_ID_RESPONSE',
        payload: data
    }
}
export const getUserIDError = (error) => {
    return {
        type: 'GET_USERS_ID_ERROR',
        payload: error
    }
}

export const getUserID = (id) => {
    return (dispatch) => {
        dispatch(getUserIDRequest());
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/profile/${id}`,
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                const data = res.data?.data[0];
                dispatch(getUserIDResponse(data));
            })
            .catch((err) => {
                const message = err.message;
                dispatch(getUserIDError(message));
            });
    }
}