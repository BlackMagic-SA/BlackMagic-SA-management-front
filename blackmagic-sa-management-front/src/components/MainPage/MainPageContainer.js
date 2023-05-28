import React, { useState } from "react";
import LogContainer from "../MainPageContainer/LogContainer";
import Menu from "./Menu";
import "./MainPage.css";
import PostContainer from "../MainPageContainer/PostContainer";
import AddCompanyContainer from "../MainPageContainer/AddCompanyContainer";
import AddManagerContainer from "../MainPageContainer/AddManagerContainer";
import ManagerListContainer from "../MainPageContainer/ManagerListContainer";
import CompanyListContainer from "../MainPageContainer/CompanyListContainer";
import AuditLogContainer from '../MainPageContainer/AuditLogContainer';

const MainPageContainer = ({ setIsLogined }) => {
  const [selectedMenu, setSelectedMenu] = useState("log");

  const onMenuChange = (e) => {
    setSelectedMenu(e.target.value);
  };

  return (
    <div className="mainmenu-container">
      <Menu onMenuChange={onMenuChange} setIsLogined={setIsLogined} />
      {selectedMenu === "log" ? (
        <LogContainer />
      ) : selectedMenu === "add-company" ? (
        <AddCompanyContainer setSelectedMenu={setSelectedMenu} />
      ) : selectedMenu === "company-list" ? (
        <CompanyListContainer />
      ) : selectedMenu === "add-sub-manager" ? (
        <AddManagerContainer
          managerType="sub"
          setSelectedMenu={setSelectedMenu}
        />
      ) : selectedMenu === "sub-manager-list" ? (
        <ManagerListContainer managerType="sub" />
      ) : selectedMenu === "add-manager" ? (
        <AddManagerContainer
          managerType="top"
          setSelectedMenu={setSelectedMenu}
        />
      ) : selectedMenu === "manager-list" ? (
        <ManagerListContainer managerType="top" />
      ) : selectedMenu === "post" ? (
        <PostContainer />
      ) : (
        <AuditLogContainer />
      )}
    </div>
  );
};

export default MainPageContainer;
