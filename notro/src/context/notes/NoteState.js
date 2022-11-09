import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6368d532e494231120065dc2386f09",
            "user": "636629fdb89f4390a84d04d0",
            "title": "myTitle",
            "description": "wake up early",
            "tag": "general",
            "date": "2022-11-07T09:51:46.849Z",
            "__v": 0
          },
          {
            "_id": "6368d5524342e490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e3443490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e43490065dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e490021365dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          },
          {
            "_id": "6368d552e49003265dc2386f0c",
            "user": "636629fdb89f4390a84d04d0",
            "title": "meeting",
            "description": "for web design at 4pm",
            "tag": "work",
            "date": "2022-11-07T09:52:18.200Z",
            "__v": 0
          }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = (title, description, tag)=>{
      console.log('adding a new note')
      const note = {
        "_id": "6368d552e49006335dc2386f0c",
        "user": "636629fdb89f4390a84d04d0",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-11-07T09:52:18.200Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id)=>{
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }

    // Edit a note
    const editNote = (id, title, description, tag)=>{
      
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;