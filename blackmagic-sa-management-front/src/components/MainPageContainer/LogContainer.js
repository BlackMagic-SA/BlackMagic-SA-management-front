import axios from "axios";
import React, { useEffect, useState } from "react";

const LogContainer = () => {
  const [logs, setLogs] = useState([]);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    if (parseInt(localStorage.getItem("authority")) === 2) {
      axios("http://localhost:8080/record/list").then((response) => {
        setLogs(response.data);
      });

      axios("http://localhost:8080/company/list").then((response) => {
        setCompanies(response.data);
      });
    } else {
      axios(`http://localhost:8080/record/company/${localStorage.getItem(
        "company_id"
      )}
      `).then((response) => {
        setLogs(response.data);
      });

      axios(
        `http://localhost:8080/company/${localStorage.getItem("company_id")}`
      ).then((response) => {
        setCompanies(response.data);
      });
    }
  }, []);

  const onDownload = async () => {
    try {
      const response = await axios.get("http://localhost:8080/pdf/1", {
        responseType: "blob",
      });

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "blackmagicSA.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="board-container">
      <h1>
        로그 조회{" "}
        {parseInt(localStorage.getItem("authority")) === 1
          ? ` (기관명 : ${companies.companyName})`
          : null}
      </h1>
      {/* <div style={{overflowX: 'scroll', width: '100%'}}> */}
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>번호</th>
            {parseInt(localStorage.getItem("authority")) === 2 ? (
              <th>기관명</th>
            ) : null}
            <th>부서명</th>
            <th>사용자명</th>
            <th>HDD 모델명</th>
            <th>HDDSN</th>
            <th>HDD 크기</th>
            <th>삭제일자</th>
            <th>삭제 시작 시간</th>
            <th>삭제 종료 시간</th>
            <th>소요 시간</th>
            <th>삭제 방법</th>
            <th>덮어쓰기 횟수</th>
            <th>확인코드</th>
            <th>다운로드</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={log.recordId}>
              <td>{index + 1}</td>
              {parseInt(localStorage.getItem("authority")) === 2 ? (
                <td>
                  {companies.filter(
                    (company) => company.companyId === log.companyId
                  )[0]?.companyName
                    ? companies.filter(
                        (company) => company.companyId === log.companyId
                      )[0].companyName
                    : "-"}
                </td>
              ) : null}
              <td>{log.deptName}</td>
              <td>{log.userName}</td>
              <td>{log.hddModel}</td>
              <td>{log.hddsn}</td>
              <td>{log.hddSize}</td>
              <td>{log.deletedDate}</td>
              <td>{log.deletedStartTime}</td>
              <td>{log.deletedEndTime}</td>
              <td>{log.timeTaken}</td>
              <td>{log.deletionWay}</td>
              <td>{log.overwriteCount}</td>
              <td>{log.verificationCode}</td>
              <td>
                <button onClick={onDownload} style={{ width: "60px" }}>
                  다운로드
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </div>
  );
};

export default LogContainer;
