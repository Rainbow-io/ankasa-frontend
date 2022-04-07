import React, { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import { useParams } from 'react-router-dom'
import Input from '../../../../components/module/Input'
// eslint-disable-next-line no-unused-vars
import socket from '../../../../helpers/socket'
import styles from './chatroom.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUserID } from '../../../../redux/actions/userByID';
import Kucing from '../../../../assets/kucinggarong.jpeg'


const ChatRoom = () => {
    const { id } = useParams()
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState([])
    const token = localStorage.getItem('token')
    const { username } = decodeToken(token)
    const dispatch = useDispatch()
    const receiver = useSelector((state) => state.UserID)
    useEffect(() => {
        dispatch(getUserID(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            socket.emit("message", { sender: username, receiver: receiver.data.username, message })
            setMessage("")
        }
    }

    //CHAT DUMMIESSSSZZZZ
    // const chat = [{
    //     sender: username,
    //     receiver: receiver.data.username,
    //     message: "hai"
    // }, {
    //     sender: receiver.data.username,
    //     receiver: username,
    //     message: "hai juga cintaku<3"
    // }, {
    //     sender: username,
    //     receiver: receiver.data.username,
    //     message: "ah kamu gombal"
    // }, {
    //     sender: receiver.data.username,
    //     receiver: username,
    //     message: "ayo makan warteg"
    // }, {
    //     sender: username,
    //     receiver: receiver.data.username,
    //     message: "dibayarin gak?"
    // }, {
    //     sender: username,
    //     receiver: receiver.data.username,
    //     message: "kalo ngga, aku gamau :'( aku bokek"
    // }, {
    //     sender: receiver.username,
    //     receiver: username,
    //     message: "cuih gembellllll"
    // }
    // ]
    // console.log(chat);

    // useEffect(()=>{
    socket.on("message", (data) => {
        setChat([...chat, {
            sender: data.sender,
            receiver: data.receiver,
            message: data.message
        }])
    })
    // }, [])

    return (
        <main className={`d-flex flex-column ${styles.con}`}>
            <main className={`container-fluid g-0 bg-light p-lg-5 flex-fill`}>
                <div className={`w-lg-75 w-100 d-flex flex-column mx-auto bg-white ${styles.chatCon}`}>
                    <div className={`h-lg-25 w-100 d-flex align-items-center p-lg-5 p-3 py-5 py-lg-0 ${styles.receiverHeader}`}>
                        <img src={receiver.data.photo ? receiver.data.photo : Kucing} className={`${styles.pic} me-3 me-lg-0`} alt="" />
                        <h4 className="text-secondary ms-lg-3">{receiver.data.username ? receiver.data.username : `Namanya ga ada`}</h4>
                    </div>
                    <div className={`mt-lg-3 w-100 px-lg-5 ${styles.conzz}`}>
                        {chat.map((chat, index) =>
                            <div
                                key={index}
                                className={`d-flex w-100 mb-lg-3`}>
                                {(chat.receiver === receiver.data.username && chat.sender === username) && (
                                    <div className={`w-100 d-flex bg-secondary text-white p-3 justify-content-end ${styles.radius}`}>
                                        <h6 className="text-start">{chat.message}</h6>
                                    </div>)
                                }
                                {(chat.receiver === username && chat.sender === receiver.data.username) && (
                                    <div className={`w-100 d-flex bg-primary p-3 justify-content-start ${styles.radius}`}>
                                        <h6 className="text-white text-start">{chat.message}</h6>
                                    </div>)
                                }

                            </div>

                        )}
                        <div className="w-50"></div>
                    </div>
                    <div className="wrapper-input w-100 mt-3 px-lg-5 p-3">
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
        </main>
    )
}

export default ChatRoom