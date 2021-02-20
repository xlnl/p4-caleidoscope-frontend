import React from 'react';
import { useHistory } from 'react-router-dom'
import { Spacer } from '@chakra-ui/react'
import { 
    Box, 
    Button,
    Text,
    Flex,
} from '@chakra-ui/core';


import { deleteNote } from "../../../services/note.service"
// import EditForm from '../../Forms/EditForm';

const Note = ({ note, setNoteId }) => {
    const noteId = note.id
    let history = useHistory();

    const deleteNoteHandler = () => {
        deleteNote(noteId)
        setTimeout(() => {
            history.push("/home")
            window.location.reload(false)
        }, 1000)
    }

    // const updateNoteHandler = (id) => {
    //     EditForm(id)
    // }

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
            <Flex>
                <Box align="center">
                    <Text align="center">{note.block}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Button 
                        textAlign="center"
                        bg="transparent"
                        onClick={() => setNoteId(noteId)}
                    >...</Button>
                    <Button 
                        textAlign="center"
                        bg="transparent"
                        onClick={deleteNoteHandler}
                    >x</Button>
                </Box>
            </Flex>
        </Box>

    );
};

export default Note;





