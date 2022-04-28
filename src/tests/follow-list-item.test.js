import FollowListItem from "../components/profile/follow-list-item";
import {render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

test('follow list item render', () => {
    render(
        <HashRouter>
            <FollowListItem who={{"_id":"6268b960fb8ec1fbdcb61d95",
                "user":"624e594ca02ce05bf8411f8f",
                "followedBy":{"_id":"62587b3e386b470070d34a5d",
                    "username":"123",
                    "password":"$2b$10$5qvrhHCr0urQzItghumIRud1750E0vRnRjFTovNE61zAxu4tKB67a",
                    "email":"123@GMAIL.COM",
                    "salary":50000,"__v":0},
                "__v":0}} followUser={() => {}}/>
        </HashRouter>
    );
});