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

export const PostFlight = ({formFlight, navigate}) => {
    return (dispatch) => {
        dispatch(PostFlightRequest())
        return axios({
            method: 'POST',
            url: `https://ankasa-rainbow.herokuapp.com/booking/insert`,
            data: formFlight[0]
        })
        .then((res) => {
            const resultPostSuccess = res.data?.message
            dispatch(PostFlightResponse(resultPostSuccess))
            navigate(`/flight-detail/${formFlight[0].id}`)
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