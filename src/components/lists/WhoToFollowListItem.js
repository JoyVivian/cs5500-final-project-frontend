import React, {useState} from "react";
const WhoToFollowListItem = ({who, followUser}) =>{
    const [btnColor, setBtnColor] = useState("blue");
    const handleClick = () => {
        followUser("me", who._id);
        btnColor === "blue" ? setBtnColor("gray") : setBtnColor("blue");
    }
    return(
        <>
           <li className="list-group-item col-color">
                <div className="row">
                    <div className="col-3">
                        <img className="ttr-tuit-avatar-logo rounded-circle" style={{width: 48, height: 48}} src={`../images/${who.username}.jpg`}/>
                    </div>
                    <div className="col-6">
                        <span className="right-text">{who.username}</span>
                    </div>
                    
                    <div className="col-3">
                        <button className="btn btn-primary rounded-pill follow-color" style={{backgroundColor: btnColor}} onClick={handleClick}>Follow</button>
                    </div>
                    </div>
                    </li>
        </>
);
}
export default WhoToFollowListItem;



