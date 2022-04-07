import axios from "axios";

const token = localStorage.getItem('token')

export const getUsersRequest = () => {
    return {
        type: 'GET_USERS_REQUEST'
    }
}
export const getUsersResponse = (data) => {
    return {
        type: 'GET_USERS_RESPONSE',
        payload: data
    }
}
export const getUsersError = (error) => {
    return {
        type: 'GET_USERS_ERROR',
        payload: error
    }
}

export const getUsers = () => (dispatch) => {
    dispatch(getUsersRequest());
    return axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL_BACKEND}/profile`,
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((res) => {
            const data = res.data?.data;
            dispatch(getUsersResponse(data));
        })
        .catch((err) => {
            const message = err.message;
            dispatch(getUsersError(message));
        });
}