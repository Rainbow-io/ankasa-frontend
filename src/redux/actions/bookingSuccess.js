// import internal modules
import axios from 'axios';

const tokenUser = localStorage.getItem('token');

export const GetBookingSuccessRequest = () => {
    return {
        type: 'GET_BOOKING_SUCCESS_REQUEST'
    }
}
export const GetBookingSuccessResponse = (data) => {
    return {
        type: 'GET_BOOKING_SUCCESS_RESPONSE',
        payload: data
    }
}
export const GetBookingSuccessError = (error) => {
    return {
        type: 'GET_BOOKING_SUCCESS_ERROR',
        payload: error
    }
}

export const GetBookingSuccess = (idBooking, passenger) => {
    return (dispatch) => {
        dispatch(GetBookingSuccessRequest())
        return axios({
            method: 'GET',
            url: `https://ankasa-rainbow.herokuapp.com/booking/list/success/${idBooking }`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const [resultTicketsSuccess] = res.data?.data
            dispatch(GetBookingSuccessResponse(resultTicketsSuccess))
        })
        .catch((err) => {
            if (err.response !== undefined) {
                const message = err.response.data?.message
                dispatch(GetBookingSuccessError(message))
            } else {
                dispatch(GetBookingSuccessError("Network Error"))
            }
        })
    }
}