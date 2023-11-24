import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";
import { BsChevronRight } from "react-icons/bs";
//import MenuCard from "./MenuCard";
import { getMyInfo } from "../../api/Mypage";

function Profile() {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [reward, setReward] = useState("0");

  useEffect(() => {
    const myInfo = async (keyword) => {
      try {
        const response = await getMyInfo();
        if (response.status === 200) {
          console.log("나의 정보 가져오기 :", response);
          setName(response.data[0].nickname);
          setReward(response.data[0].reward);
        } else if (response.code === 400) {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error("나의 정보 가져오기 :", error);
      }
    };
    myInfo();
  }, []);

  return (
    <ProfileBox>
      {!token ? (
        <InnerBox
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <ProfileText>로그인 후 이용하세요</ProfileText>
        </InnerBox>
      ) : (
        <InnerBox
          onClick={() => {
            window.location.href = "/mypage";
          }}
        >
          <ProfileText>{name}님</ProfileText>
          <RewardBox>
            <Reward>R</Reward>
            <ProfileText>{reward}</ProfileText>
          </RewardBox>
        </InnerBox>
      )}
    </ProfileBox>
  );
}

function MenuCard({ menuName }) {
  return (
    <MenuInnerBox>
      <MenuName>{menuName}</MenuName>
      <BsChevronRight />
    </MenuInnerBox>
  );
}

function Menu({ onClose }) {
  const token = localStorage.getItem("token");

  const handleClose = () => {
    onClose?.();
  };
  const handleLogout = () => {
    onClose();
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <Container>
        <Header>
          <Logo
            onClick={() => {
              window.location.href = "/";
            }}
          >
            TRAP
          </Logo>
          <span onClick={handleClose}>
            <TfiClose className="close-icon" />
          </span>
        </Header>
        <Profile />
        <MenuText>[ Menu ]</MenuText>
        <MenuBox>
          <span
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <MenuCard menuName="쓰레기통 지도" />
          </span>
          <span
            onClick={() => {
              window.location.href = "/trashcan";
            }}
          >
            <MenuCard menuName="쓰레기통 리스트" />
          </span>
          <span
            onClick={() => {
              window.location.href = "/report";
            }}
          >
            <MenuCard menuName="신고 및 건의하기" />
          </span>
          <span
            onClick={() => {
              window.location.href = "/mainexample";
            }}
          >
            <MenuCard menuName="주요 처리 사례" />
          </span>
          <span
            onClick={() => {
              window.location.href = "/mypage";
            }}
          >
            <MenuCard menuName="마이페이지" />
          </span>
        </MenuBox>
        {!token ? (
          <LogInBox
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            로그인
          </LogInBox>
        ) : (
          <LogInBox onClick={() => handleLogout()}>로그아웃</LogInBox>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  z-index: 9999;
`;

const Header = styled.div`
  width: 220px;
  height: 80px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  background-color: #ffffff;

  .close-icon {
    font-size: 30px;
    color: black;
    cursor: pointer;
  }
`;

const Logo = styled.span`
  font-size: 38px;
  font-weight: 700;
  color: #1d70b6;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  width: 220px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b0cae1;
  margin-top: 15px;
`;

const ProfileText = styled.span`
  color: #8e8e8e;
`;

const Reward = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #dceeff;
  color: white;
  font-size: 15px;
  text-align: center;
  margin-right: 5px;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #a9a9a9;
  margin: 10px;
  padding: 3px 5px 5px 5px;
`;

const RewardBox = styled.div`
  display: flex;
`;

const MenuText = styled.div`
  width: 220px;
  color: #4c4949;
  font-weight: 700;
  margin: 15px 0px;
`;

const MenuBox = styled.div`
  width: 220px;
`;

const MenuInnerBox = styled.div`
  height: 40px;
  border-bottom: 1px solid #cacaca;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const MenuName = styled.span`
  color: #7b7979;
  font-size: medium;
  font-weight: 700;
`;

const LogInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 47px;
  border-radius: 15px;
  background-color: #1d70b6;
  color: white;
  font-weight: 700;
  position: fixed;
  bottom: 10px;
  cursor: pointer;
`;

export default Menu;
