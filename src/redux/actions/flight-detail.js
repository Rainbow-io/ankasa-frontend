import axios from "axios";

export const getFlightDetailRequest = () => {
    return {
        type: 'FLIGHTDETAIL_REQUEST'
    }
}
export const getFlightDetailResponse = (data) => {
    return {
        type: 'FLIGHTDETAIL_RESPONSE',
        payload: data
    }
}
export const getFlightDetailError = (error) => {
    return {
        type: 'FLIGHTDETAIL_ERROR',
        payload: error
    }
}

export const getFlightDetail = () => (dispatch) => {
    dispatch(getFlightDetailRequest());
    return axios({
        method: 'GET',
        url: `https://ankasa-rainbow.herokuapp.com/booking/detail/9`
    })
        .then((res) => {
            const data = res.data.data;
            dispatch(getFlightDetailResponse(data));
            console.log('resssssssssssssssssssssssss',res)
            console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaa',data)
        })
        .catch((err) => {
            const message = err.message;
            dispatch(getFlightDetailError(message));
        });
}