import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { postExamplePost } from "../api/Example";

const MainExamplePost = () => {
  // 주요처리 사례 글 작성 API 연동
  const [examplePost, setExamplePost] = useState([]);

  const handlePost = async () => {
    try {
      const response = await postExamplePost("");
      setExamplePost(response.data);
      console.log("주요 처리 사례 글작성하기 :", response);
    } catch (error) {
      console.error("주요 처리 사례 글 작성하기 오류 :", error);
    }
  };

  return (
    <Container>
      <Title>주요 처리 사례 작성</Title>
      <Box>
        <SubTitleSpan>제목</SubTitleSpan>
        <Input placeholder="제목" />
      </Box>
      <Box>
        <SubTitleSpan>사진</SubTitleSpan>
        <AttachFileBtn>파일 첨부</AttachFileBtn>
        <Input placeholder="선택된 파일 없음" style={{ width: "140px" }} />
      </Box>
      <Box2>
        <SubTitleSpan>내용</SubTitleSpan>
        <ExplainTextBox placeholder="주요 처리 사례 내용을 적어주세요." />
      </Box2>
      <CompleteBtn onClick={handlePost}>작성 완료</CompleteBtn>
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
