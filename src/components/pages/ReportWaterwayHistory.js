import React from "react";
import styled from "styled-components";
import ListComponent from "../main/ListComponent";

function ReportWaterwayHistory() {
  return (
    <Container>
      <TitleSpan>신고 내역</TitleSpan>
      <TapBox>
        <TapBtn
          onClick={() => {
            window.location.href = "/mypage/report/trash";
          }}
        >
          무단투기
        </TapBtn>
        <SelectedTapBtn>배수구</SelectedTapBtn>
      </TapBox>
      <ListBox>
        <ListComponent title="장소명1" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명2" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명3" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명4" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명5" category="음료 컵" address="상세주소" />
      </ListBox>
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
  margin-bottom: 18px;
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

const ListBox = styled.div`
  width: 100%;
  position: relative;
`;

export default ReportWaterwayHistory;
