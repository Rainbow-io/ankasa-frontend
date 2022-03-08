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

export const PostBooking = (formPassenger, setLoading, navigate) => {
    return (dispatch) => {
        dispatch(PostBookingRequest())
        return axios({
            method: 'POST',
            url: `https://ankasa-rainbow.herokuapp.com/booking/list`,
            data: {
                fullname: formPassenger.fullname,
            }
        })
            .then((res) => {
                setLoading(false)
                const resultPostBooking = res.data?.message
                dispatch(PostBookingResponse(resultPostBooking))
                alert(resultPostBooking)
                navigate("/main/my-booking")
                console.log('BOOOOOOOOOOOOOOK',resultPostBooking);
            })
            .catch((err) => {
                setLoading(false)
                if (err.response !== undefined) {
                    const message = err.response.data?.message
                    dispatch(PostBookingError(message))
                } else {
                    dispatch(PostBookingError("Network Error"))
                }
            })
    }
}