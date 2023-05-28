import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { customAxios } from '../../hook/customAxios';

const CompanyListContainer = () => {
  const [companies, setCompanies] = useState([]);
  
  useEffect(() => {
    customAxios("company/list").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  const onDelete = (e) => {
    customAxios({
      method: "delete",
      url: `company/${e.target.value}`,
    }).then((response) => {
      setCompanies(companies.filter((company) => company.companyId !== parseInt(e.target.value)));
    });
  };

  return (
    <div className="board-container">
      <h1>기관 전체 조회</h1>
      <table style={{ width: "60%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>기관명</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{company.companyName}</td>
              <td>
                <button
                  value={company.companyId}
                  onClick={onDelete}
                  className="delete-btn"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyListContainer;
