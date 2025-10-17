import {io} from "socket.io-client";

const SOCKET_URL = "https://codesync-backend-j95t.onrender.com";

export const initSocket = async()=> {
    const option ={
        forceNewConnection: true,
        reconnectionAttempts: "Infinity",
        timeout: 10000,
        transports: ["websocket"]
    };
    return io(process.env.REACT_APP_BACKEND_URL, option);
} 
