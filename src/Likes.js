import React, { Component } from 'react';
import firebase from "firebase/app";

<<<<<<< HEAD

export default class Likes extends Component {
                 //export allows other things to use this class.
                state = {users: []};
                 componentDidMount() {
                   this.profileRef = firebase.database().ref("users");
                   this.profileRef.on("value", snapshot => {
                     let profileInfo = snapshot.val();
                     console.log(profileInfo);
                     if (profileInfo) {
                       this.setState({
                         users: profileInfo
                       });
                     }
                   });
                   // using the uid you can get profile info
                 }

                 onMessage= () => {
                    
                 }

                 render() {
                   // if(!this.state.users) return null;
                   let uid = firebase.auth().currentUser.uid;
                   let profileKeys = Object.keys(this.state.users);
                   let profileArray = profileKeys.map(key => {
                     let profileObj = this.state.users[key].profile;
                     profileObj.id = key;
                     return profileObj;
                   });
                   profileArray = profileArray.filter(
                     profile => profile.id !== uid
                   );
                   let profileItems = profileArray.map(profile => {
                     console.log(profile);
                     return (
                       <main>
                         <div class="container">
                           <div class="row">
                             <div class="col-md-6 col-xl-3 d-flex">
                               <div class="card mb-4">
                                 <div class="card-body">
                                   <div class="row">
                                     <img
                                       class="pb-3"
                                       src={profile.picture}
                                       alt="profile picture"
                                     />
                                     <div class="col-sm">
                                    <h2 class="card-title">{profile.name}, {profile.age}</h2>
                                       <p class="card-text">Dog or Cat?</p>
                                        <p>{profile.qone}</p>
                                       <p>Beach or mountains?</p>
                                     <p>{profile.qtwo}</p>
                                       <p>Perfect date?</p>
                                       <p>
                                        {profile.qthree}
                                       </p>
                                       <a href="#" class="btn btn-info" onClick={()=> {}}>Message</a>
                                       <a href="#" style={{ marginLeft: "10px" }} className="btn btn-info nah">Nvm!</a>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </main>
                     );
                   });
                   return (
                     <main>
                       <div className="container">
                         <div className="row">{profileItems}</div>
                       </div>
                     </main>
                   );
                 }
               }
=======
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
                                    <button class="btn btn-info">Message</button>
                                    <button style={{marginLeft: "10px"}} className="btn btn-info nah" onClick={this.toggleMenu} >Nvm</button>
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
                                <button class="btn btn-info">Message</button>
                                <button style={{marginLeft: "10px"}} className="btn btn-info nah" onClick={this.toggleMenu} >Nvm</button>                            </div>
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
                            <button class="btn btn-info">Message</button>
                            <button style={{marginLeft: "10px"}} className="btn btn-info nah" onClick={this.toggleMenu} >Nvm</button>                            </div>
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
                            <button class="btn btn-info">Message</button>
                            <button style={{marginLeft: "10px"}} className="btn btn-info nah" onClick={this.toggleMenu} >Nvm</button>                            </div>
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
>>>>>>> fe16de53e335c922cfb551ca0ccf3271089add43
