import React, { useState } from "react";
import styled from "styled-components";

function ReportWaterway() {
  return (
    <Container>
      <TitleSpan>배수구 막힘 신고</TitleSpan>
      <Box>
        <SubTitleSpan>위치</SubTitleSpan>
        <Input placeholder="나의 GPS 좌표" />
      </Box>
      <Box>
        <SubTitleSpan>장소</SubTitleSpan>
        <Input placeholder="해당 장소의 위치를 적어주세요" />
      </Box>
      <Box>
        <SubTitleSpan>사진</SubTitleSpan>
        <AttachFileBtn>파일 첨부</AttachFileBtn>
        <Input placeholder="선택된 파일 없음" style={{ width: "140px" }} />
      </Box>
      <Box2>
        <SubTitleSpan>설명</SubTitleSpan>
        <ExplainTextBox placeholder="신고 사진에 대한 설명을 적어주세요." />
      </Box2>
      <NextBtn>신고 완료!</NextBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const TitleSpan = styled.div`
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

const NextBtn = styled.button`
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

export default ReportWaterway;
