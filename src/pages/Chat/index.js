import React, { useEffect } from 'react'
import Footer from '../../components/module/Footer'
import Navbar from '../../components/module/Navbar'
import styles from './chat.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/users';
import Kucing from '../../assets/kucinggarong.jpeg'


const Chat = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.Users)

    // const users = [{
    //     id: 1,
    //     username: "Meong",
    //     photo: "https://th.bing.com/th/id/OIP.GKhiEOmge1JFwYMst2neTQHaHX?pid=ImgDet&rs=1"
    // },
    // {
    //     id: 2,
    //     username: "Meong Meong",
    //     photo: "https://th.bing.com/th/id/OIP.oGFj8kvH1_KgHrPNiMqSMgAAAA?pid=ImgDet&w=300&h=300&rs=1"
    // },
    // {
    //     id: 3,
    //     username: "Meong II",
    //     photo: "https://th.bing.com/th/id/OIP.GKhiEOmge1JFwYMst2neTQHaHX?pid=ImgDet&rs=1"
    // },
    // {
    //     id: 4,
    //     username: "Meong Meong II",
    //     photo: "https://th.bing.com/th/id/OIP.oGFj8kvH1_KgHrPNiMqSMgAAAA?pid=ImgDet&w=300&h=300&rs=1"
    // },
    // {
    //     id: 5,
    //     username: "Meong III",
    //     photo: "https://th.bing.com/th/id/OIP.GKhiEOmge1JFwYMst2neTQHaHX?pid=ImgDet&rs=1"
    // },
    // {
    //     id: 6,
    //     username: "Meong Meong III",
    //     photo: "https://th.bing.com/th/id/OIP.oGFj8kvH1_KgHrPNiMqSMgAAAA?pid=ImgDet&w=300&h=300&rs=1"
    // }]

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <main className={`d-flex flex-column ${styles.con}`}>
            <Navbar />
            <main className={`container-fluid g-0 bg-light p-lg-5 flex-fill`}>
                <div className={`w-75 d-flex flex-column mx-auto bg-white ${styles.chatCon} p-lg-5`}>
                    <h5 className="text-primary mb-lg-3">Chat</h5>
                    <div className="w-100 d-flex justify-content-between">
                        <h4 className="fw-bold">Chat</h4>
                        <h4 className="fw-bold text-primary">Filter</h4>
                    </div>
                    <div className={`w-100 mt-lg-3 flex-fill ${styles.con1}`}>
                        {/* buat mapping user bakal chatan */}
                        {users.data.map((user, index) => {
                            return (
                                <div className={`${styles.pointer} wrapper w-100`}
                                    key={index}
                                    onClick={()=>navigate(`/main/chat/${user.idusers}`)}>
                                    <div className="user w-100 py-lg-3 d-flex">
                                        {/* user profPic */}
                                        <img src={user.photo? user.photo : Kucing} className={`${styles.pic} me-lg-3`} alt="" />
                                        <div className="chat d-flex flex-column flex-fill justify-content-between">
                                            {/* user name */}
                                            <h4 className="fw-bold">{user.username}</h4>
                                            <h6 className={`text-secondary ${styles.italic} mb-lg-2`}>Click here to start conversation</h6>
                                        </div>
                                    </div>
                                    <hr className='w-100' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </main>
    )
}

export default Chat