import React, { useState } from "react";
import styled from "styled-components";

function Report() {
  return (
    <Container>
      <TitleSpan>신고</TitleSpan>
      {/* <TapBox>
        <SelectedTapBtn>신고</SelectedTapBtn>
        <TapBtn>건의</TapBtn>
      </TapBox> */}
      <ReportBtn
        onClick={() => {
          window.location.href = "/report/trash";
        }}
      >
        무단투기 지역 신고
      </ReportBtn>
      <ReportBtn
        onClick={() => {
          window.location.href = "/report/waterway";
        }}
      >
        배수구 막힘 신고
      </ReportBtn>
      {/* <NextBtn>다음</NextBtn> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const TapBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 40px;
`;

const SelectedTapBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #dceeff;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 5px 5px lightgray;
  margin: 0px 7px;
`;

const TapBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  border: 0.1px solid lightgray;
  border-radius: 15px;
  box-shadow: 0px 3px 3px lightgray;
  margin: 0px 7px;
`;

const ReportBtn = styled.div`
  width: 300px;
  height: 65px;
  border: 1px solid #929292;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  font-size: large;
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

export default Report;
