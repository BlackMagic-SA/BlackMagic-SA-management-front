import axios from "axios";
import React from "react";
import { customAxios } from '../../hook/customAxios';

const Menu = ({ onMenuChange, setIsLogined }) => {
  const onLogout = () => {
    setIsLogined(false);
    delete customAxios.defaults.headers.common["Authorization"];
  };

  return (
    <div className="menu-container">
      <button
        style={{ backgroundColor: "black", color: "white" }}
        className="menu-btn"
        onClick={onMenuChange}
        value="log"
      >
        BlackMagic
      </button>
      <button className="menu-btn" onClick={onMenuChange} value="log">
        로그 조회
      </button>
      <button className="menu-btn" onClick={onMenuChange} value="post">
        로그 등록
      </button>
      {parseInt(localStorage.getItem("authority")) === 2 ? (
        <button
          className="menu-btn"
          onClick={onMenuChange}
          value="company-list"
        >
          기관 전체 조회
        </button>
      ) : null}
      {parseInt(localStorage.getItem("authority")) === 2 ? (
        <button className="menu-btn" onClick={onMenuChange} value="add-company">
          기관 정보 등록
        </button>
      ) : null}
      {parseInt(localStorage.getItem("authority")) === 2 ? (
        <button
          className="menu-btn"
          onClick={onMenuChange}
          value="sub-manager-list"
        >
          중간관리자 조회
        </button>
      ) : null}
      {parseInt(localStorage.getItem("authority")) === 2 ? (
        <button
          className="menu-btn"
          onClick={onMenuChange}
          value="add-sub-manager"
        >
          중간관리자 등록
        </button>
      ) : null}
      {parseInt(localStorage.getItem("authority")) === 2 ? (
        <button
          className="menu-btn"
          onClick={onMenuChange}
          value="manager-list"
        >
          최고관리자 조회
        </button>
      ) : null}
      {parseInt(localStorage.getItem("authority")) === 2 ? (
        <button className="menu-btn" onClick={onMenuChange} value="add-manager">
          최고관리자 등록
        </button>
      ) : null}
      {parseInt(localStorage.getItem("authority")) === 2 ? (
        <button className="menu-btn" onClick={onMenuChange} value="auditlog">
          감사 로그 조회
        </button>
      ) : null}
      <button className="menu-btn" onClick={onLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default Menu;
