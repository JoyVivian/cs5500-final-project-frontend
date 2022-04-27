import FollowListItem from "../components/profile/follow-list-item";
import {render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

test('', () => {
    render(
        <HashRouter>
            <FollowListItem who={{
                _id: '123',
                username: 'test',
                password: 'bob123',
                email: 'bob@123.com',
                salary: "50000"
            }} followUser={() => {}}/>
        </HashRouter>
    );
});