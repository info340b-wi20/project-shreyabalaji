import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";


import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Messages from './messages';
import Likes from './Likes'
import HomeProfiles from './homeProfile';

export default class App extends Component { //export allows other things to use this class.
    render() {
      return (
        <div className="container">
            
          <Header></Header>

          <Switch>
            <Route exact path="/" component={HomeProfiles} />
            <Route path="/messages" component={Messages} />
            <Route path="/likes" component={Likes} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/" />
          </Switch>

          {/* <Messages></Messages> */}
          <Nav></Nav>
          <Footer></Footer>
        </div>
      );
    }
  }
