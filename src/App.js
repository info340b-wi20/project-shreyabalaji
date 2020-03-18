import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";


import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Messages from './messages';
import Likes from './Likes'
import HomeProfiles from './homeProfile';
import SignUpForm from './components/signup/signupform';
import firebase from 'firebase/app';
import 'firebase/auth';
import Chat from './Chat';
import { Alert } from 'reactstrap';

  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    this.authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) { //if exists, then we logged in
        console.log("Logged in as", firebaseUser.email);
        this.setState({ user: firebaseUser, loading: false });
      } else {
        console.log("Logged out");
        this.setState({ user: null, loading: false });
      }
    })
  }

  componentWillUnmount() {
    this.authUnRegFunc() //stop listening for auth changes
  }

  //A callback function for registering new users
  handleSignUp = (email, password, handle, avatar) => {
    this.setState({ errorMessage: null }); //clear any old errors
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let firebaseUser = userCredential.user;
        console.log("User created!", firebaseUser); // check
        let updatePromise = firebaseUser.updateProfile({         //add the username to their account     
          displayName: handle,
          photoURL: avatar
        });
        return updatePromise;
      })
      .then(() => {
        this.setState((prevState) => {
          let updatedUser = { ...prevState.user };
          return { user: updatedUser }; //updating the state
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      })
  }

  //A callback function for logging in existing users
  handleSignIn = (email, password) => {
    this.setState({ errorMessage: null });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      })
  }

  handleSignOut = () => {
    this.setState({ errorMessage: null }); //clear
    firebase.auth().signOut();
  }

  render() {

    let content = null; //content to render

    if (!this.state.user) { //if logged out, show signup form
      content = (
        <div className="container">
          <h1>Sign In</h1>
          <SignUpForm
            signUpCallback={this.handleSignUp}
            signInCallback={this.handleSignIn}
          />
        </div>
      );
    }
    else { //if logged in, show welcome message
      content = (
        <div>
          {/* log out button is child element */}
          <div className="container">
            {this.state.user && (
              <button
                style={{ marginTop: "4px", marginRight: "4px" }}
                className="btn btn-info logout pull-right"
                onClick={this.handleSignOut}
              >
                Log Out
              </button>
            )}
            <Alert color="danger">Fill out your profile before continuing!</Alert>
            <Header></Header>
            <Switch>
              <Route
                exact
                path="/"
                render={renderProps => (
                  <Profile {...renderProps} user={this.state.user} />
                )}
              />
              <Route exact path="/messages" component={Messages} />
              <Route
                path="/messages/:messageId"
                render={renderProps => (
                  <Chat {...renderProps} user={this.state.user} />
                )}
              />
              <Route path="/likes" component={Likes} />
              <Route path="/homeProfile" component={HomeProfiles} />
              <Redirect to="/" />
            </Switch>
            <Footer></Footer>
            <Nav></Nav>
          </div>
        </div>
      );
    }

    if (this.state.loading) {
      content = (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
        </div>
      );
    }

    return (
      <div>
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }
        {content}
      </div>
    );
  }
}

export default App;
