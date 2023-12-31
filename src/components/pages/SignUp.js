import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { postSignup, getNickname, getID } from "../../api/Auth";

function Modal({ onClose, message }) {
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
        <h3>{message}</h3>
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

function SignUp() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);

  // 회원가입 API 연동
  const handleButton = async () => {
    const data = {
      userid: userid,
      nickname: nickname,
      password: password,
      phonenum: phonenum,
    };
    try {
      const response = await postSignup(data);
      console.log("성공");
      window.location.href = "/";
      if (response.status == 400) {
        setModalOpen5(true);
      }
    } catch (error) {
      console.error("오류");
    }
  };

  const handleCheckID = async () => {
    try {
      const response = await getID(userid);
      if (response) {
        console.log("아이디 중복 확인 성공");
        if (!response.data[0]) {
          setModalOpen(true);
        } else if (response.data[0]) {
          setModalOpen2(true);
        }
      } else {
        console.log("아이디 중복 확인 실패");
      }
    } catch (error) {
      console.error("아이디 중복 확인 오류:", error);
    }
  };

  const handleCheckNickname = async () => {
    try {
      const response = await getNickname(nickname);
      console.log("닉네임 중복 확인 결과:", response);
      if (!response.data[0]) {
        setModalOpen3(true);
      } else if (response.data[0]) {
        setModalOpen4(true);
      }
    } catch (error) {
      console.error("닉네임 중복 확인 오류:", error);
    }
  };

  return (
    <Container>
      <TitleSpan>회원 가입</TitleSpan>
      <SubTitle>아이디*</SubTitle>
      <InputBox>
        <Input
          type="id"
          placeholder="아이디를 입력해주세요."
          value={userid}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <CheckBtn onClick={handleCheckID}>중복 확인</CheckBtn>
      </InputBox>
      <SubTitle>비밀번호*</SubTitle>
      <InputBox>
        <Input2
          type="password"
          placeholder="비밀번호를 입력해주세요. (8~15자,영 대/소문자, 숫자 조합)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputBox>
      <SubTitle>비밀번호 재입력*</SubTitle>
      <InputBox>
        <Input2
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />
      </InputBox>
      <SubTitle>닉네임*</SubTitle>
      <InputBox>
        <Input
          type="text"
          placeholder="닉네임을 입력해주세요. (5자 이하)"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <CheckBtn onClick={handleCheckNickname}>중복 확인</CheckBtn>
      </InputBox>
      <SubTitle>휴대폰 번호*</SubTitle>
      <InputBox>
        <Input2
          type="text"
          placeholder="휴대폰 번호를 입력해주세요."
          value={phonenum}
          onChange={(e) => setPhonenum(e.target.value)}
          required
        />
      </InputBox>
      <NextBtn onClick={handleButton}>가입하기</NextBtn>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
            setUserId("");
          }}
          message="중복된 아이디 입니다."
        />
      )}
      {modalOpen2 && (
        <Modal
          onClose={() => setModalOpen2(false)}
          message="사용 가능한 아이디 입니다."
        />
      )}
      {modalOpen3 && (
        <Modal
          onClose={() => {
            setModalOpen3(false);
            setNickname("");
          }}
          message="중복된 닉네임 입니다."
        />
      )}
      {modalOpen4 && (
        <Modal
          onClose={() => setModalOpen4(false)}
          message="사용 가능한 닉네임 입니다."
        />
      )}
      {modalOpen5 && (
        <Modal
          onClose={() => setModalOpen5(false)}
          message="회원가입에 실패했습니다."
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const SubTitle = styled.span`
  font-size: medium;
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

const Input2 = styled.input`
  width: 358px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: small;
  margin-bottom: 15px;
`;

const CheckBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #dceeff;
  color: #454545;
  font-weight: 700;
  font-size: medium;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextBtn = styled.button`
  width: 358px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #dceeff;
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 700;
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

export default SignUp;
