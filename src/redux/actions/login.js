// import internal modules
import axios from 'axios';

export const LoginUserRequest = () => {
    return {
        type: 'LOGIN_USER_REQUEST'
    }
}
export const LoginUserResponse = (data) => {
    return {
        type: 'LOGIN_USER_RESPONSE',
        payload: data
    }
}
export const LoginUserError = (error) => {
    return {
        type: 'LOGIN_USER_ERROR',
        payload: error
    }
}

export const LoginUser = (loginData, setLoading, navigate) => {
    return (dispatch) => {
        dispatch(LoginUserRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/login`,
            data: {
                email: loginData.email,
                password: loginData.password
            }
        })
        .then((res) => {
            setLoading(false)
            const tokenUser = res.data?.data.token
            const resultLogin = res.data?.message
            localStorage.setItem('token', tokenUser)
            dispatch(LoginUserResponse(resultLogin))
            navigate("/main/explore")
        })
        .catch((err) => {
            setLoading(false)
            if (err.response !== undefined) {
                const message = err.response.data.message
                dispatch(LoginUserError(message))
            } else {
                dispatch(LoginUserError("Network Error"))
            }
        })
    }
}