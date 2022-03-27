import React from "react";
import DailyInfoCard from "../component/DailyInforCard";
import Header from "../component/Header";
import AppLayout from "./Layouts/AppLayout";
import style from "../style/home.module.css"
import RoomInforCard from "../component/RoomInforCard";

const Home = props => {
    return (
        <AppLayout>
            <Header />
            <div className={style.homeContainer}>
                <DailyInfoCard />
                <RoomInforCard />
            </div>
        </AppLayout>
    )
}

export default Home;