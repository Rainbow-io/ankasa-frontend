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

export const getFlights = (form) => (dispatch) => {
    dispatch(getFlightsRequest());
    return axios({
        method: 'POST',
        url: `${process.env.REACT_APP_URL_BACKEND}/list-flight`,
        data: {arrival: form.arrival, departure: form.departure, class: form.class}
    })
        .then((res) => {
            const data = res.data?.data;
            console.log(res);
            dispatch(getFlightsResponse(data));
            localStorage.setItem('qty', form.qty)
        })
        .catch((err) => {
            const message = err.message;
            dispatch(getFlightsError(message));
        });
}