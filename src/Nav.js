import React, { Component } from 'react';
//import 'font-awesome/css/font-awesome.min.css';

export default class Nav extends Component { //export allows other things to use this class.
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="index.html"><i className="fas fa-home" aria-label="home feed"></i></a></li>
                    <li><a href="likes.html"><i className="far fa-heart" aria-label="Your likes"></i></a></li>
                    <li><a href="messaging.html"><i className="fas fa-comments" aria-label="messages"></i></a></li>
                    <li><a href="profile.html"><i className="fas fa-user" aria-label="profile"></i></a></li>
                </ul>
            </nav>
        );
    }
}