import React,{ useState, useEffect } from 'react'
import {
    Flex,
    Box
} from '@chakra-ui/core';

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
    <Flex align="center" justifyContent="center">
        <Box
            p={8}
            maxWidth="full"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            align="center"
        >
            <Notes notes={notes} />
            <NoteForm noteId={noteId} setNote={setNote} user={user}/>
        </Box>
    </Flex>
);
};

export default Dashboard;
