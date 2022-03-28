import React, { useState } from "react";
import DailyInfoCard from "../component/DailyInforCard";
import Header from "../component/Header";
import AppLayout from "./Layouts/AppLayout";
import style from "../style/home.module.css"
import RoomInforCard from "../component/RoomInforCard";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGrid3X3Gap } from "react-icons/bs"
import data from '../data/roomCard.json'
import BottomSheet from "../component/BottomSheet";

const Home = props => {
    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (
        <AppLayout>
            {loaderVisibility ? (
                <div style={{ position: "fixed", top: "0", right: "0", left: "0", bottom: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/images/loader.gif" alt="" />
                </div>
            ) : (
                ''
            )}
            <Header />
            <div className={style.homeContainer}>
                <DailyInfoCard />
                <RoomInforCard />
            </div>
            <div className={style.actionBtn}>
                <button onClick={() => setSheetVisible(true)}>
                    <AiOutlinePlus className="mr-2" />
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
            <BottomSheet sheetTitle='start room'
                setSheetVisible={(item) => setItemsVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail={data.find(item => item.id === cardId)}
                setItemsVisible={(item) => setItemsVisible(item)}
                setSheetCreateRoom={item => {
                    setLoaderVisibility(true);
                    setTimeout(() => {
                        setSheetCreateRoom(item);
                        setLoaderVisibility(false);
                    }, 1000)
                }}

            />
        </AppLayout>
    )
}

export default Home;