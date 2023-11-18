import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

function Terms() {
  return (
    <Container>
      <TitleSpan>약관 동의</TitleSpan>
      <LineBox>
        <InnerBox>
          <AiFillCheckCircle className="check-icon" color="#1d70b6" />
          <BigAgreeText>약관 전체 동의</BigAgreeText>
        </InnerBox>
        <TermBox choice="필수" />
        <TermBox choice="필수" />
        <TermBox choice="선택" />
      </LineBox>
      <RegisterBtn
        onClick={() => {
          window.location.href = "/signup";
        }}
      >
        다음
      </RegisterBtn>
    </Container>
  );
}

function TermBox({ choice }) {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <>
      <InnerBox onClick={handleCheck}>
        {check ? (
          <AiFillCheckCircle
            className="check-icon"
            style={{ color: "#1d70b6" }}
          />
        ) : (
          <AiFillCheckCircle
            className="check-icon"
            style={{ color: "#dddddd" }}
          />
        )}
        <SmallAgreeText>[{choice}] 이용 약관에 동의합니다.</SmallAgreeText>
      </InnerBox>
      <TermContent>
        TRAP 서비스 제공을 위해 회원번호와 함께 개인정보가 제공됩니다. 보다
        자세한 제인정보 제공항목은 동의 내용에서 확인하실 수 있습니다. 해당
        정보는 동의 철회 또는 서비스 탈퇴 시 지체없이 파기됩니다. TRAP 서비스
        제공을 위해 회원번호와 함께 개인정보가 제공됩니다. 보다 자세한 제인정보
        제공항목은 동의 내용에
      </TermContent>
    </>
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

const LineBox = styled.div`
  width: 320px;
  height: 430px;
  border: 1px solid #b8b8b8;
  border-radius: 15px;
  padding: 5px 15px 20px 15px;
`;

const BigAgreeText = styled.span`
  color: #8a8a8a;
  font-size: larger;
  font-weight: 700;
`;

const SmallAgreeText = styled.div`
  color: #8a8a8a;
  font-size: medium;
`;

const InnerBox = styled.div`
  .check-icon {
    margin-right: 10px;
    width: 25px;
    height: 25px;
    color: #dddddd;
  }
  display: flex;
  align-items: center;
  margin: 15px 0px;
`;

const TermContent = styled.textarea`
  border: 1px solid #bdd7c9;
  border-radius: 10px;
  font-size: small;
  width: 303px;
  height: 55px;
  padding: 8px;
`;

const RegisterBtn = styled.button`
  width: 350px;
  height: 55px;
  border-radius: 15px;
  background-color: #dceeff;
  border: none;
  font-size: large;
  font-weight: 700;
  margin-top: 25px;
`;

export default Terms;
