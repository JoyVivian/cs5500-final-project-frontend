import React, {useEffect, useState} from "react";
import FollowListItem from "./follow-list-item";

const FollowList = ({ppl}) => {
    return (
        <ul className="list-group">
            {
                ppl.map && ppl.map(person => {
                    return(

                        <FollowListItem who={person}/>

                    );
                })
            }
        </ul>
    );
}
export default FollowList;