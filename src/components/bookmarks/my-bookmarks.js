import {useEffect, useState} from "react";
import * as service from "../../services/bookmark-service";
import Tuits from "../tuits";

const MyBookmarks = () => {
    const [bookmarkedTuits, setBookmarkedTuis] = useState([]);
    const findTuitsIBookmark = () =>
        service.findAllTuitsBookmarkedByUser("me")
            .then((tuits) => setBookmarkedTuis(tuits));
    useEffect(findTuitsIBookmark, []);

    return(
        <div>
            <h2>My Bookmarks</h2>
            <Tuits tuits = {bookmarkedTuits} refreshTuits={findTuitsIBookmark}/>
        </div>
    )
}

export default MyBookmarks;