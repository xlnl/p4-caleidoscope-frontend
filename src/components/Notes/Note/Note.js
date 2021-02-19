import React from 'react';
import { useHistory } from 'react-router-dom'

import { 
    Box, 
    Button,
 } from '@chakra-ui/core';

import { deleteNote } from "../../../services/note.service"

const Note = ({ note }) => {
    const noteId = note.id
    let history = useHistory();

    const deleteNoteHandler = () => {
      deleteNote(noteId)
      setTimeout(() => {
        history.push("/home")
        window.location.reload(false)
      }, 1000)
    }
    // refactor to work with colormode 
    return (
        <Box 
            bg="white" 
            w="100%" 
            p={2} 
            color={"gray"}
            >
        {note.block}
        <Button 
            textAlign="center"
            bg="transparent"
            onClick={deleteNoteHandler}
        >x</Button>
        </Box>
    );
};

export default Note;





