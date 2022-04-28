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
            <h2>My Following</h2>
            <FollowList className="follow-list" ppl={people} status={"My Followers"}/>
        </div>
    );
};
export default MyFollowers;
