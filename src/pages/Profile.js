import React from "react";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { BsAt, BsUpload, BsPlus } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Profile = props => {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={style.header}>
                    <div className={`${exploreStyle.head} text-right mb-0`}>
                        <Link to="/home">
                            <img src="/images/arrow.png" className={exploreStyle.arrowIcon} alt="" />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img src="/images/user-img.jpg" alt="" className={style.profileImage} />
                <h4>Tom Jackson</h4>
                <p>@tom_jackson</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> followers
                    </p>
                    <p>
                        <span>51</span> following
                    </p>
                </div>
                <button>Add a bio</button>
                <div className="mb-4">
                    <button className="mb-0">
                        <AiOutlineTwitter /> Add Twitter
                    </button>
                    <button className="mb-0">
                        <AiOutlineInstagram /> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/user-img3.jpg" alt="" />
                    <div>
                        <p>Joined 24-05-2021</p>
                        <p>
                            Nominated by <span>Jerry James</span>
                        </p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </>
    )
}

export default Profile;