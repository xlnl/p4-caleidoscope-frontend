import axios from 'axios';

const url = `${process.env.REACT_APP_CAL_API_URL}` + `/api/v1/user/profile`

export const currentUser = () => axios.get(url, { withCredentials: true });
export const logout = () => axios.get(url, { withCredentials: true });
