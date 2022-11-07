import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6368d532e490065dc2386f09",
            "user": "636629fdb89f4390a84d04d0",
            "title": "myTitle",
            "description": "wake up early",
            "tag": "general",
            "date": "2022-11-07T09:51:46.849Z",
            "__v": 0
          },
          {
            "_id": "6368d552e490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;