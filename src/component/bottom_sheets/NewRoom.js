import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill } from "react-icons/bs";

const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const cards = props.cardDetail;

    return (
        <h2>New Room Component</h2>
    )
}

export default NewRoom;