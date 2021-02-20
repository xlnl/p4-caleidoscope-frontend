import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Box,
    FormControl,
    Input,
    Button
} from '@chakra-ui/core';

import { updateNote } from '../../services/note.service';

export default function EditForm(props) {
    const [block, setBlock] = useState("")
    const person_id = props.user

    let history = useHistory();
    const form = useRef()

    useEffect(() => {
        setBlock(props.note)
    }, [])

    const onChangeNote = (e) => {
        console.log(props.note.id, block)
        setBlock(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log("before service", block)
        let noteId = props.noteId
        updateNote(noteId, block, person_id)
        .then(updatedBlock => {
            console.log("updatedBlock!!", updatedBlock.data.data)
            setBlock(updatedBlock.data.data)
            setTimeout(() => {
                history.push("/home")
                window.location.reload(false)
            }, 2000)
        }).catch((err) => {
            console.log("error updated note", err)
        })

    };

    return (
        <>
            <Box textAlign="left">
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <Input 
                        type="block"
                        placeholder="Edit a note"
                        onChange={onChangeNote}
                    />
                </FormControl>
                <Button
                        variantColor="yellow"
                        variant="outline"
                        type="submit"
                        width="full"
                        mt={4}
                        >
                        UPDATE
                </Button>
            </form>
            </Box>
        </>
    )
}


