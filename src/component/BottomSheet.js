import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";

const BottomSheet = props => {
    return (
        <SwipeableBottomSheet open={props.sheetVisible}
            onchange={() => {
                props.setSheetVisible(!props.sheetVisible)
                props.setItemsVisible(true)
            }}
            fullScreen={props.sheetTitle === 'room detail' ? true : false}
        >
            <div className={style.bottomSheetContainer} style={{ backgroundColor: props.sheetTitle === 'profile' ? 'transparent' : 'empty' }}>
                {/* <StartRoom setSheetCreateRoom={props.setSheetCreateRoom}
                    setSheetVisible={(item) => {
                        props.setSheetVisible(item);
                        props.setItemsVisible(true);
                    }} */}

                {props.sheetTitle === "new room" ? (
                    <NewRoom cardDetail={props.cardDetail}
                        setSheetVisible={(item) => {
                            props.setSheetVisible(item);
                            props.setItemsVisible(true);
                        }}
                    />
                ) : props.sheetTitle === "start room" ? (
                    <StartRoom setSheetCreateRoom={props.setSheetCreateRoom}
                        setSheetVisible={(item) => {
                            props.setSheetVisible(item);
                            props.setItemsVisible(true);
                        }}
                    />
                ) : ("")}
            </div>
        </SwipeableBottomSheet>
    )
}

export default BottomSheet;