import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

const Alert = () => {
    const context = useContext(noteContext)
    const { alert } = context;
    return (
        alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
            {alert}
        </div>
    )
}

export default Alert
