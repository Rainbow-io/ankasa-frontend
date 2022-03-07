// import internal modules
import React from 'react';

// import external modules
import './notification.css';

const BookingDetail = () => {
    return (
        <div className="card-background">
            <div className="d-none d-lg-flex justify-content-center">
                <div className="my-5 bg-white card-white w-50">
                    <div className="mx-5 my-5 notification-upper">
                        <div className="notification-blue">
                            <div className="text-primary">Notifications</div>
                        </div>
                        <div className="d-flex justify-content-between mb-5">
                            <div className="fw-bold">Notifications</div>
                            <div className="fw-bold text-primary clear">Clear</div>
                        </div>
                        <div className="notification-lower">
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-unread">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Congratulation</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">5h ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-unread">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Ticket Booked</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">1 June 2020, 12:33 AM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-read">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Continue Payment</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">4 May 2020, 10:43 AM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-read">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Maintenance</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">4 May 2020, 10:43 AM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="d-flex d-lg-none justify-content-center">
                <div className="bg-white card-white-mobile w-100">
                    <div className="mx-5 my-5 notification-upper">
                        <div className="notification-blue">
                            <div className="text-primary">Notifications</div>
                        </div>
                        <div className="d-flex justify-content-between mb-5">
                            <div className="fw-bold">Notifications</div>
                            <div className="fw-bold text-primary clear">Clear</div>
                        </div>
                        <div className="notification-lower">
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-unread">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Congratulation</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">5h ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-unread">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Ticket Booked</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">1 June 2020, 12:33 AM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-read">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Continue Payment</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">4 May 2020, 10:43 AM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-content w-100 mb-3">
                                <div className="px-3 py-3 border-content-read">
                                    <div className="title">
                                        <div className="fw-bold text-primary">Maintenance</div>
                                    </div>
                                    <div className="messages mt-1 mb-3">
                                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</div>
                                    </div>
                                    <div className="time-ago">
                                        <div className="text-muted">4 May 2020, 10:43 AM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookingDetail