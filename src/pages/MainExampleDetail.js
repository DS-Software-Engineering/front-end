import React from "react";
import styled from "styled-components";

const MainExampleDetail = () => {
  return (
    <Container>
      <TopBox>
        <Name>[주요 처리 사례]</Name>
        <Title>쓰레기통 추가 설치</Title>
        <Date>2023.09.27</Date>
      </TopBox>
      <hr />
      <BottomBox>
        <Image></Image>
        <Content>
          신고가 많이 접수된 00동 00로 123-45번길 도로 앞에 쓰레기통을 추가로
          설치하였습니다.
        </Content>
        <Author>성수동 주민센터</Author>
        <ListButton
          onClick={() => {
            window.location.href = "/mainexample";
          }}
        >
          목록
        </ListButton>
      </BottomBox>
    </Container>
  );
};
export default MainExampleDetail;

const Container = styled.div`
  width: 100hw;
  justify-content: center;
`;
const TopBox = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
`;
const BottomBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Name = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: #c0c0c0;
`;
const Title = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 25px;
`;
const Date = styled.div`
  color: #999999;
  text-align: right;
  margin-top: 15px;
`;
const Image = styled.div`
  width: 280px;
  height: 280px;
  background-color: #999999;
  border-radius: 10px;
  margin: 30px auto;
  margin-bottom: 50px;
`;
const Content = styled.div``;
const Author = styled.div`
  text-align: right;
  margin-top: 30px;
  font-weight: bold;
`;
const ListButton = styled.div`
  width: 100px;
  height: 35px;
  background-color: #1d70b6;
  text-align: center;
  line-height: 35px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  margin-top: 50px;
  float: right;
  cursor: pointer;
`;
