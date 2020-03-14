import React, { Component } from 'react';

export default class Likes extends Component { //export allows other things to use this class.
    render() {
      return (
        <main>
            <div class="container">
                <div class="row">  
                    <div class="col-md-6 col-xl-3 d-flex">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <img class="pb-3" src="img/bobbi.jpg" alt="profile picture" />
                                <div class="col-sm">
                                    <h2 class="card-title">Bobbi, 29</h2>
                                    <p class="card-text">Dog or Cat?</p>
                                    <p>DOGS!</p>
                                    <p>Beach or mountains?</p> 
                                    <p>Beach...I am from LA!</p>
                                    <p>Perfect date?</p> 
                                    <p>Doing something active, 
                                    like a hike :)</p>
                                    <a href="#" class="btn btn-info">Message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3 d-flex">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <img class="pb-3" src="img/gavin.jpg" alt="profile picture" />
                                <div class="col-sm">
                                <h2 class="card-title">Gavin, 32</h2>
                                <p class="card-text"><em>Dog or Cat?</em></p> 
                                    <p>I have 3 kittens</p>
                                    <p><em>Beach or mountains?</em></p> 
                                    <p>Mountains, I love bouldering.</p>
                                    <p><em>Perfect date?</em></p> 
                                    <p>Doing anything that will</p>
                                    <p>let us really get to know eachother!</p>
                                <a href="#" class="btn btn-info">Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col-md-6 col-xl-3 d-flex">
                    <div class="card mb-4">
                        <div class="card-body">
                        <div class="row">
                            <img class="pb-3" src="img/sam.jpg" alt="profile picture" />
                            <div class="col-sm">
                            <h2 class="card-title">Sam, 25</h2>
                            <p class="card-text"><em>Dog or Cat?</em></p>
                            <p> Allergic to both..oops!</p>
                            <p><em>Beach or mountains?</em></p>
                            <p>Beaches for sure.</p>
                            <p><em>Perfect date?</em> Going to a local indie concert and grabbing drinks after!</p>
                            <a href="#" class="btn btn-info">Message</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3 d-flex">
                    <div class="card mb-4">
                        <div class="card-body">
                        <div class="row">
                            <img class="pb-3" src="img/trina.jpg" alt="profile picture" />
                            <div class="col-sm">
                            <h2 class="card-title">Trina, 31</h2>
                            <p class="card-text"><em>Dog or Cat?</em></p>
                            <p>Cats :)</p>
                            <p><em>Beach or mountains?</em></p>
                            <p>Neither! I love forests.</p>
                            <p><em>Perfect date?</em></p>
                            <p>Dates make me nervous so anything as chilled out as possible.</p>
                            <a href="#" class="btn btn-info">Message</a>
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