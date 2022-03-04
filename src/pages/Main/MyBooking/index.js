// import internal modules
import React from 'react';

// import external modules
import './mybooking.css'

const MyBooking = () => {
    return (
        <div className="body-background">
            <div className="d-flex px-5 py-5 wrapper-content">
                <div className="d-none d-lg-block bg-white profile-left">
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
                        <div className="my-3 content-middle">
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
                            <div class="my-review d-flex">
                                <div className="logo-myreview me-3">
                                    <img src={require("../../../assets/icons/my-review-bookingdetail.svg").default} alt="" />
                                </div>
                                <div>My Review</div>
                            </div>
                            <div class="settings d-flex my-3">
                                <div className="logo-settings me-3">
                                    <img src={require("../../../assets/icons/settings-mybooking.svg").default} alt="" />
                                </div>
                                <div>Settings</div>
                            </div>
                            <div class="logout d-flex">
                                <div className="logo-logout me-3">
                                    <img src={require("../../../assets/icons/logout-mybooking.svg").default} alt="" />
                                </div>
                                <div>Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block profile-right ms-3 w-100">
                    <div className="bg-white profile-right-upper">
                        <div className="py-3 px-3 profile-right-upper-content">
                            <div className="mybooking mb-3">
                                <div className="text-primary">My Booking</div>
                            </div>
                            <div className="d-flex justify-content-between mybooking-order">
                                <div className="mybooking-bold">
                                    <div className="fw-bold">My Booking</div>
                                </div>
                                <div className="order-history">
                                    <div className="text-primary fw-bold">Order history</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="my-3 bg-white profile-right-lower">
                        <div className="px-3 py-3 profile-right-middle-content">
                            <div className="upper">
                                <div className="time-section">
                                    <div className="time-detail">
                                        <div>Monday, 20 July '20 - 12:33</div>
                                    </div>
                                    <div className="fromto-detail d-flex">
                                        <div className="fw-bold">IDN</div>
                                        <img className="px-3" src={require("../../../assets/icons/to-plane-mybooking.svg").default} alt="" />
                                        <div className="fw-bold">JPN</div>
                                    </div>
                                    <div className="airline-detail">
                                        <div className="text-muted">Garuda Indonesia, AB-221</div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex lower justify-content-around">
                                <div className="me-5 status text-muted fw-bold">Status</div>
                                <div className="px-3 py-2 btn-status-payment fw-bold text-white">Waiting For Payment</div>
                                <div className="ms-5 view-details text-primary fw-bold flex-grow-1 text-end">View Details<span><img className="px-1" src={require("../../../assets/icons/btndown-mybooking.svg").default} alt="" /></span></div>
                            </div>
                        </div>
                    </div>

                    <div class="my-3 bg-white profile-right-lower">
                        <div className="px-3 py-3 profile-right-middle-content">
                            <div className="upper">
                                <div className="time-section">
                                    <div className="time-detail">
                                        <div>Monday, 20 July '20 - 12:33</div>
                                    </div>
                                    <div className="fromto-detail d-flex">
                                        <div className="fw-bold">IDN</div>
                                        <img className="px-3" src={require("../../../assets/icons/to-plane-mybooking.svg").default} alt="" />
                                        <div className="fw-bold">JPN</div>
                                    </div>
                                    <div className="airline-detail">
                                        <div className="text-muted">Garuda Indonesia, AB-221</div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex lower justify-content-around">
                                <div className="me-5 status text-muted fw-bold">Status</div>
                                <div className="px-3 py-2 btn-status-issued fw-bold text-white">Eticket Issued</div>
                                <div className="ms-5 view-details text-primary fw-bold flex-grow-1 text-end">View Details<span><img className="px-1" src={require("../../../assets/icons/btndown-mybooking.svg").default} alt="" /></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className="d-md-none w-100">
                    <div className="content-upper">
                        <div className="my-booking-blue">
                            <div className="text-primary">My Booking</div>
                        </div>
                        <div className="d-flex justify-content-between my-booking-black">
                            <div className="fw-bold">My Booking</div>
                            <div className="fw-bold text-primary">Order History</div>
                        </div>
                    </div>
                    <div className="bg-white content-middle mt-3">
                        <div className="px-3 py-3 inner-box-content">
                            <div className="content-upper">
                                <div className="time-detail">
                                    <div>Monday, 20 July 20 - 12:33</div>
                                </div>
                                <div className="d-flex py-3 destination-detail">
                                    <div className="fw-bold">IDN</div>
                                    <img className="px-3" src={require("../../../assets/icons/to-plane-mybooking.svg").default} alt="" />
                                    <div className="fw-bold">JPN</div>
                                </div>
                                <div className="airline-detail">
                                    <div className="text-muted">Garuda Indonesia, AB-221</div>
                                </div>
                            </div>
                            <hr />
                            <div className="content-lower">
                                <div className="d-flex justify-content-between status-button">
                                    <div className="pt-1 text-muted fw-bold">Status</div>
                                    <div className="px-3 py-2 btn-status-payment fw-bold text-white">Waiting For Payment</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white content-middle mt-3">
                        <div className="px-3 py-3 inner-box-content">
                            <div className="content-upper">
                                <div className="time-detail">
                                    <div>Monday, 20 July 20 - 12:33</div>
                                </div>
                                <div className="d-flex py-3 destination-detail">
                                    <div className="fw-bold">IDN</div>
                                    <img className="px-3" src={require("../../../assets/icons/to-plane-mybooking.svg").default} alt="" />
                                    <div className="fw-bold">JPN</div>
                                </div>
                                <div className="airline-detail">
                                    <div className="text-muted">Garuda Indonesia, AB-221</div>
                                </div>
                            </div>
                            <hr />
                            <div className="content-lower">
                                <div className="d-flex justify-content-between status-button">
                                    <div className="pt-1 text-muted fw-bold">Status</div>
                                    <div className="px-3 py-2 btn-status-issued fw-bold text-white">Eticket Issued</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBooking