import React, { Component } from 'react';

export default class Messages extends Component { //export allows other things to use this class.
    state = {
        chosen: [],
        messageIndex: 0,
        chats: [],
        messageList: null,
        currentChat: 0,
        showMessages: false
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

    clickedChat = (index) => {
        console.log(index)
        let chats = this.state.chats;
        let messages = chats[index];
        this.setState({
            showMessages: true,
            messageList: messages.messages
        })
    }

    render() {
        console.log(this.state.chats);
        let renderedChats = this.state.chats.map((chat, index) => {
            return (
                <li class="chat list-group-item" onClick={() => this.clickedChat(index)}>
                    <div>
                        <img class="chat-pic chat img" src={chat.picture} alt={chat.name}></img>
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
        return (
            <ol className="msg">
                {!this.state.showMessages ?
                renderedChats
                :
                renderedMessages}
            </ol>
        );
	}
	
}