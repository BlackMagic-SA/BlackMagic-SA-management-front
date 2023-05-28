import axios from "axios";
import React, { useState } from "react";
import { customAxios } from '../../hook/customAxios';

const LoginForm = ({ setIsLogined }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [failed, setFailed] = useState(false);
  localStorage.setItem("authority", 2);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePW = (e) => {
    setPw(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    customAxios({
      method: "post",
      url: "user/authenticate",
      data: {
        accountName: id,
        password: pw,
      },
    })
      .then((response) => {
        customAxios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("token", "Bearer " + response.data.jwt);
        setIsLogined(true);
        setFailed(false);

        const token = response.data.jwt; // your JWT token
        const base64Url = token.split('.')[1]; // get the payload
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        localStorage.setItem("authority", JSON.parse(jsonPayload).authority);
        localStorage.setItem("company_id", JSON.parse(jsonPayload).company_id);
      })
      .catch((error) => {
        setFailed(true);
        setIsLogined(false);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "5rem 0 3rem" }}>BlackMagic</h1>
      <form onSubmit={onLogin}>
        <input
          style={{ width: "20%", display: "block", margin: "5px auto" }}
          type="text"
          onChange={onChangeId}
          placeholder="아이디를 입력하세요."
        />
        <input
          style={{ width: "20%", display: "block", margin: "5px auto 1rem" }}
          type="password"
          onChange={onChangePW}
          placeholder="비밀번호를 입력하세요."
        />
        <button
          style={{
            display: "block",
            margin: "auto",
            width: "12%",
            border: "none",
            borderRadius: "4px",
          }}
        >
          login
        </button>
      </form>
      {failed ? (
        <div style={{ textAlign: "center", marginTop: "2rem", color: "gray" }}>
          로그인에 실패하였습니다. <br />
          아이디와 비밀번호를 다시 확인해주세요.
        </div>
      ) : null}
    </div>
  );
};

export default LoginForm;
