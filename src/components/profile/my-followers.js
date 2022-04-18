import FollowList from "./follow-list";
import * as service from "../../services/follow-service";
import {useEffect, useState} from "react";

const MyFollowers = () => {
    const [people, setPeople] = useState([]);
    const findFollowers = () => {
        service.findFollowers("me")
            .then((people) => setPeople(people));
    }

    useEffect(findFollowers, []);

    return(
        <div>
            <h2>My Followers</h2>
            <FollowList ppl={people} status={"My Followers"}/>
        </div>
    );
};
export default MyFollowers;
