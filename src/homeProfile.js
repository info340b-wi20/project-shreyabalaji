import React, { Component } from "react";
import firebase from 'firebase';

export default class HomeProfiles extends Component {
  state = {
    users: {}
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
    // using the uid you can get profile info
  }

  render() {
    // if(!this.state.users) return null;
    let profileKeys = Object.keys(this.state.users)
    let profileArray = profileKeys.map((key) => {
      let profileObj = this.state.users[key].profile;
      profileObj.id = key;
      return profileObj;
    })
    let profileItems = profileArray.map((profile) => {
      console.log(profile)
      return (

        <div class="col-md-6 col-xl-3 d-flex">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm">
                  <h2 class="card-title"></h2>
                  <p class="card-text">Dog or Cat?</p>
                  <p>{profile.qone}</p>
                  <p>Beach or mountains?</p>
                  <p>{profile.qtwo}</p>
                  <p>Perfect date?</p>
                  <p>{profile.qthree}</p>
                  <a href="#" class="btn btn-info">Like</a>
                  <a href="#" class="btn btn-info nah">Nahhh</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
    return (
      <main>
        <div class="container">
          <div class="row">
            {profileItems}
          </div>
        </div>
      </main>
    )
  }
}
