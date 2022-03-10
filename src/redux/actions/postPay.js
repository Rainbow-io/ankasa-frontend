// import internal modules
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { getUserID } from './userByID';

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser)

export const PostPayRequest = () => {
    return {
        type: 'POST_PAY_REQUEST'
    }
}
export const PostPayResponse = (data) => {
    return {
        type: 'POST_PAY_RESPONSE',
        payload: data
    }
}
export const PostPayError = (error) => {
    return {
        type: 'POST_PAY_ERROR',
        payload: error
    }
}

export const PostPay = (payData, setLoading, navigate, idBooking) => {
    return (dispatch) => {
        dispatch(PostPayRequest())
        return axios({
            method: 'PUT',
            url: `https://ankasa-rainbow.herokuapp.com/booking/list/pay/${idBooking}`,
            data: {
                price: payData
            }
        })
        .then((res) => {
            setLoading(false)
            const messagePay = res.data?.message
            dispatch(PostPayResponse(messagePay))
            alert("Transaction Success")
            navigate("/main/my-booking")
        })
        .catch((err) => {
            setLoading(false)
            if (err.response !== undefined) {
                const message = err.response.data?.message
                dispatch(PostPayError(message))
            } else {
                dispatch(PostPayError("Network Error"))
            }
        })
    }
}