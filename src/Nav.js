import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Nav extends Component { //export allows other things to use this class.
    render() {
        return (
            // <head>
            //     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            // </head>
            <nav>
                <ul>
                    <li><a href="index"><FontAwesome className="fas fa-home" aria-label="home feed"/></a></li>
                    <li><a href="Likes"><FontAwesome className="far fa-heart" aria-label="Your likes"/></a></li>
                    <li><a href="Messages"><FontAwesome className="fas fa-comments" aria-label="messages"/></a></li>
                    <li><a href="Profile"><FontAwesome className="fas fa-user" aria-label="profile"/></a></li>
                </ul>
            </nav>
        );
    }
}