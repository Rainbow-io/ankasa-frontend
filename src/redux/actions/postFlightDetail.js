// import internal modules
import axios from 'axios';

export const PostFlightRequest = () => {
    return {
        type: 'POST_FLIGHT_REQUEST'
    }
}
export const PostFlightResponse = (data) => {
    return {
        type: 'POST_FLIGHT_RESPONSE',
        payload: data
    }
}
export const PostFlightError = (error) => {
    return {
        type: 'POST_FLIGHT_ERROR',
        payload: error
    }
}

export const PostFlight = ({ formFlight, navigate, token }) => {
    return (dispatch) => {
        dispatch(PostFlightRequest())
        return axios({
            method: 'POST',
            url: `https://ankasa-rainbow.herokuapp.com/booking/insert`,
            data: formFlight[0],
            headers : {Authorization :  `Bearer ${token}`}
        })
            .then((res) => {
                const resultPostSuccess = res.data?.message
                dispatch(PostFlightResponse(resultPostSuccess))
                navigate(`/main/flight-detail/${formFlight[0].id}`)
            })
            .catch((err) => {
                if (err.response !== undefined) {
                    const message = err.response.data?.message
                    dispatch(PostFlightError(message))
                } else {
                    dispatch(PostFlightError("Network Error"))
                }
            })
    }
}