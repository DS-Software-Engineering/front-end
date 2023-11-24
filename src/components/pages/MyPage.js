import React from "react";
import styled from "styled-components";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiFillAlert, AiFillStar } from "react-icons/ai";

function MyPage() {
  return (
    <Container>
      <IoPersonCircleSharp id="profile-icon" />
      <h2>홍길동 님</h2>
      <MenuBox
        onClick={() => {
          window.location.href = "/mypage/report/trash";
        }}
      >
        <AiFillAlert id="report-icon" />
        <MenuText>신고 내역</MenuText>
      </MenuBox>
      <MenuBox
        style={{ backgroundColor: "white", border: "1px solid #D9D9D9" }}
        onClick={() => {
          window.location.href = "/mypage/reward";
        }}
      >
        <RewardIcon>R</RewardIcon>
        <MenuText>리워드</MenuText>
      </MenuBox>
      <MenuBox
        onClick={() => {
          window.location.href = "/mypage/favorites";
        }}
      >
        <AiFillStar id="star-icon" />
        <MenuText>즐겨찾기</MenuText>
      </MenuBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #profile-icon {
    font-size: 140px;
    color: #1d70b6;
    margin-top: 30px;
  }
`;

const MenuBox = styled.div`
  width: 330px;
  height: 130px;
  background-color: #dceeff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;

  #report-icon {
    font-size: 60px;
    color: #1d70b6;
  }

  #star-icon {
    font-size: 60px;
    color: #1d70b6;
  }
`;

const MenuText = styled.span`
  font-size: larger;
  margin-top: 7px;
`;

const RewardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffdf6c;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export default MyPage;
