import React from 'react'
import styles from './flightdetail.module.css'
import dangerIcon from '../../../assets/danger-icon.svg'
import garudaLogo from '../../../assets/garuda-logo.svg'
import fsIcon from '../../../assets/flight-small-icon.svg'
import dotIcon from '../../../assets/dot.svg'
import checkListIcon from '../../../assets/checklist-icon.svg'

const FlightDetail = () => {
    return (
        <div className=''>
            <div className={`${styles.bg}`}>
                <div className='mx-5'>
                    <div className="title d-flex justify-content-between text-white pt-5">
                        <div className={`${styles.w55} me-4 left-title`}>
                            <h4>Contact Person Details</h4>
                        </div>
                        <div className={`${styles.w40} right-title d-flex justify-content-between align-items-center`}>
                            <h4>Flight Details</h4>
                            <h6>View Details</h6>
                        </div>
                    </div>
                    <div className="top-content d-flex justify-content-between">
                        <div className={`${styles.border15} ${styles.w55} mt-4 p-3`}>
                            <div className="person-name"><p>Full Name</p>
                                <h6 className={`${styles.uline} pb-2`}>Mike Kowalski</h6>
                            </div>
                            <div className="person-name py-3"><p>Email</p>
                                <h6 className={`${styles.uline} pb-2`}>flightbooking@ankasa.com</h6>
                            </div>
                            <div className="person-name"><p>Phone Number</p>
                                <h6 className={`${styles.uline} pb-2`}>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        +62
                                    </button>
                                    <ul className='dropdown-menu'>
                                        <li><p className='dropdown-item'>+60</p></li>
                                        <li><p className='dropdown-item'>+65</p></li>
                                    </ul>
                                </div>
                                </h6>
                            </div>
                            <div className={`${styles.border15} bg-danger bg-opacity-25 warning mt-3 p-2`}> <img className='px-2' src={dangerIcon} alt="" />Make sure the customer data is correct.</div>
                        </div>
                        <div className={`${styles.w40} ${styles.border15} ${styles.hfitcontent} p-4 detail mt-4 border bg-white`}>
                            <div className="airlines d-flex "><img src={garudaLogo} alt="" /> <h6 className='ms-4 align-self-center'>Garuda Indonesia</h6></div>    
                            <div className="flight-route my-3 d-flex">
                                <h5 className='departure'>Medan (IDN)</h5>
                                <img className='mx-3' src={fsIcon} alt="" />
                                <h5 className='arival'>Tokyo (JPN)</h5>
                            </div>
                            <div className="schaedule text-secondary d-flex">
                                <p className='date-flight'>Sunday, 15 August 2020</p>
                                <img className='mx-3' src={dotIcon} alt="" />
                                <p className='time-flight'>12:33 - 15:21</p>
                            </div>
                            <div className={`${styles.uline} ticket-features`}>
                                <h6 className='text-primary'><img className='me-2' src={checkListIcon} alt="" />Refundable</h6>
                                <h6 className='text-primary'><img className='me-2' src={checkListIcon} alt="" />Can reschedule</h6>
                            </div>
                            <div className="total-payment d-flex justify-content-between mt-4">
                            <h5>Total Payment</h5>
                            <h4 className='text-primary'>$ 145,00 D</h4>
                            </div>
                        </div>
                    </div>
                    <div className={`mid-content pt-5 `}>
                        <h4>Passenger Details</h4>
                        <div className={`${styles.border15} ${styles.w55} p-3`}>
                            <div className={`${styles.border15} bg-primary bg-opacity-25 d-flex justify-content-between px-2`}>
                                <div className={`align-self-center`}>Passenger : 1 Adult</div>
                                <div className="switcher-box d-flex py-2">
                                    Same as contact person
                                    <div className="form-check form-switch ps-5">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </div>
                            <div className="person-title mt-3"><p>Title</p>
                                <h6 className={`${styles.uline} pb-2`}>DROP DOWN TITLE</h6>
                            </div>
                            <div className="person-name py-3"><p>Full Name</p>
                                <h6 className={`${styles.uline} pb-2`}>Mike Kowalski</h6>
                            </div>
                            <div className="nationality"><p>Nationality</p>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Indonesia
                                    </button>
                                    <ul className='dropdown-menu'>
                                        <li><p className='dropdown-item'>Malaysia</p></li>
                                        <li><p className='dropdown-item'>Singapore</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`py-5`}>
                        <h4>Passenger Details</h4>
                        <div className={`${styles.border15} ${styles.w55} mt-4 py-3`}>
                            <div className={`insurance-box`}>
                                <div className={`${styles.uline} d-flex px-5 justify-content-between py-3 form-check`}>
                                    <div className="check d-flex">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                        <label className="form-check-label" for="flexCheckIndeterminate">
                                            <h6 className='ps-2'>Travel Insurance</h6>
                                        </label>
                                    </div>
                                    <div className="insurance-price d-flex "><h6 className='text-primary'>$2,00</h6>/pax</div>
                                </div>
                            </div>
                            <div className={`p-3`}>Get travel compensation up to $ 10.000,00</div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.w55} d-flex justify-content-center`}>
                    <button className='btn btn-primary mb-5'><h5>Proceed to Payment</h5></button>
                </div>
            </div>
        </div>
    )
}

export default FlightDetail