import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Profiless from './Profiless'

export default class App extends Component { //export allows other things to use this class.
    render() {
      return (
        <div className="container">
            <Header></Header>
            <Profiless></Profiless>
            <Nav></Nav>
            <Footer></Footer>

        </div>
      );
    }
  }
