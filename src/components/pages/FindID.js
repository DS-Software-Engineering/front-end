import React, { useState } from "react";
import styled from "styled-components";
import { postFindId } from "../../api/Auth";

function Modal({ onClose }) {
  return (
    <>
      <ModalBackground></ModalBackground>
      <ModalContainer
        onClick={(e) => {
          if (e.target === ModalBackground.current) {
            onClose();
          }
        }}
      >
        <h3>일치하는 회원정보가 없습니다.</h3>
        <ModalBtn
          onClick={() => {
            onClose();
          }}
        >
          확인
        </ModalBtn>
      </ModalContainer>
    </>
  );
}

function FindID() {
  const [phonenum, setPhonenum] = useState("");
  const [foundId, setFoundId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const checkID = async () => {
    const data = {
      phonenum: phonenum,
    };
    try {
      const response = await postFindId(data);
      console.log("성공");
      setFoundId(response.data[0]);
    } catch (error) {
      console.error("오류");
      setModalOpen(true);
    }
  };

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
            value={phonenum}
            onChange={(e) => setPhonenum(e.target.value)}
          />
        </InputBox>
      </InnerBox>
      <FindIDBtn onClick={checkID}>ID 찾기</FindIDBtn>
      <NoticeIDBox>
        {foundId && (
          <>
            <h4>회원님의 아이디는 {foundId} 입니다.</h4>
            <GotoLoginBtn
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              로그인 하러 가기
            </GotoLoginBtn>
          </>
        )}
      </NoticeIDBox>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerBox = styled.div`
  width: 350px;
  height: 70px;
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

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

const NoticeIDBox = styled.div`
  width: 350px;
  margin-top: 25px;
  /* border: 1px solid #383838; */
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

const ModalContainer = styled.div`
  width: 280px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1001;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  top: 320px;
  left: 55px;
`;

const ModalBtn = styled.button`
  width: 230px;
  height: 35px;
  border: none;
  border-radius: 15px;
  background-color: #dceeff;
`;

const ModalBackground = styled.div`
  width: 390px;
  height: 100vh;
  z-index: 1000;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: black;
  opacity: 65%;
`;

export default FindID;
