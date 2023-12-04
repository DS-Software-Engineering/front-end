import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { postExamplePost } from "../api/Example";
import axios from "axios";

const MainExamplePost = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [context, setContext] = useState("");

  //const commentDTO = { title: "title", content: "content" };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleContext = (event) => {
    setContext(event.target.value);
  };
  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append("file", uploadFile);
      setFile(uploadFile);
      console.log(uploadFile);
      console.log("===useState===");
      console.log(file);
    }
  };

  const imgInput = useRef(null); // Ref 선언
  const onClickPost = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", title);
    //formData.append("images", file);
    formData.append("images", imgInput.current.files[0]);
    formData.append("context", context);

    axios
      .post("http://localhost:8080/solveBoard/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
          Authorization: `Bearer ${token}`,
        },
        //data: commentDTO,
      })
      .then((result) => {
        console.log("요청성공");
        console.log(result);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  };

  return (
    <Container>
      <Title>주요 처리 사례 작성</Title>
      <form onSubmit={onClickPost}>
        <Box>
          <SubTitleSpan>제목</SubTitleSpan>
          <Input value={title} onChange={handleTitle} placeholder="제목" />
        </Box>
        <Box>
          <SubTitleSpan>사진</SubTitleSpan>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            multiple={true}
            onChange={onChangeImg}
            ref={imgInput}
          />
        </Box>
        <Box2>
          <SubTitleSpan>내용</SubTitleSpan>
          <ExplainTextBox
            value={context}
            onChange={handleContext}
            placeholder="주요 처리 사례 내용을 적어주세요."
          />
        </Box2>
        <CompleteBtn
          type="submit"
          onClick={() => {
            window.location.href = "/mainexample";
          }}
        >
          작성 완료
        </CompleteBtn>
      </form>
    </Container>
  );
};
export default MainExamplePost;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 35px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubTitleSpan = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  margin-right: 15px;
`;

const Input = styled.input`
  width: 230px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #929292;
  padding: 0px 15px;
`;
const AttachFileBtn = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: #dceeff;
  margin-right: 10px;
  &:hover {
    background: #1d70b6;
    color: white;
    transition: 0.5s;
  }
`;

const ExplainTextBox = styled.textarea`
  width: 245px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid #929292;
  padding: 5px 7.5px;
`;

const CompleteBtn = styled.button`
  width: 300px;
  height: 65px;
  border: none;
  border-radius: 30px;
  background-color: #1d70b6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  font-size: x-large;
  font-weight: 700;
  color: white;
  position: fixed;
  bottom: 10px;
`;
