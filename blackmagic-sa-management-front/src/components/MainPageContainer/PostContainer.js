import axios from "axios";
import React, { useState } from "react";
import { customAxios } from '../../hook/customAxios';

const PostContainer = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    customAxios
      .post("pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // 파일 업로드 성공 시 동작
        // console.log(response.data);
      })
      .catch((error) => {
        // 파일 업로드 실패 시 동작
        console.error(error);
      });
  };
  return (
    <div className="board-container">
      <h1>로드 등록</h1>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default PostContainer;
