import React, { Component } from "react";
import firebase from 'firebase';
import { Button } from "react-bootstrap";

export default class HomeProfiles extends Component {
  state = {
    users: {},
    showCard: false
  }
  //export allows other things to use this class.
  componentDidMount() {
    this.profileRef = firebase.database().ref("users")
    this.profileRef.on("value", (snapshot) => {
      let profileInfo = snapshot.val();
      console.log(profileInfo);
      if (profileInfo) {
        this.setState({
          users: profileInfo
        })
      }
    })
  }


  render() {
    // if(!this.state.users) return null;
    let profileKeys = Object.keys(this.state.users)
    let profileArray = profileKeys.map((key) => {
      let profileObj = this.state.users[key].profile;
      profileObj.id = key;
      return profileObj;
    })
    profileArray = profileArray.filter(
      profile => profile.id !== this.props.user.uid
    );
    let profileItems = profileArray.map((profile) => {
      console.log(profile)
      return (

        <IndivCard profile={profile} uid={this.props.user.uid}/>

      );
    })
    return (
      <main>
        <div className="container">
          <div className="row">
            {profileItems}
          </div>
        </div>
      </main>
    )
  }
}





class IndivCard extends Component {
  state = {
    showCard: true
  };

  toggleMenu = () => {
    this.setState({
      showCard: !this.state.showCard
    });
  };

  likeThem = () => {
    let profile = this.props.profile;
    let uid = this.props.uid;
    let profileRef = firebase.database().ref("users").child(uid).child("likes").child(profile.id);
    profileRef.set(profile);
    this.setState({showCard: false});
  }

  render() {
    if (!this.state.showCard) {
      return null;
    }
    let profile = this.props.profile;

    return (
      <div className="col-md-6 col-xl-3 d-flex">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm">
                <h2 className="card-title">
                  {profile.name}, {profile.age}
                </h2>
                <p className="card-text">What/who is your ideal date?:</p>
                <p>{profile.qone}</p>
                <p className="card-text">
                  What are you looking for on this site, a long term
                  relationship or fling?:
                </p>
                <p>{profile.qtwo}</p>
                <p className="card-text">
                  Dog or Cat? Beach or mountains? Rain or shine?:
                </p>
                <p>{profile.qthree}</p>
                <button className="btn btn-info"
                  onClick={this.likeThem}
                >
                  Like
                </button>
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-info nah unneed"
                  onClick={this.toggleMenu}
                >
                  Nahhh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
