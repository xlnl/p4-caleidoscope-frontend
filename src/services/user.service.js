import axios from 'axios';

const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/`

export const getCurrentUser = () => axios.get(url + "profile", { withCredentials: true });
export const logout = () => axios.get(url + "logout", { withCredentials: true });
