// import internal modules
import React from 'react';

// import external modules
import './bookingdetail.css'

const BookingDetail = () => {
    return (
        <div className="card-background min-vh-100">
            <div className="card-inner bg-white">
                <div className="m-5 ticket-left">
                    <div className="d-flex justify-content-between">
                        <div className="fw-bold">Booking Detail</div>
                        <img src={require("../../../assets/icons/icon-option-bookingdetail.svg").default} alt="icon-option-bookingdetail" />
                    </div>
                    <div className="d-flex mt-5 justify-content-between">
                        <div className="border-inner">
                            <div className="d-flex p-3">
                                <img src={require("../../../assets/icons/garuda-indonesia-bookingdetail.svg").default} alt="icon-garuda-indonesoa-bookingdetail" />
                                <div className="fw-bold fs-3 mx-5">IDN</div>
                                <img className="pb-3" src={require("../../../assets/icons/to-plane-bookingdetail.svg").default} alt="to-plane-bookingdetail" />
                                <div className="fw-bold fs-3 mx-5">JPN</div>
                            </div>
                            <div className="d-flex p-3">
                                <div className="inner-detail me-5">
                                    <div className="text-muted">Code</div>
                                    <div>AB-221</div>
                                </div>
                                <div className="inner-detail ms-5">
                                    <div className="text-muted">Class</div>
                                    <div>Economy</div>
                                </div>
                            </div>
                            <div className="d-flex p-3">
                                <div className="inner-detail me-5">
                                    <div className="text-muted">Terminal</div>
                                    <div>A</div>
                                </div>
                                <div className="inner-detail ms-5">
                                    <div className="text-muted">Gate</div>
                                    <div>221</div>
                                </div>
                            </div>
                            <div className="d-flex p-3">
                                <div className="inner-detail me-5">
                                    <div className="text-muted">Departure</div>
                                    <div>Monday, 20 July '20 - 12:33</div>
                                </div>
                            </div>
                        </div>
                        <div className="border-barcode p-5">
                            <img className="mt-5" src={require("../../../assets/icons/barcode-bookingdetail.svg").default} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetail