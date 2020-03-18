import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


export default class Nav extends Component { //export allows other things to use this class.
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/HomeProfiles"><FontAwesome className="fas fa-home" aria-label="home feed"/></Link></li>
                    <li><Link to="/Likes"><FontAwesome className="far fa-heart" aria-label="Your likes"/></Link></li>
                    <li><Link to="/messages"><FontAwesome className="fas fa-comments" aria-label="messages"/></Link></li>
                    <li><Link to="/"><FontAwesome className="fas fa-user" aria-label="profile"/></Link></li>
                </ul>
            </nav>
        );
    }
}