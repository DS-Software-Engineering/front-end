import React, { useState } from "react";
import styled from "styled-components";

function FindID() {
  return (
    <Container>
      <NavBox>
        <NavDiv>
          <NavSpan style={{ fontWeight: "700" }}>ID 찾기</NavSpan>
        </NavDiv>
        <NavDivider></NavDivider>
        <NavDiv2>
          <NavSpan
            onClick={() => {
              window.location.href = "/login/find_pw";
            }}
          >
            PW 찾기
          </NavSpan>
        </NavDiv2>
      </NavBox>
      <InnerBox>
        <SubTitle>휴대폰 번호*</SubTitle>
        <InputBox>
          <Input
            type="text"
            placeholder="가입할 때 입력한 번호를 입력해주세요."
          />
          <CheckBtn>인증 번호 발송</CheckBtn>
        </InputBox>
        <SubTitle>휴대폰 본인 인증*</SubTitle>
        <InputBox>
          <Input type="text" placeholder="인증번호 6자리를 입력해주세요." />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
      </InnerBox>
      <FindIDBtn>ID 찾기</FindIDBtn>
      <NoticeID />
    </Container>
  );
}

function NoticeID() {
  return (
    <NoticeIDBox>
      <h4>회원님의 아이디는 ******* 입니다.</h4>
      <GotoLoginBtn>로그인 하러 가기</GotoLoginBtn>
    </NoticeIDBox>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerBox = styled.div`
  width: 350px;
  height: 160px;
`;

const FindIDBtn = styled.button`
  width: 350px;
  height: 55px;
  border-radius: 15px;
  background-color: #dceeff;
  border: none;
  font-size: large;
  font-weight: 700;
  margin-top: 25px;
`;

const NavBox = styled.div`
  width: 300px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 20px 0px;
`;

const NavDiv = styled.div`
  width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const NavDiv2 = styled.div`
  width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const NavSpan = styled.span`
  font-size: large;
`;

const NavDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: black;
  margin: 0 35px;
`;

const SubTitle = styled.span`
  font-size: medium;
  font-weight: 600;
  color: #626262;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 220px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: small;
  margin-bottom: 15px;
`;

const CheckBtn = styled.button`
  width: 115px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #dddddd;
  color: white;
  font-weight: 700;
  font-size: medium;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

const NoticeIDBox = styled.div`
  width: 350px;
  margin-top: 25px;
  border: 1px solid #383838;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GotoLoginBtn = styled.button`
  width: 310px;
  height: 50px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #1d70b6;
  font-size: small;
  text-decoration: underline;
  margin-bottom: 20px;
`;

export default FindID;
