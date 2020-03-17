import React, { Component } from "react";
import firebase from "firebase/app";

export default class Chat extends Component {
                 //export allows other things to use this class.

	state = {
		chatInput: ""
	}

	componentDidMount() {
	let chatId = this.props.match.params.messageId;
	this.chatRef = firebase
		.database()
		.ref("messages")
		.child(chatId);
	this.chatRef.on("value", snapshot => {
		// this is
		let chats = snapshot.val() || {};
		let chatArray = Object.keys(chats).map(key => {
		let chatObj = chats[key];
		chatObj.id = key;
		return chatObj;
		});
		console.log(chatArray)
		this.setState({
		chats: chatArray
		});
	});
	}
	sendMessage = () => {
	this.chatRef
		.push({
		uid: this.props.user.uid,
		content: this.state.chatInput
		})
		.then(() => this.setState({ chatInput: "" }));
	};

	render() {
		 let renderedMessages = (this.state.chats || []).map(mess => {
       return (
         <li class="chat list-group-item">
           <div class={mess.uid === this.props.user.uid ? "message-me" : "message-them"}>
             <p>{mess.content}</p>
           </div>
         </li>
       );
     });
		return (
      <div>
		  <div>
			  {renderedMessages}
		  </div>
        <div>
          <input value={this.state.chatInput} onChange={(event) => this.setState({ chatInput: event.target.value })}></input>
		  <button onClick={this.sendMessage}>Send Message</button>
        </div>
      </div>
    );
	}
}