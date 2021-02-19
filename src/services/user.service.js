import axios from 'axios';

const url = `${process.env.REACT_APP_CAL_API_URL}` + `/api/v1/user/`

export const currentUser = () => axios.get(url + "profile", { withCredentials: true });
export const logout = () => axios.get(url + "logout", { withCredentials: true });
