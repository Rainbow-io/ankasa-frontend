import React, { Fragment, useState } from 'react'
import Navbar from '../../components/module/Navbar'
import styles from './findtix.module.css'
import Plane2 from '../../assets/plane2.svg'
import Plane3 from '../../assets/plane3.svg'
import PlaneTix from '../../assets/planeTix.svg'
import Meal from '../../assets/burger.svg'
import Luggage from '../../assets/luggage.svg'
import Wifi from '../../assets/wifi.svg'
import Input from '../../components/module/Input'

const FindTicket = () => {

    const [showRadio1, setShowRadio1] = useState(false)
    const [transit, setTransit] = useState([])
    const [showRadio2, setShowRadio2] = useState(false)
    const [showRadio3, setShowRadio3] = useState(false)
    const [showRadio4, setShowRadio4] = useState(false)
    const [showRadio5, setShowRadio5] = useState(false)
    const tickets = [{
        id: 1,
        airlines: 'Garuda Indonesia',
        logo: 'https://th.bing.com/th/id/R.64091e365c3ae82a67f0f282fb2a50b0?rik=dLJZMJaW3l%2bErQ&riu=http%3a%2f%2ftravelpro.nl%2fwp-content%2fuploads%2flogo1.jpg&ehk=eqT%2bFxB%2btJPggHp6R9p0S%2fBHoyICm6d04Hj8iHh7BHE%3d&risl=&pid=ImgRaw&r=0',
        departure: 'Jakarta',
        arrival: 'Medan',
        duration: "3hrs 11mins",
        price: 214.00,
        facilities: 'meal, luggage, wifi',
        arrival_time: '13.30',
        arrival_type: 'mid-late',
        departure_time: '10.19',
        departure_type: 'mid-early',
        transit: '1 transit'
    },
    {
        id: 2,
        airlines: 'Garuda Indonesia',
        logo: 'https://th.bing.com/th/id/R.64091e365c3ae82a67f0f282fb2a50b0?rik=dLJZMJaW3l%2bErQ&riu=http%3a%2f%2ftravelpro.nl%2fwp-content%2fuploads%2flogo1.jpg&ehk=eqT%2bFxB%2btJPggHp6R9p0S%2fBHoyICm6d04Hj8iHh7BHE%3d&risl=&pid=ImgRaw&r=0',
        departure: 'Pekanbaru',
        arrival: 'Mimika',
        duration: "3hrs 11mins",
        price: 210.00,
        facilities: 'meal, luggage',
        arrival_time: '13.30',
        arrival_type: 'mid-late',
        departure_time: '10.19',
        departure_type: 'mid-early',
        transit: 'direct'
    }
]
    //transit
    const handleRadioTransit = (e) => {         //masih ngaco logicnya
        if (e.target.checked) {
            transit.push((e.target.value));
        } else {
            setTransit([])
        }
        console.log(transit);
    }
    const handleDropdownTransit = () => {
        setShowRadio1(!showRadio1)
    }

    //facilities
    const handleRadioFacilities = (e) => {
        console.log(e.target.value);
    }
    const handleDropdownFacilities = () => {
        setShowRadio2(!showRadio2)
    }

    //departure
    const handleDropdownDeparture = () => {
        setShowRadio3(!showRadio3)
    }
    const handleRadioDeparture = (e) => {
        console.log(e.target.value, "departure");
    }

    //arrival
    const handleDropdownArrival = () => {
        setShowRadio4(!showRadio4)
    }
    const handleRadioArrival = (e) => {
        console.log(e.target.value, "arrival");
    }

    //airlines
    const handleDropdownAirlines = () => {
        setShowRadio5(!showRadio5)
    }
    const handleRadioAirlines = (e) => {
        console.log(e.target.value);
    }

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
                                <Input
                                    className={`text-white mt-0 mb-3 ${styles.input1}`}
                                    placeholder="Quantity"
                                    type="date"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot text-white" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                                <Input className={`text-white mt-0 mb-3 ${styles.input1} ${styles.inputLower}`} placeholder="Quantity" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot text-white" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                                <Input className={`text-white mt-0 mb-3 ${styles.input2} ${styles.inputLower}`} placeholder="Flight Class" />
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
                        <div className={`w-100 bg-white ${styles.filter} p-5`}>
                            <div className={`checkbox-transit`}>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <h6>Transit</h6>
                                    {(showRadio1) ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownTransit}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownTransit}>
                                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                        </svg>
                                    }
                                </div>
                                {showRadio1 &&
                                    <div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Direct
                                            <Input
                                                type='checkbox'
                                                name='transit'
                                                value='direct'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioTransit}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Transit
                                            <Input
                                                type='checkbox'
                                                name='transit'
                                                value='transit'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioTransit}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Transit 2+
                                            <Input
                                                type='checkbox'
                                                name='transit'
                                                value='transit 2+'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioTransit}
                                            />
                                        </div>
                                    </div>
                                }
                                <hr />
                            </div>
                            <div className={`checkbox-facilities`}>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <h6>Facilities</h6>
                                    {(showRadio2) ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownFacilities}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownFacilities}>
                                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                        </svg>
                                    }
                                </div>
                                {showRadio2 &&
                                    <div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Luggage
                                            <Input
                                                type='checkbox'
                                                name='facilities'
                                                value='luggage'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioFacilities}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Meal
                                            <Input
                                                type='checkbox'
                                                name='facilities'
                                                value='meal'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioFacilities}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Wi-Fi
                                            <Input
                                                type='checkbox'
                                                name='facilities'
                                                value='wifi'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioFacilities}
                                            />
                                        </div>
                                    </div>
                                }
                                <hr />
                            </div>
                            <div className={`checkbox-departure`}>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <h6>Departure Time</h6>
                                    {(showRadio3) ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownDeparture}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownDeparture}>
                                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                        </svg>
                                    }
                                </div>
                                {showRadio3 &&
                                    <div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            00.00 - 06.00
                                            <Input
                                                type='checkbox'
                                                name='departure'
                                                value='early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioDeparture}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            06.00 - 12.00
                                            <Input
                                                type='checkbox'
                                                name='departure'
                                                value='mid-early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioDeparture}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            12.00 - 18.00
                                            <Input
                                                type='checkbox'
                                                name='departure'
                                                value='mid-late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioDeparture}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            18.00 - 24.00
                                            <Input
                                                type='checkbox'
                                                name='departure'
                                                value='late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioDeparture}
                                            />
                                        </div>
                                    </div>
                                }
                                <hr />
                            </div>
                            <div className={`checkbox-arrival`}>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <h6>Arrival Time</h6>
                                    {(showRadio4) ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownArrival}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownArrival}>
                                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                        </svg>
                                    }
                                </div>
                                {showRadio4 &&
                                    <div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            00.00 - 06.00
                                            <Input
                                                type='checkbox'
                                                name='arrival'
                                                value='early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioArrival}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            06.00 - 12.00
                                            <Input
                                                type='checkbox'
                                                name='arrival'
                                                value='mid-early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioArrival}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            12.00 - 18.00
                                            <Input
                                                type='checkbox'
                                                name='arrival'
                                                value='mid-late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioArrival}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            18.00 - 24.00
                                            <Input
                                                type='checkbox'
                                                name='arrival'
                                                value='late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioArrival}
                                            />
                                        </div>
                                    </div>
                                }
                                <hr />
                            </div>
                            <div className={`checkbox-airlines`}>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <h6>Airlines</h6>
                                    {(showRadio5) ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownAirlines}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownAirlines}>
                                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                        </svg>
                                    }
                                </div>
                                {showRadio5 &&
                                    <div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Air Asia
                                            <Input
                                                type='checkbox'
                                                name='airlines'
                                                value='air asia'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioAirlines}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Garuda Indonesia
                                            <Input
                                                type='checkbox'
                                                name='airlines'
                                                value='Garuda Indonesia'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioAirlines}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Lion Air
                                            <Input
                                                type='checkbox'
                                                name='airlines'
                                                value='Lion Air'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioAirlines}
                                            />
                                        </div>
                                    </div>
                                }
                                <hr />
                            </div>
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
                        {/* mapping ticket here */}{
                            tickets.map((ticket) => {
                                return (
                                    <div className={`w-100 ${styles.ticket} bg-white mb-3`}>
                                        <div className="wrapper w-100 h-100 p-3">
                                            <div className="w-50 d-flex justify-content-between align-items-center">
                                                <img src={ticket.logo} className={`${styles.airlineLogo}`} alt="" />
                                                <p className={`w-75 ${styles.airlines} text-secondary`}>{ticket.airlines}</p>
                                            </div>
                                            <div className="pt-lg-5 d-flex justify-content-between align-items-center w-100">
                                                <div className={`${styles.leftSection} d-flex justify-content-between`}>
                                                    <div className="departure-section d-flex flex-column align-items-start">
                                                        <h4 className="text-secondary">{ticket.departure}</h4>
                                                        <p className="text-secondary">{ticket.departure_time}</p>
                                                    </div>
                                                    <img src={PlaneTix} className='d-flex align-items-start' alt="" />
                                                    <div className="arrival-section d-flex flex-column align-items-start">
                                                        <h4 className="text-secondary">{ticket.arrival}</h4>
                                                        <p className="text-secondary">{ticket.arrival_time}</p>
                                                    </div>
                                                </div>
                                                <div className={`${styles.midLeft} d-flex flex-column justify-content-center align-items-center`}>
                                                    <h5 className="text-secondary">{ticket.duration}</h5>
                                                    <p className="text-secondary">({ticket.transit})</p>
                                                </div>
                                                <div className={`${styles.midMid} d-flex align-items-center`}>
                                                    {ticket.facilities.split(', ').map((facility) => {
                                                        return (
                                                            (facility === 'meal' && <img className='mx-3' src={Meal} alt=''/>) || (facility === 'wifi' && <img className='mx-3' src={Wifi} alt=''/>) || (facility === 'luggage' && <img className='mx-3' src={Luggage} alt=''/>)
                                                        )
                                                    })}
                                                </div>
                                                <div className={`${styles.midMid} d-flex align-items-center justify-content-center`}>
                                                    <p className={`text-primary ${styles.airlines}`}>${ticket.price}.00
                                                    <span className="text-secondary ms-1">
                                                        /pax
                                                    </span>
                                                    </p>
                                                </div>
                                                <div className={`bg-primary text-white ${styles.button}`}>Select</div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </main>
        </Fragment>
    )
}

export default FindTicket