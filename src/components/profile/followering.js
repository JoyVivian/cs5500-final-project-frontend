import FollowList from "./follow-list";
import * as service from "../../services/follow-service";
import {useEffect, useState} from "react";

const MyFollowing = () => {
    const [people, setPeople] = useState([]);
    const findAllFollowers = () =>
        service.findFollowers("me")
            .then((people) => setPeople(people));
    useEffect(findAllFollowers, []);
    return(
        <div>
            <h2>My Following</h2>
            <FollowList ppl={people} status={findAllFollowers}/>
        </div>
    );
};
export default MyFollowing;