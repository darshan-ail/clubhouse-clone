import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill } from "react-icons/bs";

const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const cards = props.cardDetail;

    return (
        <>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className={'d-flex align-items-center'}>
                        <a href="#" onClick={() => { props.setSheetVisible(false); }}>
                            <img src="/images/arrow.png" alt="" className={style.arrorIcon} />
                        </a>
                    </div>
                    <span>Hallway</span>
                    <div>
                        <AiOutlineFile />
                        <img src="/images/user-img.jpg" alt="" className={style.profileImg} />
                    </div>
                </div>
                <div className={style.roomDetailCard}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap"
                        style={{ padding: "0.5em 1em" }}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRoom;