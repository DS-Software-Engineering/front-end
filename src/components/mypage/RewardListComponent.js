import React, { useEffect } from "react";
import styled from "styled-components";

const RewardListComponent = (props) => {
  return (
    <>
      <Container>
        <TextBox>
          <BigText>{props.title}</BigText>
          <SmallText>{props.date}</SmallText>
          <RewardText>{props.reward}</RewardText>
          <Address>{props.address}</Address>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default RewardListComponent;

const Container = styled.div`
  width: 100hw;
  margin: auto 0;
  //border: 1px solid #111;
  padding-top: 10px;
  padding-left: 5%;
  padding-right: 5%;
`;
const TextBox = styled.div`
  //border: 1px solid #111;
  position: relative;
`;
const BigText = styled.div`
  width: 280px;
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
`;
const SmallText = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  display: inline-block;
  color: #929292;
  font-size: 15px;
`;

const RewardText = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  color: #929292;
  font-size: 15px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Address = styled.div`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 15px;
  color: #555555;
`;
