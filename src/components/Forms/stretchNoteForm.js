// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'
// import {
//     Box,
//     FormControl,
//     Input,
//     Button
// } from '@chakra-ui/core';

// import { createNote, updateNote } from '../../services/note.service';

// export default function fullNoteForm(props) {
//     const [block, setBlock] = useState('')
//     const person_id = props.user.id
//     let history = useHistory();


//     const handleSubmit = async e => {
//         e.preventDefault()

//         console.log("before service", block)
//         if (!props.noteId) {
//             createNote(block, person_id)
//             .then(createdBlock => {
//                 console.log("createdBlock!!", createdBlock.data.data)
//                 setBlock(createdBlock.data.data)
//                 setTimeout(() => {
//                     history.push("/home")
//                     window.location.reload(false)
//                 }, 2000)
//             }).catch((err) => {
//                 console.log("error making note", err)
//             })
//         } else {
//             console.log(props.noteId)
//             updateNote(props.noteId, block)
//             .then(updatedBlock => {
//                 console.log("updatedBlock!!", updatedBlock.data.data)
//                 setBlock(updatedBlock.data.data)
//                 setTimeout(() => {
//                     history.push("/home")
//                     window.location.reload(false)
//                 }, 2000)
//             }).catch((err) => {
//                 console.log("error updating note", err)
//             })
//         }

//     };

//     return (
//         <>
//             <Box textAlign="left">
//             <form onSubmit={handleSubmit}>
//             <FormControl>
//                 <Input 
//                     type="block"
//                     placeholder="Write a note"
//                     onChange={e => setBlock(e.target.value)}
//                 />
//             </FormControl>
//             <Button
//                     variantColor="yellow"
//                     variant="outline"
//                     type="submit"
//                     width="full"
//                     mt={4}
//                     >
//                     ENTER
//             </Button>
//             </form>
//             </Box>
//         </>
//     )
// }


