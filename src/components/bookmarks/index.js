import React, {useEffect, useState} from "react";
import * as service from "../../services/security-service"
import {HashRouter, Link, Route, Routes, useNavigate, useLocation} from "react-router-dom";
import MyBookmarks from "./my-bookmarks";

const Bookmarks = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        try {
            const user = await service.profile();
            console.log(user);
            setProfile(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);
    const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }
    return(
        <div className="ttr-profile">
            <div className="border border-bottom-0">
                <h4 className="p-2 mb-0 pb-0 fw-bolder">
                    {profile.username}
                    <i className="fa fa-badge-check text-primary"></i></h4>
                <span className="ps-2">67.6K Tuits</span>
                <div className="mb-5 position-relative">
                    <img className="w-100" src="../images/nasa-profile-header.jpg"/>
                    <div className="bottom-0 left-0 position-absolute">
                        <div className="position-relative">
                            <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                                 src="../images/nasa-3.png"/>
                        </div>
                    </div>
                    <Link to="/profile/edit"
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Edit profile
                    </Link>
                    <button onClick={logout} className="mt-2 float-end btn btn-warning rounded-pill">
                        Logout
                    </button>
                </div>

                <div className="p-2">
                    <h4 className="fw-bolder pb-0 mb-0">
                        {profile.username}<i className="fa fa-badge-check text-primary"></i>
                    </h4>
                    <h6 className="pt-0">@{profile.username}</h6>
                </div>
                <div>
                    <h3>My Bookmarks</h3>
                    <MyBookmarks/>
                </div>
            </div>
        </div>

    );
}
export default Bookmarks;