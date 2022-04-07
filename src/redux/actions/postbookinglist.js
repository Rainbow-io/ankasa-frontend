// import internal modules
import axios from "axios";

export const PostBookingRequest = () => {
    return {
        type: 'POSTBOOKING_REQUEST'
    }
}
export const PostBookingResponse = (data) => {
    return {
        type: 'POSTBOOKING_RESPONSE',
        payload: data
    }
}
export const PostBookingError = (error) => {
    return {
        type: 'POSTBOOKING_ERROR',
        payload: error
    }
}

export const PostBooking = (formPassenger, navigate, token) => {
    return (dispatch) => {
        dispatch(PostBookingRequest())
        return axios({
            method: 'POST',
            url: `https://ankasa-rainbow.herokuapp.com/booking/list`,
            data: formPassenger,
            headers : {Authorization :  `Bearer ${token}`}
        })
            .then((res) => {
                const resultPostBooking = res.data?.message
                dispatch(PostBookingResponse(resultPostBooking))
                alert("Success Add to Payment")
                navigate("/main/my-booking")
            })
            .catch((err) => {
                if (err.response !== undefined) {
                    const message = err.response.data?.message
                    dispatch(PostBookingError(message))
                } else {
                    dispatch(PostBookingError("Network Error"))
                }
            })
    }
}