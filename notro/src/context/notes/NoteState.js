import React from "react";
// import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    return (
        <NoteContext.Provider value={{ state:"state", update:"update" }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;