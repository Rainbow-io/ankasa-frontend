/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Input from '../Input'
import styles from './passengerdetail.module.css'

const PassengerDetail = () => {

    // const [dropdown, setdropdown] = useState(0);
    // const dropdownList = ["Indoensia", "Malaysia"];

    // const dropdownListClick = index => {
    //     setdropdown(index);
    // };

    

    return (
        <div>
            {/* <div>
                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >{dropdownList[dropdown]}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {dropdownList.map((value,index) => {
                        return (
                            <li>
                            <p 
                            className='dropdown-item'
                            onClick={() => dropdownListClick(index)}
                            >
                                {value}
                            </p>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div> */}


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
                    <Input className='w-100 border-0 border-bottom px-3'
                    />
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
    )
}

export default PassengerDetail