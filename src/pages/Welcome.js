import React from "react";
import style from "../style/welcome.module.css"
import { Link } from "react-router-dom";

const Welcome = (props) => {
    return (
        <div className={style.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    Clubhouse is a place to listen in on fascinating conversations, talk with the world’s most amazing people, and make new friends from all walks of life. It’s so much more than just social media or audio – everyone can be a creator, all you need is your voice!
                </p>
                <p>
                    Explore conversations from the hallway. Discover millions of audio rooms, filled with fascinating and unexpected conversations. Search to find conversations on every topic — meditation, crypto, fashion, bluegrass, green energy, movies, breaking news, urban planning, social justice, or communities that somehow combine all of these things into one and then some. Can’t find the perfect topic? Start a room of your own to make new friends who love the same stuff as you!
                </p>
                <p>
                    Clubhouse is a place where you can create unforgettable moments with other humans, and leave feeling better than when you arrived. Welcome to our little community, we’re so happy to have you!
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link exact to='/get_username' className="primaryBtn d-flex align items-center mb-3">
                    Get your username {" "}
                </Link>
                <Link to='/invite'>
                    Have an invite text? Sign in
                </Link>
            </div>
        </div>
    )
}

export default Welcome;