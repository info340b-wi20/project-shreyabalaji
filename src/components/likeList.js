import React, { Component } from 'react'; //import React Component
import Moment from 'react-moment';
import './Chirper.css'; //load module-specific CSS
import firebase from 'firebase/app';


//A list of chirps that have been posted
export default class ChirpList extends Component {
	constructor(props) {
		super(props);
		this.state = { chirps: [] };
	}

	componentDidMount() {
		this.chirpsRef = firebase.database().ref('chirps');
		this.chirpsRef.on('value', (snapshot) => {
			let value = snapshot.val();
			console.log("value is now: ", value);
			this.setState({ chirps: value });
		});
	}

	componentWillUnmount() {
		this.chirpsRef.off();
	}

	render() {
		if (!this.state.chirps) return null; //if no chirps, don't display

		// let chirpItems = []; //REPLACE THIS with an array of actual values!    
		let chirpKeys = Object.keys(this.state.chirps).map((key) => { //map array of keys into array of tasks
			let chirpObj = this.state.chirps[key]; //access element at that key
			chirpObj.id = key; //save the key for later referencing!
			return chirpObj; //the transformed object to store in the array
		});
		chirpKeys.sort((a, b) => b.time - a.time);
		let chirpItems = chirpKeys.map((eachChirp) => {
			let singleChirp = <ChirpItem
				key={eachChirp.id}
				chirp={eachChirp}
				currentUser={this.props.currentUser}
			/>
			return singleChirp;
		});

		return (
			<div className="container">
				{chirpItems}
			</div>);
	}
}

//A single Chirp
class ChirpItem extends Component {

	likeChirp = () => {
		let chirp = firebase.database().ref('chirps/' + this.props.chirp.id + '/likes');//.child(this.props.chirp.id).child('likes');
		let current = this.props.chirp.likes;
		let id = this.props.currentUser.uid;
		if (current === undefined) {
			current = {};
		}
		if (current[id] !== undefined) {
			current[id] = null;
		} else {
			current[id] = true;
		}
		chirp.set(current)
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		let chirp = this.props.chirp; //current chirp (convenience)
		//counting likes
		let likeCount = 0; //count likes
		let userLikes = false; //current user has liked
		if (chirp.likes) {
			likeCount = Object.keys(chirp.likes).length;
			if (chirp.likes[this.props.currentUser.uid]) //if user id is listed
				userLikes = true; //user liked!
		}

		return (
			<div className="row py-4 bg-white border">
				<div className="col-1">
					<img className="avatar" src={chirp.userPhoto} alt={chirp.userName + ' avatar'} />
				</div>
				<div className="col pl-4 pl-lg-1">

					<span className="handle">{chirp.userName} {/*space*/}</span>

					<span className="time"><Moment date={chirp.time} fromNow /></span>

					<div className="chirp">{chirp.text}</div>

					{/* A section for showing chirp likes */}
					<div className="likes">
						<i className={'fa fa-heart ' + (userLikes ? 'user-liked' : '')} aria-label="like" onClick={this.likeChirp} ></i>
						<span>{/*space*/} {likeCount}</span>
					</div>
				</div>
			</div>
		);
	}
}
