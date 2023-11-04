import React from "react";
import styled from "styled-components";

const ExampleComponent = (props) => {
  return (
    <Container
      onClick={() => {
        window.location.href = "/mainexample/detail";
      }}
    >
      <Image>{props.image}</Image>
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
    </Container>
  );
};
export default ExampleComponent;

const Container = styled.div``;
const Image = styled.div`
  width: 150px;
  height: 150px;
  background-color: #999999;
  border-radius: 10px;
`;
const Title = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 17px;
`;
const Date = styled.div`
  color: #999999;
`;
