import React, { Fragment } from 'react'
import Navbar from '../../components/module/Navbar'
import styles from './findtix.module.css'
import Plane2 from '../../assets/plane2.svg'
import Plane3 from '../../assets/plane3.svg'
import Input from '../../components/module/Input'

const FindTicket = () => {
    return (
        <Fragment>
            <Navbar />
            <main className={`container-fluid g-0 bg-light ${styles.con}`}>
                <header className={`${styles.searchHeader} d-flex justify-content-between`}>
                    <img src={Plane2} className={`${styles.plane2}`} alt="" />
                    <div className={`${styles.headerLeft} d-flex`}>
                        <img src={Plane3} className={`${styles.plane3}`} alt="" />
                        <div className={`${styles.headerLeft1} d-flex flex-column`}>
                            <div className={`d-flex justify-content-between w-100 mb-1`}>
                                <p className={`${styles.p1} text-white`}>From</p>
                                <p className={`${styles.p1} text-white`}>To</p>
                            </div>
                            <div className={`d-flex justify-content-between w-100 mb-1`}>
                                <Input className={`text-white ${styles.input1}`} placeholder="Medan" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right text-white" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                                <Input className={`text-white ${styles.input2}`} placeholder="Jakarta" />
                            </div>
                            <div className={`d-flex justify-content-between w-100`}>
                                <p className="text-white">Monday, 20 July 2022</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot text-white" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                                <p className="text-white">6 Passengers</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot text-white" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                                <p className="text-white">Economy</p>
                            </div>
                        </div>
                    </div>
                    <h5 className={`header-right text-white w-25 d-flex justify-content-end ${styles.changeSearch}`}>
                        Change Search
                    </h5>

                </header>
                <div className="w-100 p-3 d-flex">
                    <div className="w-25 me-5 d-flex flex-column">
                        <div className='d-flex w-100 justify-content-between align-items-center my-3'>
                            <h4>Filter</h4>
                            <h6 className='text-primary'>Reset</h6>
                        </div>
                        <div>
                            buat checkbox
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-column">
                        <div className='d-flex w-100 justify-content-between align-items-center my-3'>
                        <h4>Select Ticket
                            <span className={`text-secondary ${styles.spantext}`}> (6 flight found)
                            </span></h4>
                        <div className='d-flex'>
                            <h6 className='me-2'>Sort by</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                        </div>
                        <div>
                            buat mapping tiket
                        </div>
                    </div>
                </div>

            </main>
        </Fragment>
    )
}

export default FindTicket