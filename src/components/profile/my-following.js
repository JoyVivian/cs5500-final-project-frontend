import FollowList from "./follow-list";
import * as service from "../../services/follow-service";
import {useEffect, useState} from "react";

const MyFollowing = () => {
    const [people, setPeople] = useState([]);
    const findFollowing = () => {
        service.findFollowing("me")
            .then((people) => setPeople(people));
    }

    useEffect(findFollowing, []);

    return(
        <div>
            <h2>My Followers</h2>
            <FollowList ppl={people} status={"My Following"}/>
        </div>
    );
};
export default MyFollowing;