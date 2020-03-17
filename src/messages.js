import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/database';
import { Link } from "react-router-dom";

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
        messages: [],
        messageList: null,
        currentChat: 0,
        showMessages: false,
        messageInput: '',
        points: 0
    };


    componentDidMount() {
        let uid = firebase.auth().currentUser.uid;
        firebase
        .database()
        .ref("users")
        .child(uid)
        .child("messages").on("value", snapshot => {
            let messageObj = snapshot.val();
            console.log(messageObj)
            if (messageObj) {
                 let messageArray = Object.keys(messageObj).map(key => {
                   let obj = messageObj[key];
                   obj.id = key;
                   return obj;
                 });
                this.setState({
                    messages: messageArray
                });
            }
        })
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
        let points = this.state.points;
        this.setState({
            showMessages: true,
            messageList: messages.messages,
            messageIndex: index,
        })
    }

    // addMessage = () => {
    //     let messageInput = this.state.messageInput;
    //     let messageObject = { "sender": "me", "reciever": "them", "content": messageInput };
    //     let messageIndex = this.state.messageIndex;
    //     this.state.chats[messageIndex].messages.push(messageObject);
    //     this.setState({
    //         chats: this.state.chats,
    //         messageInput: ''
    //     })
    // }

    render() {
        console.log(this.state.chats);
            
        let renderedChats = this.state.messages.map((chat, index) => {
            let uid1 = firebase.auth().currentUser.uid;
            let uid2 = chat.id; // the id you get when clicking on a chat
            let combined = uid1 > uid2 ? uid1 + "_" + uid2 : uid2 + "_" + uid1;
            return (
              <Link to={"messages/" + combined}>
                <li class="chat list-group-item">
                  <div>
                    <div style={{ opacity: this.state.messages.length / 10 }}>
                      <img
                        style={{
                          width: "50%",
                          marginLeft: "auto",
                          marginRight: "auto"
                        }}
                        class="chat-pic chat img"
                        src={chat.picture}
                        alt={chat.name}
                      ></img>
                    </div>
                  </div>
                  <div class="chat-content chat">
                    <h4>{chat.name}</h4>
                    <div>{chat.lastMessage}</div>
                  </div>
                </li>
              </Link>
            );
        })

        let renderedMessages = (this.state.messageList || []).map((mess) => {
            return <li class="chat list-group-item"><div class={mess.sender === "me" ? "message-me" : "message-them"}><p>{mess.content}</p></div></li>
        })

        // let messageComponent;
        // if (this.state.messages.length > 0) {
        //     messageComponent = (
        //         <div>
                                    
        //             {this.state.showMessages && <button onClick={() => this.setState({ showMessages: false })}>Back</button>}
        //             <div style={{ opacity: (this.state.points / 100), width: "100px", height: "100px", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
        //                 <img src={this.state.chats[this.state.messageIndex].picture} style={{width: "100%"}} alt={this.state.chats[this.state.messageIndex].name}></img>
        //             </div> 
        //             {renderedMessages}
        //             <form>
        //                 <label for="enter-text">Message:</label>
        //                 <input type="text" class="form-control" id="enter-text" name="enter-text" onChange={this.handleChange} value={this.state.messageInput}></input>
        //             </form>
        //             <Button className="send-button" variant="primary" size="sm" onClick={(event) => {
        //                 event.preventDefault();
        //                 this.addMessage();
        //                 this.setState({
        //                     points: this.state.points + 10
        //                 })
        //             }
        //             }>send</Button>
        //         </div>
        //     )
        // }
        return (
            <ol className="msg">

                    {renderedChats}
            </ol>
        );
    }

}