import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const ManagerListContainer = ({ managerType }) => {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  let idx = 1;

  useEffect(() => {
    axios("http://localhost:8080/user/list").then((response) => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    axios("http://localhost:8080/company/list").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  const onDelete = (e) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/user/${e.target.value}`,
    }).then(() => {
      setUsers(
        users.filter((user) => user.userId !== parseInt(e.target.value))
      );
    });
  };

  return (
    <div className="board-container">
      <h1>{managerType === "sub" ? "중간관리자" : "최고관리자"} 조회</h1>
      <table style={{ width: "60%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>계정명</th>
            <th>담당자명</th>
            <th>소속기관</th>
            <th>연락처</th>
            <th>이메일</th>
            <th>접근가능 IP</th>
            <th>비고</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>
            user.authority === (managerType === "sub" ? 1 : 2) ? (
              <tr key={index}>
                <td>{idx++}</td>
                <td>{user.accountName}</td>
                <td>{user.name}</td>
                <td>
                  {companies.filter(
                    (company) => company.companyId === user.companyId
                  )[0]?.companyName
                    ? companies.filter(
                        (company) => company.companyId === user.companyId
                      )[0].companyName
                    : "-"}
                </td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                <td>{user.ipAddress}</td>
                <td>{user.note}</td>
                <td>
                  <button
                    value={user.userId}
                    onClick={onDelete}
                    className="delete-btn"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerListContainer;
