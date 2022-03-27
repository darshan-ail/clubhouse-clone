import React from "react";
import style from '../style/phoneConfirmation.module.css';
import { Link } from "react-router-dom";

const AllowNotification = (props) => {
    return (
        <div className={style.phoneConfirmation}>
            <div className="text-center">
                <h1 className="mb-4">Last, important step!</h1>
                <h1 className="mb-3">Enable notifications to know when people are speaking.</h1>
                <div className={style.notificationContainer}>
                    <div className="p3">
                        <h3>"Clubhouse" Would Like To Send You Notifications</h3>
                        <p>Notifications may include alerts, sounds and icon badges</p>
                    </div>
                    <div className={style.actionBtn}>
                        <Link exact to="/home">
                            Dont't Allow
                        </Link>
                        <Link exact to="/home">
                            Allow
                        </Link>
                        <img className={style.handIcon} src="/images/handIcon.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllowNotification;