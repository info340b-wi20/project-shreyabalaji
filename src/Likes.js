import React, { Component } from 'react';
import firebase from "firebase/app";


export default class Likes extends Component {
    //export allows other things to use this class.
    state = { users: {} };
    componentDidMount() {
        let uid = firebase.auth().currentUser.uid;
        this.profileRef = firebase
            .database()
            .ref("users")
            .child(uid)
            .child("likes");
        this.profileRef.on("value", snapshot => {
            let profileInfo = snapshot.val();
            if (profileInfo) {
                this.setState({
                    users: profileInfo
                });
            }
        });
        // using the uid you can get profile info
    }

    messageThem = (profile) => {
        let uid = firebase.auth().currentUser.uid;
        let profileRef = firebase
            .database()
            .ref("users")
            .child(uid)
            .child("messages")
            .child(profile.id);
        profileRef.set(profile);
        firebase.database().ref("users").child(uid).child("likes").child(profile.id).remove();
    };

    render() {
        console.log(this.state.users);
        // if(!this.state.users) return null;
        let uid = firebase.auth().currentUser.uid;
        let profileKeys = Object.keys(this.state.users);
        let profileArray = profileKeys.map(key => {
            let profileObj = this.state.users[key];
            profileObj.id = key;
            return profileObj;
        });
        let profileItems = profileArray.map(profile => {
            console.log(profile);
            return (
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
                                    <h2 class="card-title">
                                        {profile.name}, {profile.age}
                                    </h2>
                                    <p class="card-text">Dog or Cat?</p>
                                    <p>{profile.qone}</p>
                                    <p>Beach or mountains?</p>
                                    <p>{profile.qtwo}</p>
                                    <p>Perfect date?</p>
                                    <p>{profile.qthree}</p>
                                    <button
                                        class="btn btn-info"
                                        onClick={() => this.messageThem(profile)}>
                                        Message
                                       </button>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        className="btn btn-info nah"
                                    >
                                        Nvm!
                                       </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
