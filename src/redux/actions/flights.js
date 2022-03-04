import axios from "axios";

export const getFlightsRequest = () => {
    return {
        type: 'FLIGHTS_REQUEST'
    }
}
export const getFlightsResponse = (data) => {
    return {
        type: 'FLIGHTS_RESPONSE',
        payload: data
    }
}
export const getFlightsError = (error) => {
    return {
        type: 'FLIGHTS_ERROR',
        payload: error
    }
}

export const getFlights = () => (dispatch) => {
    dispatch(getFlightsRequest());
    return axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL_BACKEND}/list-flight`,
    })
        .then((res) => {
            const data = res.data?.data;
            console.log(res);
            dispatch(getFlightsResponse(data));
        })
        .catch((err) => {
            const message = err.message;
            dispatch(getFlightsError(message));
        });
}