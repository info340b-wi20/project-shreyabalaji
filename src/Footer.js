import React, { Component } from 'react';

export default class Footer extends Component { //export allows other things to use this class.
    render() {
        return (
            <footer>
                <p style={{marginBottom: "20px"}}> Authors: Shreya &amp; Jenna &amp; Jasmine shreyajennajaz@blindcupid.com Blind Cupid &copy;</p>
            </footer>
        );
    }
}