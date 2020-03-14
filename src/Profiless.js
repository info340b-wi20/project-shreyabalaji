import React, { Component } from 'react';
import 'firebase/storage';

export default class Profiles extends Component { //export allows other things to use this class.
    render() {
        return (    
            <main>
                <div class="container">
                    <div class="row">  
                        <div class="col-md-6 col-xl-3 d-flex">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <img class="pb-3" src={userID.img} alt="profile picture" />
                                        <div class="col-sm">
                                            <h2 class="card-title">{userID.name}, {userID.age}</h2>
                                            <p class="card-text">Dog or Cat?</p>
                                            <p>{userID.answerone}</p>
                                            <p>Beach or mountains?</p> 
                                            <p>{userID.answertwo}</p>
                                            <p>Perfect date?</p> 
                                            <p>{userID.answerthree}</p>
                                            <a href="#" class="btn btn-info">Message</a> {/*add link to messages page*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}