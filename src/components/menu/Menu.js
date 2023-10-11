import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";
import { BsChevronRight } from "react-icons/bs";

function Profile() {
  return (
    <ProfileBox>
      <InnerBox>
        <ProfileText>로그인 후 이용하세요</ProfileText>
        <RewardBox>
          <Reward>R</Reward>
          <ProfileText>0</ProfileText>
        </RewardBox>
      </InnerBox>
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

function Menu() {
  return (
    <>
      <Container>
        <Header>
          <Logo>TRAP</Logo>
          <TfiClose className="close-icon" />
        </Header>
        <Profile />
        <MenuText>[ Menu ]</MenuText>
        <MenuBox>
          <MenuCard menuName="쓰레기통 지도" />
          <MenuCard menuName="쓰레기통 리스트" />
          <MenuCard menuName="신고 및 건의하기" />
          <MenuCard menuName="주요 처리 사례" />
          <MenuCard menuName="마이페이지" />
        </MenuBox>
        <LogInBox>로그인</LogInBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 220px;
  height: 80px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;

  .close-icon {
    font-size: 30px;
    color: black;
  }
`;

const Logo = styled.span`
  font-size: 38px;
  font-weight: 700;
  color: #1d70b6;
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
`;

export default Menu;
