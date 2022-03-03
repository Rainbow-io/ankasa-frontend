// import internal modules
import React from 'react';

// import external modules
import './bookingdetail.css'

const BookingDetail = () => {
    return (
        <div className="d-flex justify-content-center card-background">
            <div className="my-5 bg-white card-white w-50">
                <div className="mx-5 my-5 content-inner">
                    <div className="d-flex justify-content-between mb-5">
                        <div className="fw-bold">Booking Pass</div>
                        <img src={require("../../../assets/icons/icon-option-bookingdetail.svg").default} alt="icon-option-booking detail" />
                    </div>
                    <div className="d-flex ticket-inner">
                        <div className="border ticket-border-left">
                            <div className='px-3 py-3 ticket-content-left'>
                                <div className="d-flex airline-info">
                                    <img src={require("../../../assets/icons/garuda-indonesia-bookingdetail.svg").default} alt="garuda-indonesia-bookingdetail" />
                                    <div className="fw-bold fs-3 px-5">IDN</div>
                                    <img className="mb-1" src={require("../../../assets/icons/to-plane-bookingdetail.svg").default} alt="to-plane-bookingdetail" />
                                    <div className="fw-bold fs-3 px-5">JPN</div>
                                </div>
                                <div className="detail-info mt-5">
                                    <div className="d-flex detail-info-inner">
                                        <div className="left">
                                            <div className="code mb-3">
                                                <div className="text-muted">Code</div>
                                                <div>AB-221</div>
                                            </div>
                                            <div className="terminal mb-3">
                                                <div className="text-muted">Terminal</div>
                                                <div>A</div>
                                            </div>
                                            <div className="departure">
                                                <div className="text-muted">Departure</div>
                                                <div>Monday, 20 July '20 - 12:33</div>
                                            </div>
                                        </div>
                                        <div className="kanan">
                                            <div className="class mb-3">
                                                <div className="text-muted">Class</div>
                                                <div>Economy</div>
                                            </div>
                                            <div className="gate">
                                                <div className="text-muted">Gate</div>
                                                <div>221</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex border ticket-border-right w-100 justify-content-center">
                            <div className="align-self-center ticket-content-right">
                                <img src={require("../../../assets/icons/barcode-bookingdetail.svg").default} alt="barcode-bookingdetail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetail