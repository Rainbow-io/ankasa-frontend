import React, { useEffect, useContext } from 'react'
import styles from './navbar.module.css'
import Logo from '../../../assets/plane.svg'
import Kucing from '../../../assets/kucinggarong.jpeg'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'
import socket from '../../../helpers/socket' //import socket
import {decodeToken} from "react-jwt"

import {userContext} from '../../../context/UserContext';

const Navbar = () => {

  const navigate = useNavigate()
  const { userPicture } = useContext(userContext);

  //KALO BE UDAH PASANG SOCKET AKAN DI UNCOMMENT
  const token = localStorage.getItem('token')
  const {username} = decodeToken(token)
  console.log(username);
  useEffect(()=>{
    if(token){
      socket.emit("User ID", username)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <header className={`${styles.navbar} container-fluid d-none d-lg-flex py-5`}>
      <div className={`${styles.logo} ${styles.pointer}`} onClick={()=>navigate("/main/explore")}>
        <img src={Logo} alt="" />
        <h4 className={`${styles.titleNavbar}`}>Ankasa</h4>
      </div>
      <div className={`${styles.midHeader} d-flex justify-content-between align-items-center`}>
        <div className={`${styles.navbarSearch}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-search ${styles.searchIcon}`} viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <Input
            placeholder="Where do you want to go?"
            className={`${styles.searchInput}`}
          />
        </div>
        <h5 className={`mx-5 ${styles.pointer}`} onClick={()=>navigate("/main/find-ticket")}>Find Ticket</h5>
        <h5 className={`${styles.pointer}`} onClick={()=>navigate("/main/my-booking")}>My Booking</h5>
      </div>
      <div className={`${styles.rightHeader}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`bi bi-envelope ${styles.pointer}`} viewBox="0 0 16 16"
        onClick={()=>navigate("/main/chat")}>
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className={`${styles.pointer} bi bi-bell`} onClick={()=>navigate("/main/notification")}>
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
        </svg>
        <img className={`${styles.profilePic} ${styles.pointer}`} src={userPicture} alt="" onClick={()=>navigate("/main/profile")} />
      </div>
    </header>
  )
}

export default Navbar