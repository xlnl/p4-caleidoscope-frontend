import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Box,
    FormControl,
    Input,
    Button
} from '@chakra-ui/core';

import { createNote } from '../../services/note.service';

export default function NoteForm({ user }) {
    const [block, setBlock] = useState('')
    const person_id = user.id
    let history = useHistory();


    const handleSubmit = async e => {
        e.preventDefault()

        console.log("before service", block)
        createNote(block, person_id)
        .then(createdBlock => {
            console.log(createdBlock.data.data)
            setBlock(createdBlock.data.data)
            setTimeout(() => {
                history.push("/home")
                window.location.reload(false)
            }, 2000)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <>
            <Box textAlign="left">
            <form onSubmit={handleSubmit}>
            <FormControl>
                <Input 
                    type="block"
                    placeholder="Write a note"
                    onChange={e => setBlock(e.target.value)}
                />
            </FormControl>
            <Button
                    variantColor="yellow"
                    variant="outline"
                    type="submit"
                    width="full"
                    mt={4}
                    >
                    ENTER
            </Button>
            </form>
            </Box>
        </>
    )
}


