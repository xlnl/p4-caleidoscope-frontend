import axios from 'axios';

const url = `${process.env.REACT_APP_BACKEND_URL}` + `/api/v1/note/`

export const findAll = () => axios.get(url, { withCredentials: true });
export const findOne = (noteId) => axios.get(url + `${noteId}`, { withCredentials: true });
export const createNote = (block, person_id) => {
    return axios.post(url + "new", {
        block,
        person_id
    }, { withCredentials: true });
}
export const updateNote = (noteId, block, person_id) => {
    return axios.put(url + `${noteId}/update`, {
        block,
        person_id
    }, { withCredentials: true });
}
export const deleteNote = (noteId) => axios.delete(url + `${noteId}`, { withCredentials: true })

// export const deletePost = (noteId) => {
//     return axios({
//         method: 'DELETE',
//         url: url + `${noteId}`
//     },
//     { withCredentials: true })
// }
