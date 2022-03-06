import React, { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import { useParams } from 'react-router-dom'
import Footer from '../../../components/module/Footer'
import Input from '../../../components/module/Input'
import Navbar from '../../../components/module/Navbar'
import socket from '../../../helpers/socket'
// import socket from '../../../helpers/socket'
import styles from './chatroom.module.css'

const ChatRoom = () => {
    const { idRec } = useParams()
    const [message, setMessage] = useState("")
    // const [chat, setChat] = useState([])
    const token = localStorage.getItem('token')
    const { username, email } = decodeToken(token)
    console.log(username);

    const receiver = {
        id: idRec,
        username: "MightyMeong",
        photo: "https://th.bing.com/th/id/OIP.GKhiEOmge1JFwYMst2neTQHaHX?pid=ImgDet&rs=1"
    }
    console.log(receiver);

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            // socket.emit("message", {sender: username, receiver: receiver.id, message})
            setMessage("")
        }
    }

    //CHAT DUMMIESSSSZZZZ
    const chat = [{
        sender: username,
        receiver: receiver.id,
        message: "hai"
    }, {
        sender: receiver.username,
        receiver: username,
        message: "hai juga cintaku<3"
    }, {
        sender: username,
        receiver: receiver.id,
        message: "ah kamu gombal"
    }, {
        sender: receiver.username,
        receiver: username,
        message: "ayo makan warteg"
    }, {
        sender: username,
        receiver: receiver.id,
        message: "dibayarin gak?"
    }, {
        sender: username,
        receiver: receiver.id,
        message: "kalo ngga, aku gamau :'( aku bokek"
    }, {
        sender: receiver.username,
        receiver: username,
        message: "cuih gembellllll"
    }
]

    // useEffect(()=>{
    //     socket.on("message", (data) => {
    //         setChat([...chat, {sender: data.sender, 
    //             receiver: data.receiver, 
    //             message: data.message}])
    //     })
    // }, [])

    return (
        <main className={`d-flex flex-column ${styles.con}`}>
            <Navbar />
            <main className={`container-fluid g-0 bg-light p-lg-5 flex-fill`}>
                <div className={`w-75 d-flex flex-column mx-auto bg-white ${styles.chatCon}`}>
                    <div className={`h-25 w-100 d-flex align-items-center p-lg-5 ${styles.receiverHeader}`}>
                        <img src={receiver.photo} className={`${styles.pic}`} alt="" />
                        <h4 className="text-secondary ms-lg-3">{receiver.username}</h4>
                    </div>
                    <div className={`mt-lg-3 w-100 px-lg-5 ${styles.conzz}`}>
                        {chat.map((chat, index) =>
                                <div
                                key={index}
                                className={`d-flex w-100 mb-lg-3`}>
                                    {chat.receiver === receiver.id ? 
                                    <div className={`w-100 d-flex bg-secondary text-white p-3 justify-content-end ${styles.radius}`}>
                                        <h6 className="text-start">{chat.message}</h6>
                                    </div>
                                    :
                                    <div className={`w-100 d-flex bg-primary p-3 justify-content-start ${styles.radius}`}>
                                        <h6 className="text-white text-start">{chat.message}</h6>
                                        </div>   
                                }

                                </div>
                            
                        )}
                        <div className="w-50"></div>
                    </div>
                    <div className="wrapper-input w-100 mt-3 px-lg-5">
                        <Input
                            type='text'
                            name='message'
                            value={message}
                            onChange={handleChange}
                            onKeyUp={handleSubmit}
                            placeholder="Type your message here"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </main>
    )
}

export default ChatRoom