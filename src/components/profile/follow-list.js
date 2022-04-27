import React, {useEffect, useState} from "react";
import FollowListItem from "./follow-list-item";

const FollowList = (ppl) => {
    return (
        <div>
            <ul className="list-group">
                {
                    ppl.map && ppl.map(person =>
                        <FollowListItem className="the-person" who={person}/>
                    )
                }
            </ul>
        </div>
    );
}

export default FollowList;