import React, { Component } from 'react';

export default class Profile extends Component { //export allows other things to use this class.
    render() {
        return (
                <header class="border_color">
                    <div class="container">
                        <h1>Blind Cupid</h1>
                        <p class="lead">Build your profile and add your preferences for your true love!</p>
                    </div>
                </header>

                <section class="profile_image">
                    {/*code reference https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp-->*/}
                    <div class="container_profile">
                        <img class="propicture" src="img/user_pic.jpg" alt="profile picture"></img>
                    </div>
                </section>
                <section class="bio_info">
                    <h2>About You</h2>
                    <form>
                        <div>
                            <label for="answer">What/who is your ideal date?:</label>
                            <textarea class="form-control" id="answer" name="answer"></textarea>
                        </div>
                        <button type="done"><i class="fas fa-pencil-alt" aria-label="done"></i></button>
                    </form>
                    <form>
                        <div>
                            <label for="answer">What are you looking for on this site, a long term relationship or fling?:</label>
                            <textarea class="form-control" id="answer" name="answer"></textarea>
                        </div>
                        <button type="done"><i class="fas fa-pencil-alt" aria-label="done"></i></button>
                    </form>
                    <form>
                        <div>
                            <label for="answer">Dog or Cat? Beach or mountains? Rain or shine?:</label>
                            <textarea class="form-control" id="answer" name="answer"></textarea>
                        </div>
                        <button type="done"><i class="fas fa-pencil-alt" aria-label="done"></i></button>
                    </form>
                </section>
                <section class="preferences">
                    <h2>Preferences</h2>
                    <form>
                        <div>
                            <input type="radio" name="gender" value="male" checked> Male</input>
                            <input type="radio" name="gender" value="female"> Female</input>
                            <input type="radio" name="gender" value="other"> Non-Gender Conforming</input>
                            <input type="radio" name="gender" value="other"> Anyone &amp; Everyone!</input>
                        </div>
                    </form>
                    
                    <form class="location" action="/action_page.php">
                        Location:
                        <input type="text" name="location"></input>
                        How many miles radius:
                        <input type="text" name="radius"></input>
                    </form>

                    <form>
                        <div>
                            <p>Would you prefer someone in...</p>
                            <input type="radio" name="gender" value="male" checked> School</input>
                            <input type="radio" name="gender" value="other"> Work</input>
                        </div>
                    </form>

                    <input type="submit" value="Submit" aria-label="submit"></input> 
                </section>
        );
    }
}