// import internal modules
import axios from 'axios';

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

export const PostPay = (payData, setLoading, navigate, idBooking, tokenUser) => {
    return (dispatch) => {
        dispatch(PostPayRequest())
        return axios({
            method: 'PUT',
            url: `https://ankasa-rainbow.herokuapp.com/booking/list/pay/${idBooking}`,
            data: {
                price: payData
            },
            headers : {Authorization :  `Bearer ${tokenUser}`}
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