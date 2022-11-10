import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5500'
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all notes
  const fetchNotes = async () => {
    const url = `${host}/api/notes/fetchallnotes`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2NjI5ZmRiODlmNDM5MGE4NGQwNGQwIn0sImlhdCI6MTY2NzY0NTExNn0.shrhIROIJj674kCIAYdUIhJk0k628rkrM4vXRJ8GSx8'
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a note
  const addNote = async (title, description, tag) => {
    const url = `${host}/api/notes/addnote`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2NjI5ZmRiODlmNDM5MGE4NGQwNGQwIn0sImlhdCI6MTY2NzY0NTExNn0.shrhIROIJj674kCIAYdUIhJk0k628rkrM4vXRJ8GSx8'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()
    fetchNotes()
    console.log(json)
  }

  // Delete a note
  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2NjI5ZmRiODlmNDM5MGE4NGQwNGQwIn0sImlhdCI6MTY2NzY0NTExNn0.shrhIROIJj674kCIAYdUIhJk0k628rkrM4vXRJ8GSx8'
      },
    });
    const json = await response.json()
    fetchNotes()
    console.log(json)
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {

    //API call
    const url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2NjI5ZmRiODlmNDM5MGE4NGQwNGQwIn0sImlhdCI6MTY2NzY0NTExNn0.shrhIROIJj674kCIAYdUIhJk0k628rkrM4vXRJ8GSx8'
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = response.json()
    console.log(json)

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, fetchNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;