import React, { Component } from 'react';
import firebase from 'firebase'

export default class Profile extends Component { //export allows other things to use this class.
    state = {
        qone: "",
        qtwo: "",
        qthree: "",
        gender: "",
        location: "",
        radius: "",
        schoolorwork: ""
    }

    updateProfile = () => {
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
        // using the uid you can get profile info
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
                <header class="border_color">
                    <div class="container">
                        <h1>Blind Cupid</h1>
                        <p class="lead">Build your profile and add your preferences for your true love!</p>
                    </div>
                </header>

                <section class="profile_image">
                    {/*code reference https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp-->*/}
                    <div class="container_profile">
                        <img class="propicture" src="img/user_pic.jpg" alt="profile picture"/>
                    </div>
                </section>
                <section class="bio_info">
                    <h2>About You</h2>
                    <form>
                        <div>
                            <label for="answer">What/who is your ideal date?:</label>
                            <textarea class="form-control" id="answer" value={this.state.qone} name="qone" onChange={this.onChange}></textarea>
                        </div> 
                        <button type="done"><i class="fas fa-pencil-alt" aria-label="done"></i></button>
                    </form>
                    <form>
                        <div>
                            <label for="answer">What are you looking for on this site, a long term relationship or fling?:</label>
                            <textarea class="form-control" id="answer" value={this.state.qtwo} name="qtwo" onChange={this.onChange} ></textarea>
                        </div>
                    </form>
                    <form>
                        <div>
                            <label for="answer">Dog or Cat? Beach or mountains? Rain or shine?:</label>
                            <textarea class="form-control" id="answer" vlaue={this.state.qthree} name="qthree" onChange={this.onChange}></textarea>
                        </div>
                    </form>
                </section>
                <section class="preferences">
                    <h2>Gender</h2>
                    <form>
                        <div>
                            <textarea class="form-control" id="answer" vlaue={this.state.gender} name="gender" onChange={this.onChange}></textarea>
                        </div>
                    </form>
                    
                    <form class="location">
                        Location:
                        <input type="text" value={this.state.location} name="location"></input>
                        How many miles radius:
                        <input type="text" name="radius" value={this.state.radius}></input>
                    </form>

                    <form>
                        <div>
                            <p>Would you prefer someone in...</p>
                            <div>
                                <label for="School"> School </label>
                                <input type="radio" name="school" checked></input>
                            </div>

                            <label for=" Work "> Work </label>
                            <input type="radio" name="work"></input>
                        </div>
                    </form>

                    <input className="btn btn-info" type="submit" value="Update" aria-label="submit" onClick={this.updateProfile}></input> 
                </section>
            </body>
        );
    }
}