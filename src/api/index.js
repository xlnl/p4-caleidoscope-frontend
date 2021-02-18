import axios from 'axios'

const appUrl = process.env.REACT_APP_CAL_API_URL

import axios from 'axios';
import authHeader from '../utilities/authHeader.utilities'

const urlPost = "http://localhost:8080/home/";

// follow up with instructors if we can pass an array like this 
export const findAll = () => axios.get(urlPost);
export const findOne = (postId) => axios.get(urlPost + `${postId}`);
export const createPost = (postData) => {
    return axios.post(urlPost + "upload", {
        postData
    });
}
export const likePost = (postId) => axios.put(`${urlPost}${postId}/likePost`);
export const updatePost = (postId, updatedPost) => axios.put(urlPost + `${postId}`, updatedPost);
export const deletePost = (postId, userId) => {
    return axios({
        method: 'DELETE',
        url: urlPost + `${postId}`,
        userId: userId,
        headers: authHeader()
    })
}
