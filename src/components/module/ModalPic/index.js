// import internal modules
import React, { useState } from 'react';

// import external modules
import Button from '../../../components/base/Button';
import './modalpic.css'

const ModalPic = ({ openModal }) => {

    const [loading, setLoading] = useState(false);

    const [formDataPicTemp, setFormDataPicTemp] = useState({
        picture: ""
    })

    const [formPicError, setFormPicError] = useState(false);

    const formDataPic = new FormData()
    formDataPic.append("picture", formDataPicTemp.picture[0])

    const validatePic = (picture) => {
        const errors = {};
        if (picture.length === 0) {
            errors.picture = "Please select a picture";
            return errors;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultValidate = validatePic(formDataPicTemp.picture);
        setFormPicError(resultValidate);
        handleClick(resultValidate)
    }

    const handleClick = (resultValidate) => {
        if (resultValidate === undefined) {
            setFormPicError(false)
            setLoading(true)
            console.log(formDataPic)
        }
    }

    return (
        <div className="modal-wrapper">
            <div className="modal-inner">
                <div className="d-flex">
                    <div className="fw-bold text-muted flex-grow-1">Add Picture</div>
                    <div className='close-button' onClick={() => openModal(false)}>X</div>
                </div>
                {formDataPicTemp?.url ? (
                    <>
                        <hr />
                        <div className="text-muted mb-3">The preview of your updated profile picture:</div>
                        <div className="text-center">
                            <img className="rounded-pill" src={formDataPicTemp.url ? formDataPicTemp.url : ''} width={100} height={100} alt="" />
                        </div>
                    </>
                ) : ''}
                <div className="my-3 text-muted">Browse a Profile Picture</div>
                <div className="text-primary">{formDataPicTemp.url ? '' : formPicError.picture}</div>
                <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column">
                    <input type="file" onChange={(e) => setFormDataPicTemp({ ...formDataPicTemp, picture: e.currentTarget.files, url: URL.createObjectURL(e.target.files[0]) })} /><br />
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button isLoading={loading} className="d-flex jumy-3 px-3 py-2 btn-upload text-white fw-bold" type="submit">Upload</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ModalPic