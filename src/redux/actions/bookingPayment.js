// import internal modules
import axios from 'axios';
import { decodeToken } from 'react-jwt';

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser)

export const GetBookingPaymentRequest = () => {
    return {
        type: 'GET_BOOKING_PAYMENT_REQUEST'
    }
}
export const GetBookingPaymentResponse = (data) => {
    return {
        type: 'GET_BOOKING_PAYMENT_RESPONSE',
        payload: data
    }
}
export const GetBookingPaymentError = (error) => {
    return {
        type: 'GET_BOOKING_PAYMENT_ERROR',
        payload: error
    }
}

export const GetBookingPayment = (idBooking) => {
    return (dispatch) => {
        dispatch(GetBookingPaymentRequest())
        return axios({
            method: 'GET',
            url: `https://ankasa-rainbow.herokuapp.com/booking/list/payment/${idBooking }`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const [resultTicketsSuccess] = res.data?.data
            dispatch(GetBookingPaymentResponse(resultTicketsSuccess))
        })
        .catch((err) => {
            if (err.response !== undefined) {
                const message = err.response.data?.message
                dispatch(GetBookingPaymentError(message))
            } else {
                dispatch(GetBookingPaymentError("Network Error"))
            }
        })
    }
}