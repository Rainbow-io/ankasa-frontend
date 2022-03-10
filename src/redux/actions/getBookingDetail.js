// import internal modules
import axios from 'axios';
import { decodeToken } from 'react-jwt';

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser)

export const GetBookingDetailRequest = () => {
    return {
        type: 'GET_BOOKING_DETAIL_REQUEST'
    }
}
export const GetBookingDetailResponse = (data) => {
    return {
        type: 'GET_BOOKING_DETAIL_RESPONSE',
        payload: data
    }
}
export const GetBookingDetailError = (error) => {
    return {
        type: 'GET_BOOKING_DETAIL_ERROR',
        payload: error
    }
}

export const GetBookingDetail = () => {
    return (dispatch) => {
        dispatch(GetBookingDetailRequest())
        return axios({
            method: 'GET',
            url: `https://ankasa-rainbow.herokuapp.com/booking/list/${userInfo.id}`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const resultTickets = res.data?.data
            dispatch(GetBookingDetailResponse(resultTickets))
        })
        .catch((err) => {
            if (err.response !== undefined) {
                const message = err.response.data?.message
                dispatch(GetBookingDetailError(message))
            } else {
                dispatch(GetBookingDetailError("Network Error"))
            }
        })
    }
}