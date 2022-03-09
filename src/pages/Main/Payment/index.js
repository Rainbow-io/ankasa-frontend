// import internal modules
import React from 'react';


// import external modules;
import Button from '../../../components/base/Button';
import './payment.css';


const Payment = () => {
    return (
        <div className="body-background">
            <div className="d-md-flex px-5 py-5 wrapper-content">
                <div className="d-none d-md-block bg-white profile-left flex-fill">
                    <div className="px-3 py-3 d-flex flex-column profile-left-content">
                        <div className="review-booking">
                            <div className="fw-bold mb-3">Review Booking</div>
                        </div>
                        <div className="your-trip">
                            <div className="text-muted mb-3">Your Trip:</div>
                        </div>
                        <div className="detail-trip">
                            <div>Monday, 20 July '20 - 12:33</div>
                            <div className="d-flex destination">
                                <div className="fw-bold">IDN</div>
                                <img className="px-3" src={require("../../../assets/icons/to-plane-bookingdetail.svg").default} alt="" />
                                <div className="fw-bold">JPN</div>
                            </div>
                        </div>
                        <div className="mt-5 d-none d-md-block my-3 content-middle">
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
                    </div>
                    <Button className="btn-pay text-white fw-bold px-3 py-3">Top Up</Button>
                </div>
                <div className="d-none d-md-block profile-right ms-3 w-100">
                    <div className="bg-white profile-right">
                        <div className="py-3 px-3 profile-right-content">
                            <div className="mb-3 upper-content">
                                <div className="profile mb-3">
                                    <div className="text-primary">Price Detail</div>
                                </div>
                                <div className="price-details-bold">
                                    <div className="fw-bold">Price Details</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between flight">
                                <div className="text-muted fw-bold">Flight</div>
                                <div className="price">RP. 5000000</div>
                            </div>
                            <div className="d-flex justify-content-between baggage">
                                <div className="text-muted fw-bold">Baggage</div>
                                <div className="text-muted fw-bold">Free</div>
                            </div>
                            <hr />
                            <div className="lower-content">
                                <div className="d-flex justify-content-between total">
                                    <div className="fw-bold">Total</div>
                                    <div className="fw-bold">Rp. 5000000</div>
                                </div>
                                <Button className="btn-pay text-white fw-bold px-3 py-3">Pay Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment