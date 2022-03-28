import React from "react";
import DailyInfoCard from "../component/DailyInforCard";
import Header from "../component/Header";
import AppLayout from "./Layouts/AppLayout";
import style from "../style/home.module.css"
import RoomInforCard from "../component/RoomInforCard";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGrid3X3Gap } from "react-icons/bs"

const Home = props => {
    return (
        <AppLayout>
            <Header />
            <div className={style.homeContainer}>
                <DailyInfoCard />
                <RoomInforCard />
            </div>
            <div className={style.actionBtn}>
                <button>
                    <AiOutlinePlus className="mr-2" />
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
        </AppLayout>
    )
}

export default Home;