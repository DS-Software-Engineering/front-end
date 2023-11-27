import React, { useState } from "react";
import styled from "styled-components";
import { postFindPW, patchChangePW } from "../../api/Auth";

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

function FindPW() {
  const [userid, setUserId] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [showNewPW, setShowNewPW] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const checkPW = async () => {
    const data = {
      userid: userid,
      phonenum: phonenum,
    };
    try {
      const response = await postFindPW(data);
      console.log("성공");
      if (response.success == true) {
        setShowNewPW(true);
      } else if (response.success == false) {
        setModalOpen(true);
        setShowNewPW(false);
      }
    } catch (error) {
      console.error("오류");
    }
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      console.error("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    const data = {
      userid: userid,
      phonenum: phonenum,
      password: password,
    };

    try {
      const response = await patchChangePW(data);
      console.log("비밀번호 수정 성공");
    } catch (error) {
      console.error("비밀번호 수정 오류:", error);
    }
  };

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
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            value={userid}
            onChange={(e) => setUserId(e.target.value)}
          />
        </InputBox>
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
      <FindIDBtn onClick={checkPW}>PW 찾기</FindIDBtn>

      <SetNewPWBox>
        {showNewPW && (
          <>
            <h4>새 비밀 번호 설정</h4>
            <div>
              <SubTitle style={{ fontSize: "15px" }}>비밀번호*</SubTitle>
              <InputBox>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요. (8-15자, 영 대/소문자,숫자 조합)"
                  style={{ width: "320px", fontSize: "12px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputBox>
            </div>
            <div>
              <SubTitle style={{ fontSize: "15px" }}>비밀번호 재입력*</SubTitle>
              <InputBox>
                <Input
                  type="password"
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                  style={{ width: "320px", fontSize: "12px" }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputBox>
            </div>
            <NewPWBtn onClick={handleChangePassword}>확인</NewPWBtn>
          </>
        )}
      </SetNewPWBox>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </Container>
  );
}

function SetNewPW() {
  const [userid, setUserId] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      console.error("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    const data = {
      userid: userid,
      phonenum: phonenum,
      password: password,
    };

    try {
      const response = await patchChangePW(data);
      console.log("비밀번호 수정 성공");
    } catch (error) {
      console.error("비밀번호 수정 오류:", error);
    }
  };

  return (
    <SetNewPWBox>
      <h4>새 비밀 번호 설정</h4>
      <div>
        <SubTitle style={{ fontSize: "15px" }}>비밀번호*</SubTitle>
        <InputBox>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요. (8-15자, 영 대/소문자,숫자 조합)"
            style={{ width: "320px", fontSize: "12px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
      </div>
      <div>
        <SubTitle style={{ fontSize: "15px" }}>비밀번호 재입력*</SubTitle>
        <InputBox>
          <Input
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요."
            style={{ width: "320px", fontSize: "12px" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputBox>
      </div>
      <NewPWBtn onClick={handleChangePassword}>확인</NewPWBtn>
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
  /* border: 1px solid #383838; */
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

export default FindPW;
