import React from "react";
import styled from "styled-components";
import ListComponent from "../main/ListComponent";

function Reward() {
  return (
    <Container>
      <TitleSpan>리워드</TitleSpan>
      <RewardBox>
        <RewardIcon>R</RewardIcon>
        <RewardSpan>200</RewardSpan>
      </RewardBox>
      <TitleSpan>리워드 적립 내역</TitleSpan>

      <ListBox>
        <ListComponent
          title="왕십리역 6번 출구"
          category="음료 컵"
          address=""
          latitude="37.563355"
          longtitude="127.0358351"
        />
      </ListBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const RewardBox = styled.div`
  width: 210px;
  height: 75px;
  border: 1px solid #ffdf6c;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

const RewardIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #ffdf6c;
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const RewardSpan = styled.span`
  font-size: x-large;
`;

const ListBox = styled.div`
  width: 100%;
  position: relative;
`;

export default Reward;
