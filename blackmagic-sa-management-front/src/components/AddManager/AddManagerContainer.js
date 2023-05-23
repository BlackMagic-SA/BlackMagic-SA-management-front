import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const AddManagerContainer = ({ managerType, setSelectedMenu }) => {
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [companyId, setCompanyId] = useState(1);
  const [ipAddress, setIpAddress] = useState("");
  const [note, setNote] = useState("");

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/company/list").then((response) => {
      setCompanies(response.data);
      setCompanyId(response.data[0].companyId);
    });
  }, []);

  const onAccountNameChange = (e) => {
    setAccountName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onContactChange = (e) => {
    setContact(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onCompanyIdChange = (e) => {
    setCompanyId(e.target.value);
  };

  const onIpAddressChange = (e) => {
    setIpAddress(e.target.value);
  };

  const onNoteChange = (e) => {
    setNote(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      companyId: companyId,
      authority: managerType === 'sub' ? 1 : 2,
      accountName: accountName,
      password: password,
      ipAddress: ipAddress,
      name: name,
      email: email,
      contact: contact,
      note: note,
    })
    axios({
      method: "post",
      url: "http://localhost:8080/user",
      data: {
        companyId: companyId,
        authority: managerType === 'sub' ? 1 : 2,
        accountName: accountName,
        password: password,
        ipAddress: ipAddress,
        name: name,
        email: email,
        contact: contact,
        note: note,
      },
    }).then((response) => {
      alert((managerType === "sub" ? "중간관리자" : "최고관리자") + ' 사용자 등록을 완료하였습니다.');
      setSelectedMenu((managerType === 'sub' ? 'sub-' : '') + "manager-list");
    });
  };

  return (
    <div className="board-container">
      <h1>{managerType === "sub" ? "중간관리자" : "최고관리자"} 등록</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onAccountNameChange}
          type="text"
          maxLength={30}
          placeholder="계정명을 입력하세요."
        />
        <input
          onChange={onPasswordChange}
          type="password"
          maxLength={68}
          placeholder="초기 비밀번호를 입력하세요."
        />
        <input
          onChange={onNameChange}
          type="text"
          maxLength={15}
          placeholder="담당자명을 입력하세요."
        />
        <input
          onChange={onContactChange}
          type="text"
          maxLength={20}
          placeholder="연락처를 입력하세요."
        />
        <input
          onChange={onEmailChange}
          type="text"
          maxLength={320}
          placeholder="이메일을 입력하세요."
        />
        <select onChange={onCompanyIdChange}>
          {companies.map((company) => (
            <option value={company.companyId}>{company.companyName}</option>
          ))}
        </select>
        <input
          onChange={onIpAddressChange}
          type="text"
          maxLength={39}
          placeholder="접근가능 IP를 입력하세요."
        />
        <input
          onChange={onNoteChange}
          type="text"
          maxLength={300}
          placeholder="비고를 입력하세요."
        />
        <div style={{ width: "50%" }}>
          <button style={{ display: "block", margin: "auto", width: "12%" }}>
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddManagerContainer;
