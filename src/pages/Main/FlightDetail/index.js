/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styles from './flightdetail.module.css'
import dangerIcon from '../../../assets/danger-icon.svg'
import fsIcon from '../../../assets/flight-small-icon.svg'
import dotIcon from '../../../assets/dot.svg'
import checkListIcon from '../../../assets/checklist-icon.svg'
import PassengerDetail from '../../../components/module/PassengerDetailBox'
import Input from '../../../components/module/Input'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFlightDetail } from '../../../redux/actions/flight-detail'
import { decodeToken } from 'react-jwt'

const FlightDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const dataFlightDetail = useSelector((state => state.FlightDetail))
    const [resData] = dataFlightDetail.data
    // console.log(resData,'awwwwwwwwwwwwwwwwwwwwwwww');
    const tokenUser = localStorage.getItem('token');
    const userInfo = decodeToken(tokenUser)
    console.log(userInfo, 'infoooooooooooooooooooo');


    useEffect(() => {
        dispatch(getFlightDetail(id))
    }, [])

    const qty = localStorage.getItem('qty')

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
                                <h6 className={`${styles.uline} pb-2`}>{userInfo.fullname}</h6>
                            </div>
                            <div className="person-name py-3"><p>Email</p>
                                <h6 className={`${styles.uline} pb-2`}>{userInfo.email}</h6>
                            </div>
                            <div className="person-number"><p>Phone Number</p>
                                <h6 className={`${styles.uline} pb-2`}>
                                    <div className="form-number d-flex  ">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                +62
                                            </button>
                                            <ul className='dropdown-menu'>
                                                <li><p className='dropdown-item'>+60</p></li>
                                                <li><p className='dropdown-item'>+65</p></li>
                                            </ul>
                                        </div>
                                        {/* <Input className='w-100 border-0'
                                        /> */}
                                        {userInfo.phone}
                                    </div>
                                </h6>
                            </div>
                            <div className={`${styles.border15} bg-danger bg-opacity-25 warning mt-3 p-2`}> <img className='px-2' src={dangerIcon} alt="" />Make sure the customer data is correct.</div>
                        </div>
                        <div className={`${styles.w40} ${styles.border15} ${styles.hfitcontent} p-4 detail mt-4 border bg-white`}>
                            <div className="airlines d-flex ">
                                {(resData?.airline === 'LionAir' && 
                                <img className={`${styles.maxwidth} d-lg-block d-none`}
                                    src="https://th.bing.com/th/id/R.fdce7f1ff0542c5b02381fe01d2168bf?rik=jKbM7zx19MHxIA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fLion_Air_logo.png&ehk=yo%2bq6Ct8YaWtmU1ju4kw2yRfLt4FoKe4KdYMDkvB3tw%3d&risl=&pid=ImgRaw&r=0" alt='' />)
                                || (resData?.airline === 'Airasia' && 
                                <img className={`${styles.maxwidth} d-lg-block d-none`} 
                                src="https://th.bing.com/th/id/R.1f96c8c723dcc01c11b102f4dc386867?rik=G0OuoXUyabTjMA&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f04%2fair_asia_logo_free.jpg&ehk=zgaIIjf3IJChiEHc0YKG9cK%2bc%2bnh21%2bkvfV2riVXcCw%3d&risl=&pid=ImgRaw&r=0" alt='' />)
                                || (resData?.airline === 'Airasia' && 
                                <img className={`${styles.maxwidth} d-lg-block d-none`} 
                                src="https://3.bp.blogspot.com/-kfqmZ6swf14/UPkoWbasV_I/AAAAAAAAFLQ/7DrmTWFM6sQ/s1600/Logo+Garuda+Indonesia.jpg" alt='' />)
                                }
                                <h3 className='ms-4 align-self-center'>{resData?.airline}</h3>
                            </div>
                            <div className="flight-route my-3 d-flex">
                                <h5 className='departure'>{resData?.departure}</h5>
                                <img className='mx-3' src={fsIcon} alt="" />
                                <h5 className='arival'>{resData?.arrival}</h5>
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
                                <h4 className='text-primary'>$ {resData?.price * qty}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={`mid-content pt-5 `}>
                        <PassengerDetail />
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