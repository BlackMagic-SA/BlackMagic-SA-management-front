import React, { useState } from "react";
import LogContainer from "../Log/LogContainer";
import Menu from "./Menu";
import ManagementContainer from "../Management/ManagementContainer";
import "./MainPage.css";
import PostContainer from "../Post/PostContainer";

const MainPageContainer = () => {
  const [selectedMenu, sestSelectedMenu] = useState("log");

  const onMenuChange = (e) => {
    sestSelectedMenu(e.target.value);
  };

  return (
    <div className="mainmenu-container">
      <Menu onMenuChange={onMenuChange} />
      {selectedMenu === "log" ? (
        <LogContainer />
      ) : selectedMenu === "management" ? (
        <ManagementContainer />
      ) : (
        <PostContainer />
      )}
    </div>
  );
};

export default MainPageContainer;
