import React, { Component } from 'react';
import socketIOClient from "socket.io-client"

class Chat extends Component {
constructor(props) {
    super(props)
    this.state = {
        name: ""
    }

onsubmit = () => {
        const socket = socketIOClient("http://localhost:5001/")
        socket.on("connect", () => {
            socket.send("hi");
            socket.on("message", () => {

            })
        })
    }
}


    render() {
        const socket = socketIOClient("http://localhost:5001/")
        socket.on("connect", () => {
            socket.send("hi");
            socket.on("message", (msg) => {

            })
        })
        
        return (
            <div>
                Chatroom
            </div>
        )
    }
}

export default Chat;