import { io } from "socket.io-client";

const URL = "https://ankasa-rainbow.herokuapp.com/";
const socket = io(URL, { transports: ['websocket'] });
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;