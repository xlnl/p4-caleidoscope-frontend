import React,{ useState, useEffect } from 'react'
// import {
//     Box
// } from '@chakra-ui/core';

import Notes from './Notes/Notes'
import NoteForm from './Forms/NoteForm'

import { findAll } from '../services/note.service';
import { currentUser } from '../services/user.service'

// renders posts and comments

const Dashboard = () => {
    const [notes, setNotes] = useState([])
    const [user, setUser] = useState('')
    const [noteId, setNoteId] = useState(null);

    useEffect(() => {
        currentUser()
        .then(res => {
            setUser(res.data.data[0])
            console.log(res.data.data[0].id)
        })
    }, [])

    useEffect(() => {
        findAll()
        .then(res => {
            setNotes(res.data.data)
            console.log(res.data.data)
        })
    }, [])

    const setNote = (id) => {
        setNoteId()
    }
        
return (
    <div>
        <Notes notes={notes} />
        <NoteForm noteId={noteId} setNote={setNote} user={user}/>
    </div>
);
};

export default Dashboard;
