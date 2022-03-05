// import internal modules
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import external modules
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import ModalPic from '../../../components/module/ModalPic';
import './profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const [formProfile, setFormProfile] = useState({
        email: '',
        phonenumber: '',
        username: '',
        city: '',
        address: '',
        postcode: '',
    })

    const [formProfileError, setFormProfileError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModalPic, setShowModalPic] = useState(false)

    const handleChange = (e) => {
        setFormProfile({
            ...formProfile,
            [e.target.name]: e.target.value
        })
    }

    const validateProfile = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Email is invalid";
        }
        if (!values.phonenumber) {
            errors.phonenumber = "Phone number is required";
        } else if (values.phonenumber.length < 11) {
            errors.phonenumber = "Phone number at least 11 digits";
        }
        if (!values.username) {
            errors.username = "Username is required";
        }
        if (!values.city) {
            errors.city = "City is required";
        }
        if (!values.address) {
            errors.address = "Address is required";
        }
        if (!values.postcode) {
            errors.postcode = "Post code is required";
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultValidate = validateProfile(formProfile);
        setFormProfileError(resultValidate);
        handleClick(resultValidate);
    }

    const handleClick = (resultValidate) => {
        if (Object.keys(resultValidate).length === 0) {
            setFormProfileError(false)
            setLoading(true)
            console.log(formProfile)
        }
    }

    const openModal = (param) => {
        setShowModalPic(param)
      }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/auth/login")
    }
    return (
        <Fragment>
            <div className="body-background">
                <div className="d-md-flex px-5 py-5 wrapper-content">
                    <div className="d-none d-md-block bg-white profile-left flex-fill">
                        <div className="px-3 py-5 d-flex flex-column align-items-center profile-left-content">
                            <div className="content-upper text-center">
                                <div className="photo">
                                    <img src={require("../../../assets/mike-kowalski-mybooking.png")} alt="" />
                                </div>
                                <div onClick={()=>openModal(true)} className="px-3 py-2 my-3 select-photo-button">
                                    <div className="fw-bold text-primary">Select Photo</div>
                                </div>
                                <div className="name">
                                    <div className="fw-bold">Mike Kowalski</div>
                                </div>
                                <div className="address">
                                    <div className="text-muted fs-6">Medan, Indonesia</div>
                                </div>
                            </div>
                            <div className="d-none d-md-block my-3 content-middle">
                                <div className="d-flex justify-content-between">
                                    <div className="cards">
                                        <div className="fw-bold">Cards</div>
                                    </div>
                                    <div className="add">
                                        <div className="fw-bold text-primary">+Adds</div>
                                    </div>
                                </div>
                                <div className="bluebox">
                                    <div className="px-3 py-2 bluebox-content">
                                        <div className="bluebox-upper">
                                            <div className="numberscard">
                                                <div className="fw-bold text-white">4441 1235 5512 5551</div>
                                            </div>
                                        </div>
                                        <div className="d-flex bluebox-lower justify-content-between">
                                            <div className="card-brand">
                                                <div className="text-white">X Card</div>
                                            </div>
                                            <div className="balance-current">
                                                <div className="text-white">$ 1,440.2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-lower">
                                <div className="profile d-flex my-3">
                                    <div className="logo-profile me-3">
                                        <img src={require("../../../assets/icons/profile-mybooking.svg").default} alt="" />
                                    </div>
                                    <div>Profile</div>
                                </div>
                                <div className="my-review d-flex">
                                    <div className="logo-myreview me-3">
                                        <img src={require("../../../assets/icons/my-review-bookingdetail.svg").default} alt="" />
                                    </div>
                                    <div>My Review</div>
                                </div>
                                <div className="settings d-flex my-3">
                                    <div className="logo-settings me-3">
                                        <img src={require("../../../assets/icons/settings-mybooking.svg").default} alt="" />
                                    </div>
                                    <div>Settings</div>
                                </div>
                                <div onClick={() => handleLogout()} className="logout d-flex">
                                    <div className="logo-logout me-3">
                                        <img src={require("../../../assets/icons/logout-mybooking.svg").default} alt="" />
                                    </div>
                                    <div>Logout</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block profile-right ms-3 w-100">
                        <div className="bg-white profile-right">
                            <div className="py-3 px-3 profile-right-content">
                                <div className="mb-3 upper-content">
                                    <div className="profile mb-3">
                                        <div className="text-primary">Profile</div>
                                    </div>
                                    <div className="profile-bold">
                                        <div className="fw-bold">Profile</div>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <div className="d-flex w-100">
                                        <div className="contacts w-50 me-3">
                                            <div className="fw-bold mt-3">Contacts</div>
                                            <div className="contacts-form">
                                                <div className="email-form mt-3">
                                                    <div className="text-center my-3 text-primary">{formProfileError.email}</div>
                                                    <div className="text-muted px-3">Email</div>
                                                    <Input
                                                        type="text"
                                                        name="email"
                                                        onChange={handleChange}
                                                        value={formProfile.email}
                                                        className="w-100 border-0 border-bottom border-2 px-3" />
                                                </div>
                                                <div className="phone-form mt-3">
                                                    <div className="text-center my-3 text-primary">{formProfileError.phonenumber}</div>
                                                    <div className="text-muted px-3">Phone Number</div>
                                                    <Input
                                                        type="number"
                                                        name="phonenumber"
                                                        onChange={handleChange}
                                                        value={formProfile.phonenumber}
                                                        className="w-100 border-0 border-bottom px-3" />
                                                </div>
                                                <div className="d-flex mt-5 justify-content-end account-settings">
                                                    <div className="fw-bold text-primary me-3">Account Settings</div>
                                                    <img src={require("../../../assets/icons/arrow-right-profile.svg").default} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="biodata w-50">
                                            <div className="fw-bold mt-3">Biodata</div>
                                            <div className="biodata-form">
                                                <div className="username-form mt-3">
                                                    <div className="text-center my-3 text-primary">{formProfileError.username}</div>
                                                    <div className="text-muted px-3">Username</div>
                                                    <Input
                                                        type="text"
                                                        name="username"
                                                        onChange={handleChange}
                                                        value={formProfile.username}
                                                        className="w-100 border-0 border-bottom px-3" />
                                                </div>
                                                <div className="city-form mt-3">
                                                    <div className="text-center my-3 text-primary">{formProfileError.city}</div>
                                                    <div className="text-muted px-3">City</div>
                                                    <Input
                                                        type="text"
                                                        name="city"
                                                        onChange={handleChange}
                                                        value={formProfile.city}
                                                        className="w-100 border-0 border-bottom px-3" />
                                                </div>
                                                <div className="address-form mt-3">
                                                    <div className="text-center my-3 text-primary">{formProfileError.address}</div>
                                                    <div className="text-muted px-3">Address</div>
                                                    <Input
                                                        type="text"
                                                        name="address"
                                                        onChange={handleChange}
                                                        value={formProfile.address}
                                                        className="w-100 border-0 border-bottom px-3" />
                                                </div>
                                                <div className="username-form mt-3">
                                                    <div className="text-center my-3 text-primary">{formProfileError.postcode}</div>
                                                    <div className="text-muted px-3">Post Code</div>
                                                    <Input
                                                        type="number"
                                                        name="postcode"
                                                        onChange={handleChange}
                                                        value={formProfile.postcode}
                                                        className="w-100 border-0 border-bottom px-3" />
                                                </div>
                                            </div>
                                            <div className="button-wrapper d-flex justify-content-end">
                                                <Button onClick={handleSubmit} className="my-5 py-3 w-25 text-center text-white fw-bold btn-save">Save</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Version */}

                    <div className="d-md-none bg-white profile-upper-mobile my-5">
                        <div className="px-3 py-5 d-flex flex-column align-items-center profile-left-content">
                            <div className="content-upper text-center">
                                <div className="photo">
                                    <img src={require("../../../assets/mike-kowalski-mybooking.png")} alt="" />
                                </div>
                                <div className="px-3 py-2 my-3 select-photo-button">
                                    <div className="fw-bold text-primary">Select Photo</div>
                                </div>
                                <div className="name">
                                    <div className="fw-bold">Mike Kowalski</div>
                                </div>
                                <div className="address">
                                    <div className="text-muted fs-6">Medan, Indonesia</div>
                                </div>
                            </div>
                            <div className="my-3 content-middle w-50 d-md-none">
                                <div className="d-flex justify-content-between">
                                    <div className="cards">
                                        <div className="fw-bold">Cards</div>
                                    </div>
                                    <div className="add">
                                        <div className="fw-bold text-primary">+Adds</div>
                                    </div>
                                </div>
                                <div className="bluebox">
                                    <div className="px-3 py-2 bluebox-content">
                                        <div className="bluebox-upper">
                                            <div className="numberscard">
                                                <div className="fw-bold text-white">4441 1235 5512 5551</div>
                                            </div>
                                        </div>
                                        <div className="d-flex bluebox-lower justify-content-between">
                                            <div className="card-brand">
                                                <div className="text-white">X Card</div>
                                            </div>
                                            <div className="balance-current">
                                                <div className="text-white">$ 1,440.2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-lower">
                                <div className="profile d-flex my-3">
                                    <div className="logo-profile me-3">
                                        <img src={require("../../../assets/icons/profile-mybooking.svg").default} alt="" />
                                    </div>
                                    <div>Profile</div>
                                </div>
                                <div className="my-review d-flex">
                                    <div className="logo-myreview me-3">
                                        <img src={require("../../../assets/icons/my-review-bookingdetail.svg").default} alt="" />
                                    </div>
                                    <div>My Review</div>
                                </div>
                                <div className="settings d-flex my-3">
                                    <div className="logo-settings me-3">
                                        <img src={require("../../../assets/icons/settings-mybooking.svg").default} alt="" />
                                    </div>
                                    <div>Settings</div>
                                </div>
                                <div onClick={() => handleLogout()} className="logout d-flex">
                                    <div className="logo-logout me-3">
                                        <img src={require("../../../assets/icons/logout-mybooking.svg").default} alt="" />
                                    </div>
                                    <div>Logout</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white d-block d-md-none profile-down-mobile">
                        <div className="px-3 py-5 profile-down-content">
                            <div className="profile-upper">
                                <div className="profile">
                                    <div className="text-primary">Profile</div>
                                </div>
                                <div className="profile-bold">
                                    <div className="fw-bold">Profile</div>
                                </div>
                            </div>
                            <div className="contacts w-100 me-3">
                                <div className="fw-bold mt-3">Contacts</div>
                                <div className="contacts-form">
                                    <div className="email-form mt-3">
                                        <div className="text-center my-3 text-primary">{formProfileError.email}</div>
                                        <div className="text-muted px-3">Email</div>
                                        <Input
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            value={formProfile.email}
                                            className="w-100 border-0 border-bottom border-2 px-3" />
                                    </div>
                                    <div className="phone-form mt-3">
                                        <div className="text-center my-3 text-primary">{formProfileError.phonenumber}</div>
                                        <div className="text-muted px-3">Phone Number</div>
                                        <Input
                                            type="number"
                                            name="phonenumber"
                                            onChange={handleChange}
                                            value={formProfile.phonenumber}
                                            className="w-100 border-0 border-bottom px-3" />
                                    </div>
                                    <div className="d-flex mt-5 justify-content-end account-settings">
                                        <div className="fw-bold text-primary me-3">Account Settings</div>
                                        <img src={require("../../../assets/icons/arrow-right-profile.svg").default} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="biodata w-100">
                                <div className="fw-bold mt-3">Biodata</div>
                                <div className="biodata-form">
                                    <div className="username-form mt-3">
                                        <div className="text-center my-3 text-primary">{formProfileError.username}</div>
                                        <div className="text-muted px-3">Username</div>
                                        <Input
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            value={formProfile.username}
                                            className="w-100 border-0 border-bottom px-3" />
                                    </div>
                                    <div className="city-form mt-3">
                                        <div className="text-center my-3 text-primary">{formProfileError.city}</div>
                                        <div className="text-muted px-3">City</div>
                                        <Input
                                            type="text"
                                            name="city"
                                            onChange={handleChange}
                                            value={formProfile.city}
                                            className="w-100 border-0 border-bottom px-3" />
                                    </div>
                                    <div className="address-form mt-3">
                                        <div className="text-center my-3 text-primary">{formProfileError.address}</div>
                                        <div className="text-muted px-3">Address</div>
                                        <Input
                                            type="text"
                                            name="address"
                                            onChange={handleChange}
                                            value={formProfile.address}
                                            className="w-100 border-0 border-bottom px-3" />
                                    </div>
                                    <div className="username-form mt-3">
                                        <div className="text-center my-3 text-primary">{formProfileError.postcode}</div>
                                        <div className="text-muted px-3">Post Code</div>
                                        <Input
                                            type="number"
                                            name="postcode"
                                            onChange={handleChange}
                                            value={formProfile.postcode}
                                            className="w-100 border-0 border-bottom px-3" />
                                    </div>
                                </div>
                                <div className="button-wrapper d-flex justify-content-end">
                                    <Button onClick={handleSubmit} className="my-5 py-3 w-25 text-center text-white fw-bold btn-save">Save</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModalPic === true ? (
                <ModalPic openModal={openModal}></ModalPic>
            ) : ''}
        </Fragment>
    )
}

export default Profile