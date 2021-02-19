import React from 'react';
import { Grid, Box } from '@chakra-ui/core';

import Note from '../Notes/Note/Note'


const Notes = ({ notes }) => {

    const notesData = notes

    return (
        <Box>
            <Grid>
                {notesData.map((note) => (
                <Grid key={note.id}>
                    <Note note={note} />
                </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default Notes;





