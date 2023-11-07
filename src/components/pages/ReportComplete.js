import React, { useState } from "react";
import styled from "styled-components";
import { MdStars } from "react-icons/md";

function ReportComplete() {
  return (
    <Container>
      <Title>신고 완료</Title>
      <SubTitle>여러분의 신고는 TRAP에 큰 힘이 됩니다.</SubTitle>
      <Reward>
        <MdStars style={{ marginRight: "10px" }} />
        포인트 지급 완료!
      </Reward>
      <GotoRewardBtn>내 포인트 확인하러 가기</GotoRewardBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const Title = styled.span`
  font-size: x-large;
  font-weight: 600;
  margin: 35px 0px;
`;

const SubTitle = styled.span`
  font-size: medium;
  font-weight: 600;
  color: #929292;
`;

const Reward = styled.div`
  width: 300px;
  height: 60px;
  background-color: #ffdf6c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  color: white;
  font-size: larger;
  margin: 50px 0px 20px 0px;
`;

const GotoRewardBtn = styled.button`
  width: 190px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  font-size: medium;
`;

export default ReportComplete;
