// import internal modules
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import external modules
import { GetBookingDetail } from '../../../redux/actions/getBookingDetail';
import SidebarProfile from '../../../components/module/SidebarProfile';
import ModalPic from '../../../components/module/ModalPic';
import './mybooking.css'

const MyBooking = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dataTickets = useSelector((state) => state.GetBookingDetail)
    const [showModalPic, setShowModalPic] = useState(false);

    useEffect(() => {
        dispatch((GetBookingDetail()))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleNavigate = (status, idBooking) => {
        if (status === 'success') {
            navigate(`/main/booking-detail/${idBooking}`)
        } else {
            navigate(`/main/payment/${idBooking}`)
        }
    }

    const openModal = (param) => {
        setShowModalPic(param)
    }

    return (
        <Fragment>

            <div className="body-background">
                <div className="d-flex px-5 py-5 wrapper-content">
                    <SidebarProfile openModal={openModal} />
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
                        {dataTickets.data?.map((item, index) => (
                            <div className="my-3 bg-white profile-right-lower" key={index}>
                                <div className="px-3 py-3 profile-right-middle-content">
                                    <div className="upper">
                                        <div className="time-section">
                                            <div className="time-detail">
                                                <div>{item.departure}</div>
                                                <div><span>{item.date} </span><span className="fw-bold">{item.departure_time}</span> </div>
                                            </div>
                                            <div className="fromto-detail d-flex">
                                                <div className="fw-bold">{item.departure}</div>
                                                <img className="px-3" src={require("../../../assets/icons/to-plane-mybooking.svg").default} alt="" />
                                                <div className="fw-bold">{item.arrival}</div>
                                            </div>
                                            <div className="airline-detail">
                                                <div className="text-muted">{item.airline}</div>
                                                <div className="text-muted">{item.list_passenger} passengers</div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex lower justify-content-around">
                                        <div className="me-5 status text-muted fw-bold">Status</div>
                                        {
                                            item.status === 'success' ?
                                                (<div className="px-3 py-2 btn-status-issued fw-bold text-white">{item.status}</div>) : (<div className="px-3 py-2 btn-status-payment fw-bold text-white">{item.status}</div>)

                                        }
                                        <div className="ms-5 view-details text-primary fw-bold flex-grow-1 text-end" onClick={() => handleNavigate(item.status, item.id)}>View Details<span><img className="px-1" src={require("../../../assets/icons/btndown-mybooking.svg").default} alt="" /></span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
            {showModalPic === true ? (
                <ModalPic openModal={openModal}></ModalPic>
            ) : ''}
        </Fragment>

    )
}

export default MyBooking