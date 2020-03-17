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

  // handleChange = (event) => {
  //   //store that new value in the state, rendering the Component
  //   this.setState({ messageInput: newValue });
  // }

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

        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm">
                  <h2 className="card-title">{profile.name}, {profile.age}</h2>
                  <p className="card-text">What/who is your ideal date?:</p>
                  <p >{profile.qone}</p>
                  <p className="card-text">What are you looking for on this site, a long term relationship or fling?:</p>
                  <p>{profile.qtwo}</p>
                  <p className="card-text">Dog or Cat? Beach or mountains? Rain or shine?:</p>
                  <p>{profile.qthree}</p>
                  <a href="#" className="btn btn-info">Like</a>
                  <a href="#" style={{marginLeft: "10px"}} className="btn btn-info nah unneed">Nahhh</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
