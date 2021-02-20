import React from 'react';
import { Grid, Box } from '@chakra-ui/core';

import Note from '../Notes/Note/Note'


const Notes = ({ notes, setCurrentId }) => {

    const notesData = notes

    return (
        <Box>
            <Box>
                {notesData.map((note) => (
                <Box 
                    key={note.id}
                    p={1}
                >
                    <Note note={note} setCurrentId={setCurrentId} />
                </Box>
                ))}
            </Box>
        </Box>
    )
};

export default Notes;





