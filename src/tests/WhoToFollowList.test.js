import WhoToFollowList from '../components/lists/WhoToFollowList';
import {act, create} from "react-test-renderer";
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect.js';
import React from 'react';


const MOCKED_PEOPLE = [{
    "_id": "624e4e192ff7c5e0dbdbabd4",
    "username": "userListTest",
    "password": "bob123",
    "email": "bob@marley.com",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "624e4e292ff7c5e0dbdbabd6",
    "username": "userListTest",
    "password": "alice123",
    "email": "alice@marley.com",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "624e4e622ff7c5e0dbdbabda",
    "username": "dummy",
    "password": "dummy123",
    "email": "dummy@nowhere.com",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "624e594ca02ce05bf8411f8f",
    "username": "alice",
    "password": "$2b$10$arF25LNtKhZ9kDcjEsTJAO2xQXufzCefqg7GpZfy2/9LFsErdwF0S",
    "email": "1@1.com",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "624f21dc8bb24c7cfb49a970",
    "username": "bob",
    "password": "$2b$10$jLc38pKLWduH1Woq81.vku5wzqpe2qSXWB0y3dynJ4N6P4djPLRGe",
    "email": "1@1.com",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "62574133f57d0869f4e4974d",
    "username": "weizhang",
    "password": "$2b$10$Wz4JKZvsFKlzD.bnVOfr4esoUHwYW/48cm4ylXr61JJr9yzU6b53G",
    "email": "1@1.com",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "625774bf1e23ffd6a7318979",
    "username": "111",
    "password": "$2b$10$8nTouAV/IR9wJnmTK1x9tOn/bq1lNxmMALqRKjWoHN5GTMWzX5JgC",
    "email": "testemail1649898648231",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "62578e36eb0c7e9db3981fc9",
    "username": "yunmeng",
    "password": "$2b$10$c.FbgQhLbGGGLwmwXm3Ux.vsgInBOZmwdaavhVUyDhtK6EdE84MLi",
    "email": "testemail1649903558170",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "62587b3e386b470070d34a5d",
    "username": "123",
    "password": "$2b$10$5qvrhHCr0urQzItghumIRud1750E0vRnRjFTovNE61zAxu4tKB67a",
    "email": "123@GMAIL.COM",
    "salary": 50000,
    "__v": 0
}, {
    "_id": "625b12e72f818e63361a5096",
    "username": "456",
    "password": "$2b$10$imRdxAughPQHu9ld.b6tHet2lDpWSR1krj03EPeH606AbZStaJfKG",
    "email": "456@gmail.com",
    "salary": 50000,
    "__v": 0
}]

describe('who to follow list render', () => {
    test("show show the right data", async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({data: MOCKED_PEOPLE});
        let component;
        await act(async () => {
            component = create(
                <WhoToFollowList/>
            )
        });

        const root = component.root;
        const componentItems = root.findAllByProps({className: 'the-person-item'});
        expect(componentItems.length).toBe(MOCKED_PEOPLE.length);
    })
})