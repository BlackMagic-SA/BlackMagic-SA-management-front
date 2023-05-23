import React, { useState } from "react";

const LoginForm = ({ setIsLogined }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePW = (e) => {
    setPw(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    setIsLogined(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "5rem 0 3rem" }}>BlackMagic</h1>
      <form onSubmit={onLogin}>
        <input
          style={{ width: '20%', display: "block", margin: "5px auto" }}
          type="text"
          onChange={onChangeId}
          placeholder='아이디를 입력하세요.'
        />
        <input
          style={{ width: '20%', display: "block", margin: "5px auto 1rem" }}
          type="password"
          onChange={onChangePW}
          placeholder='비밀번호를 입력하세요.'
        />
        <button style={{ display: "block", margin: "auto", width: "12%", border: 'none', borderRadius: '4px' }}>
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
