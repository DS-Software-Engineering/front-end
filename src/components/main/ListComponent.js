import React from "react";
import styled from "styled-components";

const ListComponent = (props) => {
  return (
    <>
      <Container>
        <TextBox>
          <BigText>{props.title}</BigText>
          <SmallText>{props.category}</SmallText>
          <Address>{props.address}</Address>
          <Image>{props.image}</Image>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default ListComponent;

const Container = styled.div`
  width: 100hw;
  height: 70px;
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
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  float: left;
`;
const SmallText = styled.div`
  display: inline-block;
  margin-left: 10px;
  margin-top: 5px;
  color: #929292;
  font-size: 15px;
`;
const Address = styled.div`
  display: block;
  clear: left;
  margin-top: 7px;
  color: #555555;
`;
const Image = styled.div`
  width: 55px;
  height: 55px;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #909090;
  border-radius: 5px;
`;
