import React, {useEffect, useState} from "react";
import {HashRouter, Link, Route, Routes, useNavigate, useLocation} from "react-router-dom";

import WhoToFollowList from "./WhoToFollowList";
import * as service from "../../services/security-service";

const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState({});
  useEffect(async () => {
    try {
      const users = await service.profile();
      setLists(users);
    } catch (e) {
      navigate('/login');
    }
  }, []);

  return(
    <WhoToFollowList />
  );
};
export default Lists;