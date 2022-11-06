import React, { useContext } from 'react'
import { useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(()=> {
    a.update();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      this is about {a.state.name} and he's in class {a.state.class}
    </div>
  )
}

export default About
