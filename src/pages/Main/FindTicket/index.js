import React, { Fragment, useEffect, useState } from 'react'
import styles from './findtix.module.css'
import Plane2 from '../../../assets/plane2.svg'
import Plane3 from '../../../assets/plane3.svg'
import PlaneTix from '../../../assets/planeTix.svg'
import Meal from '../../../assets/burger.svg'
import Luggage from '../../../assets/luggage.svg'
import Wifi from '../../../assets/wifi.svg'
import Input from '../../../components/module/Input'
import ReactPaginate from 'react-paginate'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getFlights } from '../../../redux/actions/flights';
import { PostFlight } from '../../../redux/actions/postFlightDetail'

const FindTicket = () => {

    //handle params
    const [params, setParams] = useSearchParams()
    const handleSearch = () => {
        setParams(form)
    }

    //batas handle params
    const [showRadio1, setShowRadio1] = useState(true)
    const [facilities, setFacilities] = useState([])
    const [airlines, setAirlines] = useState([])
    const [showRadio2, setShowRadio2] = useState(true)
    const [showRadio3, setShowRadio3] = useState(true)
    const [showRadio4, setShowRadio4] = useState(true)
    const [showRadio5, setShowRadio5] = useState(true)
    const [pageNumber, setPageNumber] = useState(0)
    const dataPerPage = 4
    const pagesVisited = pageNumber * dataPerPage
    const token = localStorage.getItem('token')

    const [form, setForm] = useState({
        departure: '',
        arrival: '',
        class: '',
        transit: '',
        arrival_type: '',
        depature_type: '',
        date: null
    })

    const formFlight = []
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const tickets = useSelector((state) => state.Flights)
    //get all tickets
    useEffect(() => {
        dispatch(getFlights(form))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])


    //select flight

    const handleSelectFlight = (id) => {
        tickets.data.map((ticket) => {
            if (ticket.id === id){
                formFlight.push({ ...ticket, 
                    date: form.date, 
                    classname: ticket.class, 
                    departure_time: ticket.depature_time,
                departure_type: ticket.depature_type })
                dispatch(PostFlight({formFlight, navigate, token}))
            }
        })
    }

    //pagination config
    const displayTickets = tickets.data.slice(pagesVisited, pagesVisited + dataPerPage).map((ticket, index) => {
        return (
            <div className={`w-100 ${styles.ticket} bg-white mb-3`}
                key={index}>
                <div className="wrapper w-100 h-100 p-lg-3 p-1 px-3 d-lg-block d-flex flex-column">
                    <div className="w-50 d-flex justify-content-between align-items-center">
                        {(ticket.airline === 'Airasia' && <img className={`${styles.airlineLogo} d-lg-block d-none`} 
                        src="https://th.bing.com/th/id/R.1f96c8c723dcc01c11b102f4dc386867?rik=G0OuoXUyabTjMA&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f04%2fair_asia_logo_free.jpg&ehk=zgaIIjf3IJChiEHc0YKG9cK%2bc%2bnh21%2bkvfV2riVXcCw%3d&risl=&pid=ImgRaw&r=0" alt='' />) || 
                        (ticket.airline === 'LionAir' && <img className={`${styles.airlineLogo} d-lg-block d-none`} 
                        src="https://th.bing.com/th/id/R.fdce7f1ff0542c5b02381fe01d2168bf?rik=jKbM7zx19MHxIA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fLion_Air_logo.png&ehk=yo%2bq6Ct8YaWtmU1ju4kw2yRfLt4FoKe4KdYMDkvB3tw%3d&risl=&pid=ImgRaw&r=0" alt='' />) || 
                        (ticket.airline === 'Garuda Indonesia' && <img className={`${styles.airlineLogo} d-lg-block d-none`} 
                        src="https://3.bp.blogspot.com/-kfqmZ6swf14/UPkoWbasV_I/AAAAAAAAFLQ/7DrmTWFM6sQ/s1600/Logo+Garuda+Indonesia.jpg" alt='' />)}
                        <p className={`w-75 ${styles.airlines} text-secondary`}>{ticket.airlines}</p>
                    </div>
                    <div className="pt-lg-5 d-flex justify-content-between align-items-center w-100">
                        <div className={`${styles.leftSection} d-flex justify-content-between`}>
                            <div className="departure-section d-flex flex-column align-items-start">
                                <h5 className="fw-bold">{ticket.departure}</h5>
                                <p className="text-secondary">{ticket.depature_time}</p>
                            </div>
                            <img src={PlaneTix} className='d-flex justify-content-center px-3' alt="" />
                            <div className="arrival-section d-flex flex-column align-items-start">
                                <h5 className="fw-bold">{ticket.arrival}</h5>
                                <p className="text-secondary">{ticket.arrival_time}</p>
                            </div>
                        </div>
                        <div className={`${styles.midLeft} d-lg-flex d-none flex-column justify-content-center align-items-center`}>
                            <h6 className="text-secondary">{ticket.duration}</h6>
                            <p className="text-secondary">({ticket.transit})</p>
                        </div>
                        <div className={`${styles.midMid} d-lg-flex d-none align-items-center`}>
                            {ticket.facilities.split(', ').map((facility, index) => {
                                return (
                                    (facility === 'meal' && <img className='mx-3' src={Meal} key={index} alt='' />) || (facility === 'wifi' && <img className='mx-3' src={Wifi} key={index} alt='' />) || (facility === 'luggage' && <img className='mx-3' src={Luggage} alt='' key={index} />)
                                )
                            })}
                        </div>
                        <div className={`${styles.midMid} d-flex align-items-center justify-content-center pe-lg-0 pe-3`}>
                            <p className={`text-primary ${styles.airlines} d-lg-block d-none`}>${ticket.price}.00
                                <span className="text-secondary ms-1">
                                    /pax
                                </span>
                            </p>
                        </div>
                        <div
                            className={`bg-primary text-white d-lg-block d-none ${styles.button}`}
                            onClick={() => handleSelectFlight(ticket.id)}
                        >Select</div>

                    </div>
                    <div className="d-lg-none d-flex justify-content-between align-items-center w-100 pb-3">
                        <h5 className="text-secondary fw-bold">{ticket.airline}</h5>
                        <p className={`text-primary ${styles.airlines}`}>${ticket.price}.00
                            <span className="text-secondary ms-1">
                                /pax
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        )
    })
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    //handle form
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //transit
    // eslint-disable-next-line no-unused-vars
    const handleDropdownTransit = () => setShowRadio1(!showRadio1)

    //facilities
    const handleRadioFacilities = (e) => {
        if (e.target.checked) {
            facilities.push((e.target.value));
        } else {
            setFacilities([])
        }
    }
    const handleDropdownFacilities = () => {
        setShowRadio2(!showRadio2)
    }

    //departure
    const handleDropdownDeparture = () => setShowRadio3(!showRadio3)

    //arrival
    const handleDropdownArrival = () => setShowRadio4(!showRadio4)

    //airlines
    const handleDropdownAirlines = () => setShowRadio5(!showRadio5)
    const handleRadioAirlines = (e) => {
        if (e.target.checked) {
            airlines.push((e.target.value));
        } else {
            setAirlines([])
        }
    }

    return (
        <Fragment>
            <main className={`container-fluid g-0 bg-light ${styles.con}`}>
                <header className={`${styles.searchHeader} d-flex flex-lg-row flex-column justify-content-between`}>
                    <img src={Plane2} className={`${styles.plane2}`} alt="" />
                    <div className={`${styles.headerLeft} d-flex`}>
                        <img src={Plane3} className={`${styles.plane3} d-lg-block d-none`} alt="" />
                        <div className={`${styles.headerLeft1} d-flex flex-column`}>
                            <div className={`d-flex justify-content-between w-100 mb-1`}>
                                <p className={`${styles.p1} text-white`}>From</p>
                                <p className={`${styles.p1} text-white`}>To</p>
                            </div>
                            <div className={`d-flex justify-content-between w-100 mb-1`}>
                                <Input
                                    className={`text-white ${styles.input1}`}
                                    placeholder="Departure"
                                    name="departure"
                                    value={form.departure}
                                    onChange={handleChange}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right text-white" viewBox="0 0 16 16"
                                >
                                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                                <Input
                                    className={`text-white ${styles.input2}`}
                                    placeholder="Arrival"
                                    name="arrival"
                                    value={form.arrival}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`d-flex justify-content-between w-100`}>
                                <Input
                                    className={`text-white mt-0 mb-3 ${styles.input1}`}
                                    type="date"
                                    name="date"
                                    onChange={handleChange}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot text-white" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                                <Input
                                    className={`text-white mt-0 mb-3 ${styles.input1} ${styles.inputLower}`}
                                    placeholder="Quantity"
                                    name="qty"
                                    value={form.qty}
                                    onChange={handleChange} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot text-white" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                                <Input
                                    className={`text-white mt-0 mb-3 ${styles.input2} ${styles.inputLower}`}
                                    placeholder="Class"
                                    name="class"
                                    value={form.class}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex w-lg-25 w-100 ${styles.searchh} pb-lg-0 p-2`}>
                        <h5
                            className={`header-right text-white w-100 d-flex justify-content-lg-end justify-contend-start ${styles.changeSearch}`}
                            onClick={handleSearch}
                        >
                            Change Search
                        </h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill d-lg-none d-block justify-content-end text-white" viewBox="0 0 16 16"
                            onChange={handleChange}
                        >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </div>

                </header>
                <div className="w-100 p-3 d-flex">
                    <div className="w-25 me-5 d-flex flex-column d-none d-lg-block">
                        <div className='d-flex w-100 justify-content-between align-items-center my-3'>
                            <h4>Filter</h4>
                            <h6 className='text-primary'>Reset</h6>
                        </div>
                        <div className={`w-100 bg-white ${styles.filter} p-5`}>
                            <div className={`checkbox-transit`}>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <h6>Transit</h6>
                                    {(showRadio1) ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownTransit}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up text-primary" viewBox="0 0 16 16"
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
                                                type='radio'
                                                name='transit'
                                                value='direct'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Transit
                                            <Input
                                                type='radio'
                                                name='transit'
                                                value='1 transit'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Transit 2+
                                            <Input
                                                type='radio'
                                                name='transit'
                                                value='2 transit'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownFacilities}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up text-primary" viewBox="0 0 16 16"
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownDeparture}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up text-primary" viewBox="0 0 16 16"
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
                                                type='radio'
                                                name='departure_type'
                                                value='early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            06.00 - 12.00
                                            <Input
                                                type='radio'
                                                name='departure_type'
                                                value='mid-early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            12.00 - 18.00
                                            <Input
                                                type='radio'
                                                name='departure_type'
                                                value='mid-late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            18.00 - 24.00
                                            <Input
                                                type='radio'
                                                name='departure_type'
                                                value='late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownArrival}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up text-primary" viewBox="0 0 16 16"
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
                                                type='radio'
                                                name='arrival_type'
                                                value='early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            06.00 - 12.00
                                            <Input
                                                type='radio'
                                                name='arrival_type'
                                                value='mid-early'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            12.00 - 18.00
                                            <Input
                                                type='radio'
                                                name='arrival_type'
                                                value='mid-late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            18.00 - 24.00
                                            <Input
                                                type='radio'
                                                name='arrival_type'
                                                value='late'
                                                className={`${styles.radiobox}`}
                                                onClick={handleChange}
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16"
                                            onClick={handleDropdownAirlines}>
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up text-primary" viewBox="0 0 16 16"
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
                                                name='airline'
                                                value='Airsia'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioAirlines}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Garuda Indonesia
                                            <Input
                                                type='checkbox'
                                                name='airline'
                                                value='Garuda Indonesia'
                                                className={`${styles.radiobox}`}
                                                onClick={handleRadioAirlines}
                                            />
                                        </div>
                                        <div className=' d-flex justify-content-between align-items-center my-3'>
                                            Lion Air
                                            <Input
                                                type='checkbox'
                                                name='airline'
                                                value='LionAir'
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
                    <div className="w-lg-75 w-100 d-flex flex-column">
                        <div className='d-flex w-100 justify-content-between align-items-center my-3'>
                            <h4>Select Ticket
                                <span className={`text-secondary ${styles.spantext}`}> ({tickets.data.length} flight found)
                                </span></h4>
                            <div className='d-flex'>
                                <h6 className='me-2'>Sort by</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                        </div>
                        {displayTickets}
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={Math.ceil(tickets.data.length / dataPerPage)}
                            onPageChange={handlePageChange}
                            containerClassName={`${styles.paginationBtns}`}
                            previousLinkClassName={`{styles.prevBtn}`}
                            nextLinkClassName={`${styles.nextBtn}`}
                            disabledClassName={`${styles.disabledPagination}`}
                            activeClassName={`${styles.activePagination}`}
                        />

                    </div>
                </div>

            </main>
        </Fragment>
    )
}

export default FindTicket