import Tuits from "../tuits";
import * as service from "../../services/dislikes-service";
import {useEffect, useState} from "react";

const MyDislikes = () => {
    const [dislikedTuits, setDislikedTuis] = useState([]);
    const findTuitsIDislike = () =>
        service.findAllTuitsDislikedByUser("me")
            .then((tuits) => setDislikedTuis(tuits));
    useEffect(findTuitsIDislike, []);

    return(
        <div>
            <h2>My Likes</h2>
            <Tuits tuits={dislikedTuits} refreshTuits={findTuitsIDislike}/>
        </div>
    );
};
export default MyDislikes;


// const MyDislikes = () => {
//     return(
//         <div>
//             <h1>My Dislikes</h1>
//         </div>
//     )
// }
// export default MyDislikes;