import Tuits from "../tuits";
import * as service from "../../services/bookmark-service";
import {useEffect, useState} from "react";

const MyBookmarks = () => {
    const [bookmarkedTuits, setBookmarkedTuis] = useState([]);
    const findTuitsIBookmark = () =>
        service.findAllTuitsBookmarkedByUser("me")
            .then((tuits) => setBookmarkedTuis(tuits));
    useEffect(findTuitsIBookmark, []);

    return(
        <div>
            <Tuits tuits={bookmarkedTuits} refreshTuits={findTuitsIBookmark}/>
        </div>
    );
};
export default MyBookmarks;