import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { customAxios } from '../../hook/customAxios';

const AuditLogContainer = () => {
  const [auditLogs, setAuditLogs] = useState([]);

  useEffect(() => {
    customAxios("auditLog/list").then((response) => {
      setAuditLogs(response.data);
    });
  }, []);

  return (
    <div className='board-container'>
      <h1>감사 로그 조회</h1>
      <table style={{ width: "60%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>로그 번호</th>
            <th>사용자 아이디</th>
            <th>삭제 기록 번호</th>
            <th>작업 종류</th>
            <th>시각</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((auditLog) => (
            <tr key={auditLog.logId}>
              <td>{auditLog.logId}</td>
              <td>{auditLog.user.accountName}</td>
              <td>{auditLog.recordId ? auditLog.recordId : "-"}</td>
              <td>{auditLog.workType}</td>
              <td>{auditLog.workTime}</td>
            </tr>

          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default AuditLogContainer;