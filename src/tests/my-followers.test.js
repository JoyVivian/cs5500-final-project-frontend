import MyFollowers from "../components/profile/my-followers";
import {act, create} from "react-test-renderer";
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect.js';
import React from 'react';
import {render} from "@testing-library/react";
import WhoToFollowList from "../components/lists/WhoToFollowList";


const MOCKED_FOLLOWERS = [{
    "_id": "62697410aea8b3f1083e1935",
    "user": "624f21dc8bb24c7cfb49a970",
    "followedBy": {
        "_id": "62578e36eb0c7e9db3981fc9",
        "username": "yunmeng",
        "password": "$2b$10$c.FbgQhLbGGGLwmwXm3Ux.vsgInBOZmwdaavhVUyDhtK6EdE84MLi",
        "email": "testemail1649903558170",
        "salary": 50000,
        "__v": 0
    },
    "__v": 0
}, {
    "_id": "62697411aea8b3f1083e1938",
    "user": "624f21dc8bb24c7cfb49a970",
    "followedBy": {
        "_id": "62587b3e386b470070d34a5d",
        "username": "123",
        "password": "$2b$10$5qvrhHCr0urQzItghumIRud1750E0vRnRjFTovNE61zAxu4tKB67a",
        "email": "123@GMAIL.COM",
        "salary": 50000,
        "__v": 0
    },
    "__v": 0
}, {
    "_id": "62697411aea8b3f1083e193b",
    "user": "624f21dc8bb24c7cfb49a970",
    "followedBy": {
        "_id": "625b12e72f818e63361a5096",
        "username": "456",
        "password": "$2b$10$imRdxAughPQHu9ld.b6tHet2lDpWSR1krj03EPeH606AbZStaJfKG",
        "email": "456@gmail.com",
        "salary": 50000,
        "__v": 0
    },
    "__v": 0
}]


jest.mock('../components/profile/follow-list', () => () =>  <div id="myFollowList">Follow List</div>);

describe("my followers list render", () => {
    test("Follow List component can be rendered correctly.", async () => {
        const {container} = render(<MyFollowers />);
        const followList = container.querySelector('div#myFollowList');

        expect(followList).toBeInTheDocument();
    })
})