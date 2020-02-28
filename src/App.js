import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Messages from './messages';
import Likes from './Likes'

export default class App extends Component { //export allows other things to use this class.
    render() {
      return (
        <div className="container">
            <Header></Header>
            <Messages></Messages>
            <Nav></Nav>
            <Footer></Footer>
        </div>
      );
    }
  }
