import React from 'react';
import { Box } from '@chakra-ui/core';


const Note = ({ note }) => {

  return (
    <Box bg="white" w="100%" p={2} color="purple">
        {note.block}
    </Box>
  );
};

export default Note;





