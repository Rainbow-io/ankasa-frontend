// import internal modules
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { getUserID } from './userByID';

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser)

export const EditBiodataRequest = () => {
    return {
        type: 'EDIT_BIODATA_REQUEST'
    }
}
export const EditBiodataResponse = (data) => {
    return {
        type: 'EDIT_BIODATA_RESPONSE',
        payload: data
    }
}
export const EditBiodataError = (error) => {
    return {
        type: 'EDIT_BIODATA_ERROR',
        payload: error
    }
}

export const EditBiodata = (biodataData, setLoading) => {
    return (dispatch) => {
        dispatch(EditBiodataRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/profile/${userInfo.id}/form`,
            data: {
                fullname: biodataData.fullname,
                email: biodataData.email,
                phone: biodataData.phonenumber,
                city: biodataData.city,
                address: biodataData.address,
                postcode: biodataData.postcode
            },
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            setLoading(false)
            const messagePic = res.data?.message
            dispatch(EditBiodataResponse(messagePic))
            alert(messagePic)
            dispatch((getUserID(userInfo.id)))
        })
        .catch((err) => {
            setLoading(false)
            if (err.response !== undefined) {
                const message = err.response.data?.message
                dispatch(EditBiodataError(message))
            } else {
                dispatch(EditBiodataError("Network Error"))
            }
        })
    }
}