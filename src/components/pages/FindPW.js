import React from "react";
import styled from "styled-components";

function FindPW() {
  return (
    <Container>
      <NavBox>
        <NavDiv>
          <NavSpan
            onClick={() => {
              window.location.href = "/login/find_id";
            }}
          >
            ID 찾기
          </NavSpan>
        </NavDiv>
        <NavDivider></NavDivider>
        <NavDiv2>
          <NavSpan style={{ fontWeight: "700" }}>PW 찾기</NavSpan>
        </NavDiv2>
      </NavBox>
      <InnerBox>
        <SubTitle>아이디*</SubTitle>
        <InputBox>
          <Input type="text" placeholder="아이디를 입력해주세요." />
        </InputBox>
        <SubTitle>휴대폰 번호*</SubTitle>
        <InputBox>
          <Input
            type="text"
            placeholder="가입할 때 입력한 번호를 입력해주세요."
          />
        </InputBox>
      </InnerBox>
      <FindIDBtn>PW 찾기</FindIDBtn>
      <SetNewPW />
    </Container>
  );
}

function SetNewPW() {
  return (
    <SetNewPWBox>
      <h4>새 비밀 번호 설정</h4>
      <div>
        <SubTitle style={{ fontSize: "15px" }}>비밀번호*</SubTitle>
        <InputBox>
          <Input
            type="text"
            placeholder="비밀번호를 입력해주세요. (8-15자, 영 대/소문자,숫자 조합)"
            style={{ width: "320px", fontSize: "12px" }}
          />
        </InputBox>
      </div>
      <div>
        <SubTitle style={{ fontSize: "15px" }}>비밀번호 재입력*</SubTitle>
        <InputBox>
          <Input
            type="text"
            placeholder="비밀번호를 다시 한번 입력해주세요."
            style={{ width: "320px", fontSize: "12px" }}
          />
        </InputBox>
      </div>
      <NewPWBtn>확인</NewPWBtn>
    </SetNewPWBox>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerBox = styled.div`
  width: 350px;
  height: 150px;
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
  width: 358px;
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

const SetNewPWBox = styled.div`
  width: 350px;
  margin: 25px 0px;
  border: 1px solid #383838;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewPWBtn = styled.button`
  width: 310px;
  height: 50px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #1d70b6;
  font-size: small;
  text-decoration: underline;
  margin: 10px 0px 20px 0px;
`;

export default FindPW;
