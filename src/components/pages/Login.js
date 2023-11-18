import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { postSignin } from "../../api/Auth";

function Login() {
  // 로그인 API 연동
  const [userid, setUserId] = useState(localStorage.getItem("id") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [memory, setMemory] = useState(false);
  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedPassword = localStorage.getItem("password");
    if (storedId) {
      setUserId(storedId);
    }
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const handleLoginBtn = async () => {
    // if (memory) {
    //   localStorage.setItem("id", userid);
    //   localStorage.setItem("password", password);
    // }
    const login = {
      userid: userid,
      password: password,
    };
    try {
      const response = await postSignin(login);
      if (response.status === 200) {
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else if (response.code === 400) {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <Container>
      <TitleSpan>회원 로그인</TitleSpan>
      <InputBox
        type="id"
        placeholder="아이디 입력"
        value={userid}
        onChange={(ev) => setUserId(ev.target.value)}
      />
      <InputBox
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <LoginBtn onClick={() => handleLoginBtn()}>로그인</LoginBtn>
      <NavBox>
        <NavDiv>
          <NavSpan
            onClick={() => {
              window.location.href = "/login/find_id";
            }}
          >
            ID/PW 찾기
          </NavSpan>
        </NavDiv>
        <NavDivider></NavDivider>
        <NavDiv2>
          <NavSpan
            onClick={() => {
              window.location.href = "/signup/terms";
            }}
          >
            회원가입
          </NavSpan>
        </NavDiv2>
      </NavBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  width: 300px;
  height: 55px;
  border: 1px solid gray;
  border-radius: 15px;
  font-size: large;
  padding: 0 15px 0 15px;
  margin-bottom: 15px;
`;

const LoginBtn = styled.button`
  width: 333px;
  height: 60px;
  border-radius: 15px;
  border: none;
  background-color: #dceeff;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 700;
`;

const NavBox = styled.div`
  width: 300px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: medium;
`;

const NavDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: black;
  margin: 0 35px;
`;

export default Login;
