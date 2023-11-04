import React from "react";
import styled from "styled-components";
import ExampleComponent from "../components/mainexample/ExampleComponent";

const MainExample = () => {
  return (
    <Container>
      <Title>주요 처리 사례</Title>
      <ListBox>
        <ExampleComponent title="쓰레기통 추가설치" date="2023.00.00" />
        <ExampleComponent title="쓰레기통 추가설치" date="2023.00.00" />
        <ExampleComponent title="쓰레기통 추가설치" date="2023.00.00" />
      </ListBox>
    </Container>
  );
};
export default MainExample;

const Container = styled.div`
  width: 100hw;
  cursor: pointer;
`;
const Title = styled.div`
  font-family: "Nanum";
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
`;
const ListBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 10vw;
  text-align: center;
  justify-content: center;
`;
