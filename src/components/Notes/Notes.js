import React from 'react';
import { Box } from '@chakra-ui/core';

import Note from '../Notes/Note/Note'


const Notes = ({ notes, setNoteId }) => {

    const notesData = notes

    return (
        <Box>
            <Box>
                {notesData.map((note) => (
                <Box 
                    key={note.id}
                    p={1}
                >
                    <Note note={note} setNoteId={setNoteId} />
                </Box>
                ))}
            </Box>
        </Box>
    )
};

export default Notes;





