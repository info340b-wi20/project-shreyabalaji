import React, { Component } from 'react';

export default class Header extends Component { //export allows other things to use this class.
    render() {
        return (
            <header className="border_color">
                <div className="container">
                    <h1>Blind Cupid</h1>
                    <p className="lead">True love is blind.</p>
                    {/*<img className="blindfoldcup" src="img/blindcupid.jpg" alt="logo cupid" />*/}
                </div>
            </header>
        );
    }
}