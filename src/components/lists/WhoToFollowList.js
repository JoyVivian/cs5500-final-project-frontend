import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import * as service from "../../services/users-service";
import * as followService from "../../services/follow-service";


const WhoToFollowList = () => {
    const [people, setPeople] = useState([]);
    const findPeople = () =>
        service.findAllUsers()
            .then((people) => setPeople(people));
    const followUser = (uid1, uid2) =>
        followService.userFollowsUser(uid1, uid2);

    useEffect(findPeople, []);

    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold col-color">
                <span className="handle-setting">Who to follow</span>
            </li>
            {
                people.map((person, idx) => {
                    return(
                        <WhoToFollowListItem className="the-person-item" key= {idx} who={person} followUser={followUser}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;