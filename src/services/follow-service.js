import axios from "axios";

const BASE_URL=process.env.REACT_APP_BASE_URL;
const USERS_API=`${BASE_URL}/api/users`;

export const findAllUsers = () =>
    axios.get(USERS_API)
        .then(response => response.data);