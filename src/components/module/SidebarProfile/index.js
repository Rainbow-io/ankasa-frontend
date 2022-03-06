// import internal modules
import React, {useEffect} from 'react'
import { decodeToken } from 'react-jwt';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import external modules
import {getUserID} from '../../../redux/actions/userByID';

const SidebarProfile = ({openModal}) => {
  const tokenUser = localStorage.getItem('token');
    const userInfo = decodeToken(tokenUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userDetailData = useSelector((state) => state.UserID)


    useEffect(() => {
        dispatch((getUserID(userInfo.id)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        navigate("/auth/login")
    }
  return (
    <div className="d-none d-md-block bg-white profile-left flex-fill">
      <div className="px-3 py-5 d-flex flex-column align-items-center profile-left-content">
        <div className="content-upper text-center">
          <div className="photo">
            <img src={require("../../../assets/mike-kowalski-mybooking.png")} alt="" />
          </div>
          <div onClick={() => openModal(true)} className="px-3 py-2 my-3 select-photo-button">
            <div className="fw-bold text-primary">Select Photo</div>
          </div>
          <div className="name">
            <div className="fw-bold">{userDetailData.data?.fullname}</div>
          </div>
          <div className="address">
            <div className="text-muted fs-6"><span>{userDetailData.data?.address}, </span><span>{userDetailData.data?.city}</span></div>
          </div>
        </div>
        <div className="d-none d-md-block my-3 content-middle">
          <div className="d-flex justify-content-between">
            <div className="cards">
              <div className="fw-bold">Cards</div>
            </div>
            <div className="add">
              <div className="fw-bold text-primary">+Adds</div>
            </div>
          </div>
          <div className="bluebox">
            <div className="px-3 py-2 bluebox-content">
              <div className="bluebox-upper">
                <div className="numberscard">
                  <div className="fw-bold text-white">4441 1235 5512 5551</div>
                </div>
              </div>
              <div className="d-flex bluebox-lower justify-content-between">
                <div className="card-brand">
                  <div className="text-white">X Card</div>
                </div>
                <div className="balance-current">
                  <div className="text-white">$ 1,440.2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-lower">
          <div className="profile d-flex my-3">
            <div className="logo-profile me-3">
              <img src={require("../../../assets/icons/profile-mybooking.svg").default} alt="" />
            </div>
            <div>Profile</div>
          </div>
          <div className="my-review d-flex">
            <div className="logo-myreview me-3">
              <img src={require("../../../assets/icons/my-review-bookingdetail.svg").default} alt="" />
            </div>
            <div>My Review</div>
          </div>
          <div className="settings d-flex my-3">
            <div className="logo-settings me-3">
              <img src={require("../../../assets/icons/settings-mybooking.svg").default} alt="" />
            </div>
            <div>Settings</div>
          </div>
          <div onClick={() => handleLogout()} className="logout d-flex">
            <div className="logo-logout me-3">
              <img src={require("../../../assets/icons/logout-mybooking.svg").default} alt="" />
            </div>
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarProfile