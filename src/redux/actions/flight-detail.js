import axios from "axios";
const token = localStorage.getItem('token')
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

export const getFlightDetail = (id) => (dispatch) => {
    dispatch(getFlightDetailRequest());
    return axios({
        method: 'GET',
        url: `https://ankasa-rainbow.herokuapp.com/booking/detail/${id}`,
        headers: {Authorization : `Bearer ${token}`}
    })
        .then((res) => {
            const data = res.data?.data;
            dispatch(getFlightDetailResponse(data));
        })
        .catch((err) => {
            const message = err.message;
            dispatch(getFlightDetailError(message));
        });
}