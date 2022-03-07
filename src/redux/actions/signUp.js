// import internal modules
import axios from "axios";

export const SignUpUserRequest = () => {
    return {
        type: 'SIGN_UP_USER_REQUEST'
    }
}
export const SignUpUserResponse = (data) => {
    return {
        type: 'SIGN_UP_USER_RESPONSE',
        payload: data
    }
}
export const SignUpUserError = (error) => {
    return {
        type: 'SIGN_UP_USER_ERROR',
        payload: error
    }
}

export const SignUpUser = (signupData, setLoading, navigate) => {
    return (dispatch) => {
        dispatch(SignUpUserRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/register`,
            data: {
                fullname: signupData.fullname,
                email: signupData.email,
                password: signupData.password
            }
        })
            .then((res) => {
                setLoading(false)
                const resultSignUp = res.data?.message
                dispatch(SignUpUserResponse(resultSignUp))
                alert(resultSignUp)
                navigate("/auth/login")
            })
            .catch((err) => {
                setLoading(false)
                if (err.response !== undefined) {
                    const message = err.response.data?.message
                    dispatch(SignUpUserError(message))
                } else {
                    dispatch(SignUpUserError("Network Error"))
                }
            })
    }
}