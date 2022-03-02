import React from 'react'
import Logo from '../../../assets/plane.svg'
import Download from '../../../assets/downapp.svg'
import SocialIcon from '../../../assets/socialicon.svg'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={`${styles.footer} footer container-fluid pt-5 pb-4 bg-white`}>
            <div className='mx-5'>
                <div className="top-footer d-flex">
                    <div className="left-foot w-25">
                        <div className="brand d-flex">
                            <img src={Logo} alt="" />
                            <h2 className='ms-3 mb-4 text-white'>Ankasa</h2>
                        </div>
                            <p className='me-5 text-secondary'>Find your Flight and explore the
                                world with us. We will take care of the rest</p>
                    </div>
                    <div className="right-foot w-75 d-flex justify-content-between">
                        <div className="feature d-flex flex-column">
                            <h5 className='mb-4'>Features</h5>
                            <p className='text-secondary'>Find Ticket</p>
                            <p className='text-secondary'>My Booking</p>
                            <p className='text-secondary'>Chat</p>
                            <p className='text-secondary'>Notification</p>
                        </div>
                        <div className="download-app text-center">
                            <h5 className='mb-4'>Download Angkasa app</h5>
                            <img src={Download} alt="" />
                        </div>
                        <div className="social">
                            <h5 className='mb-4'>Follow Us</h5>
                            <img src={SocialIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom-foot mt-5 d-flex justify-content-between text-secondary">
                    <p>© Ankasa.  All Rights Reserved.</p>
                    <p>Jakarta Indonesia</p>
                </div>
            </div>

        </div>
    )
}

export default Footer