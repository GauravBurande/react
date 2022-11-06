import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const defaultState = {
        "name": "Gaurav",
        "class": "5b"
    }

    const [state, setState] = useState(defaultState)

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Yash",
                "class": "12f"
            })
        }, 3000);
    }

    
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;