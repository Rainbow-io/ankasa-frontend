// import internal modules
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { getUserID } from './userByID';

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser)

export const EditPicLinkRequest = () => {
    return {
        type: 'EDIT_PIC_LINK_REQUEST'
    }
}
export const EditPicLinkResponse = (data) => {
    return {
        type: 'EDIT_PIC_LINK_RESPONSE',
        payload: data
    }
}
export const EditPicLinkError = (error) => {
    return {
        type: 'EDIT_PIC_LINK_ERROR',
        payload: error
    }
}

export const EditPicLink = (PicLinkData, setLoading, openModal) => {
    return (dispatch) => {
        dispatch(EditPicLinkRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/profile/${userInfo.id}/picture/link`,
            data: {
                photo: PicLinkData.pictureLink
            }
        })
        .then((res) => {
            setLoading(false)
            const messagePic = res.data?.message
            dispatch(EditPicLinkResponse(messagePic))
            alert(messagePic)
            openModal(false)
            dispatch((getUserID(userInfo.id)))
        })
        .catch((err) => {
            setLoading(false)
            if (err.response !== undefined) {
                const message = err.response.data?.message
                dispatch(EditPicLinkError(message))
            } else {
                dispatch(EditPicLink("Network Error"))
            }
        })
    }
}