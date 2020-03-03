//npm install @material-ui/core
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

//need to update state points for everytime the send button is clicked.
//need to add disable button functionality if nothing is in the text box.
//Do we return the state??

export default class NewMessage extends Component {
    state = {
        chosen: [],
        messageIndex: 0,
        chats: [],
        messageList: null,
        currentChat: 0,
        showMessages: false,
        textBox: ''
    };

    render() {
        return(
            <input
                className="" //can we add these two classes?
                label="new message"
                value={this.state.textBox}
                onChange={this.handleChange('textBox')}
                margin="normal"
            />
        )
    }
    render() {
        return (
            <Button className="send-button" variant="primary" size="sm">send</Button>
        )
    }
}

