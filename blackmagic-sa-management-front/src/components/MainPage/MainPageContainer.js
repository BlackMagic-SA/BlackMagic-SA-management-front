import React, { useState } from "react";
import LogContainer from "../Log/LogContainer";
import Menu from "./Menu";
import "./MainPage.css";
import PostContainer from "../Post/PostContainer";
import AddCompanyContainer from "../AddCompany/AddCompanyContainer";
import AddManagerContainer from "../AddManager/AddManagerContainer";
import ManagerListContainer from "../ManagerList/ManagerListContainer";
import CompanyListContainer from "../CompanyList/CompanyListContainer";

const MainPageContainer = () => {
  const [selectedMenu, setSelectedMenu] = useState("log");

  const onMenuChange = (e) => {
    setSelectedMenu(e.target.value);
  };

  return (
    <div className="mainmenu-container">
      <Menu onMenuChange={onMenuChange} />
      {selectedMenu === "log" ? (
        <LogContainer />
      ) : selectedMenu === "add-company" ? (
        <AddCompanyContainer setSelectedMenu={setSelectedMenu} />
      ) : selectedMenu === "company-list" ? (
        <CompanyListContainer />
      ) : selectedMenu === "add-sub-manager" ? (
        <AddManagerContainer managerType='sub' />
      ) : selectedMenu === "sub-manager-list" ? (
        <ManagerListContainer managerType='sub' />
      ) : selectedMenu === "add-manager" ? (
        <AddManagerContainer managerType='top' />
      ) : selectedMenu === "manager-list" ? (
        <ManagerListContainer managerType='top' />
      ) : (
        <PostContainer />
      )}
    </div>
  );
};

export default MainPageContainer;
