import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import * as service from "../../services/users-service";

const WhoToFollowList = () => {
    const [people, setPeople] = useState([]);
    const findPeople = () =>
        service.findAllUsers()
            .then((people) => setPeople(people));
    useEffect(findPeople, []);

    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold col-color">
                <span className="handle-setting">Who to follow</span>
            </li>
            {
                people.map(person => {
                    return(
                        <WhoToFollowListItem who={person}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;