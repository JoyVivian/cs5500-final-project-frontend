import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

export const userFollowsUser = (uid1, uid2) =>
    api.put(`${USERS_API}/${uid1}/follows/${uid2}`)
        .then(response => response.data);

export const findFollowers = (uid) =>
    api.get(`${USERS_API}/${uid}/followers`)
        .then(response => response.data);

export const findFollowing = (uid) =>
    api.get(`${USERS_API}/${uid}/following`)
        .then(response => response.data);
