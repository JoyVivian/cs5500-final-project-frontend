import WhoToFollowListItem from "../components/lists/WhoToFollowListItem";
import {render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

test('', () => {
    render(
        <HashRouter>
            <WhoToFollowListItem who={{
                _id: '123',
                username: 'test',
                password: 'bob123',
                email: 'bob@123.com',
                salary: "50000"
            }} followUser={() => {}}/>
        </HashRouter>
    );
});