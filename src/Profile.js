import React, { Component } from 'react';
import firebase from 'firebase'

export default class Profile extends Component { //export allows other things to use this class.
    state = { 
        name: "",
        age: "",
        qone: "",
        qtwo: "",
        qthree: "",
        gender: "",
        location: "",
        radius: "",
        occupation: "",
        picture: "",
        id: "",
    }


    updateProfile = (event) => {
        event.preventDefault();
    this.profileRef.update(this.state);
    }

    componentDidMount() {
        this.profileRef = firebase.database().ref("users").child(firebase.auth().currentUser.uid).child("profile")
        this.profileRef.on("value", (snapshot) => {
            let profileInfo = snapshot.val();
            if (profileInfo) {
                this.setState({
                    ...profileInfo
                })
            }
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

        
    render() {
        console.log(this.state)
        return (
          <body>
            <header className="border_color">
              <div className="container">
                <h1>Create Your Profile!</h1>
                <p className="lead">
                  Add your preferences to build your profile and find your true
                  love! Hit 'update' at the bottom of the page to submit your
                  bio information.
                </p>
              </div>
            </header>

            <section className="profile_image">
              {/*code reference https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp-->*/}
              <div className="container_profile">
                <img
                  className="propicture"
                  src="img/user_pic.jpg"
                  alt="profile picture"
                />
              </div>
            </section>
            <section className="bio_info">
              <h2>About You</h2>
              <form>
                <div>
                  <label for="answer">Name:</label>
                  <input
                    className="input"
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.onChange}
                  ></input>
                </div>
              </form>
              <form>
                <div>
                  <label for="answer">Age:</label>
                  <input
                    className="input"
                    type="text"
                    value={this.state.age}
                    name="age"
                    onChange={this.onChange}
                  ></input>
                </div>
              </form>
              <form>
                <div>
                  <label for="answer">What/who is your ideal date?:</label>
                  <textarea
                    className="form-control"
                    id="answer"
                    value={this.state.qone}
                    name="qone"
                    onChange={this.onChange}
                  ></textarea>
                </div>
              </form>
              <form>
                <div>
                  <label for="answer">
                    What are you looking for on this site, a long term
                    relationship or fling?:
                  </label>
                  <textarea
                    className="form-control"
                    id="answer"
                    value={this.state.qtwo}
                    name="qtwo"
                    onChange={this.onChange}
                  ></textarea>
                </div>
              </form>
              <form>
                <div>
                  <label for="answer">
                    Dog or Cat? Beach or mountains? Rain or shine?:
                  </label>
                  <textarea
                    className="form-control"
                    id="answer"
                    value={this.state.qthree}
                    name="qthree"
                    onChange={this.onChange}
                  ></textarea>
                </div>
              </form>
            </section>
            <section className="preferences">
              <form>
                <div>
                  Gender:
                  <textarea
                    className="form-control"
                    id="answer"
                    value={this.state.gender}
                    name="gender"
                    onChange={this.onChange}
                  ></textarea>
                </div>
              </form>
              <form className="location">
                Location:
                <input
                  className="input"
                  type="text"
                  value={this.state.location}
                  name="location"
                  onChange={this.onChange}
                ></input>
              </form>
              <form className="location">
                How many miles radius:
                <input
                  className="input"
                  type="text"
                  name="radius"
                  value={this.state.radius}
                  onChange={this.onChange}
                ></input>
              </form>

              <form>
                <div>
                  <form className="occupation">
                    Would you prefer someone in work or school?:
                    <input
                      className="input"
                      type="text"
                      name="occupation"
                      value={this.state.occupation}
                      onChange={this.onChange}
                    ></input>
                  </form>
                </div>
              </form>
              <form>
                <div>
                  <label for="answer">Picture</label>
                  <input
                    className="input"
                    type="text"
                    value={this.state.picture}
                    //value = {firebase.storage().ref(firebase.auth().currentUser.uid).put("")}
                    name="picture"
                    onChange={this.onChange}
                  ></input>
                </div>
              </form>

              <input
                className="btn btn-info"
                type="submit"
                value="Update"
                aria-label="submit"
                onClick={this.updateProfile}
              ></input>
            </section>
          </body>
        );
    }
}