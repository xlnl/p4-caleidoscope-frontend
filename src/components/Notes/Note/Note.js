import React from 'react';
import { useHistory } from 'react-router-dom'

import { 
    Box, 
    Button,
 } from '@chakra-ui/core';

import { deleteNote } from "../../../services/note.service"

const Note = (props) => {
    const noteId = props.noteId
    let history = useHistory();

    const deleteNoteHandler = () => {
        deleteNote(noteId)
        setTimeout(() => {
            history.push("/home")
            window.location.reload(false)
        }, 1000)
    }

    const updateNoteHandler = () => {
        history.push("/home")
        window.location.reload(false)
    }

    // refactor to work with colormode 
    return (
        <Box 
            bg="white" 
            opacity="0.5"
            w="100%" 
            p={2} 
            color={"gray"}
            borderRadius={3}
            >
        {props.note.block}
        <Button 
            textAlign="center"
            bg="transparent"
            onClick={updateNoteHandler}
        >...</Button>
        <Button 
            textAlign="center"
            bg="transparent"
            onClick={deleteNoteHandler}
        >x</Button>
        </Box>
    );
};

export default Note;





