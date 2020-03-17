import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyAurYgiqqhxJ1uW-X5XHYYHGBr6vZPDGdU",
	authDomain: "info340Project-blind.firebaseapp.com",
	databaseURL: "https://info340Project-blind.firebaseio.com",
	projectId: "info340Project-blind",
	storageBucket: "info340Project-blind.appspot.com",
	messagingSenderId: "932938034155",
	appId: "1:641925391525:web:fd2c63c2e504b0b52ed94c"
};

export default class Messages extends Component { //export allows other things to use this class.
    state = {
        chosen: [],
        messageIndex: 0,
        chats: [],
        messageList: null,
        currentChat: 0,
        showMessages: false,
        messageInput: '',
        points: 0
    };


    componentDidMount() {
        fetch("messages.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    chats: data.chats
                })
            });
    }

    handleChange = (event) => {
        //get the value that the <input> now has
        let newValue = event.target.value

        //store that new value in the state, rendering the Component
        this.setState({ messageInput: newValue });
    }

    clickedChat = (index) => {
        console.log(index)
        let chats = this.state.chats;
        let messages = chats[index];
        this.setState({
            showMessages: true,
            messageList: messages.messages,
            messageIndex: index
        })
    }

    addMessage = () => {
        let messageInput = this.state.messageInput;
        let messageObject = { "sender": "me", "reciever": "them", "content": messageInput };
        let messageIndex = this.state.messageIndex;
        this.state.chats[messageIndex].messages.push(messageObject);
        this.setState({
            chats: this.state.chats,
            messageInput: ''
        })
    }

    render() {
        console.log(this.state.chats);
        let renderedChats = this.state.chats.map((chat, index) => {
            return (
                <li class="chat list-group-item" onClick={() => this.clickedChat(index)}>
                    <div>
                        {/* <img class="chat-pic chat img" src={chat.picture} alt={chat.name}></img> */}
                    <img className="center" src={this.state.chats[this.state.messageIndex].picture} style={{width: "100%", marginLeft: auto, marginRight: auto}} alt={this.state.chats[this.state.messageIndex].name}></img>
                    </div> 
                    <div class="chat-content chat">
                        <h4>{chat.name}</h4>
                        <div>{chat.lastMessage}</div>
                    </div>
                </li>
            )
        })

        let renderedMessages = (this.state.messageList || []).map((mess) => {
            return <li class="chat list-group-item"><div class={mess.sender === "me" ? "message-me" : "message-them"}><p>{mess.content}</p></div></li>
        })

        let messageComponent;
        if (this.state.chats.length > 0) {
            messageComponent = (
                <div>
                                    
                    {this.state.showMessages && <button onClick={() => this.setState({ showMessages: false })}>Back</button>}
                    <div style={{ opacity: (this.state.points / 100), width: "100px", height: "100px", textAlign: "center"}}>
                        <img src={this.state.chats[this.state.messageIndex].picture} style={{width: "100%"}} alt={this.state.chats[this.state.messageIndex].name}></img>
                    </div> 
                    {renderedMessages}
                    <form>
                        <label for="enter-text">Message:</label>
                        <input type="text" class="form-control" id="enter-text" name="enter-text" onChange={this.handleChange} value={this.state.messageInput}></input>
                    </form>
                    <Button className="send-button" variant="primary" size="sm" onClick={(event) => {
                        event.preventDefault();
                        this.addMessage();
                        this.setState({
                            points: this.state.points + 10
                        })
                    }
                    }>send</Button>
                </div>
            )
        }
        return (
            <ol className="msg">
                {!this.state.showMessages ?
                    renderedChats
                    :
                    messageComponent}
            </ol>
        );
    }

}