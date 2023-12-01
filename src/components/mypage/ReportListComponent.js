import React, { useEffect } from "react";
import styled from "styled-components";

const ReportListComponent = (props) => {
  return (
    <>
      <Container onClick={props.onClick}>
        <TextBox>
          <BigText>{props.title}</BigText>
          <SmallText>{props.date}</SmallText>
          <Address>{props.address}</Address>
          <Image>
            <img
              id="images"
              src={props.image}
              style={{ width: "70px", height: "70px" }}
            />
          </Image>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default ReportListComponent;

const Container = styled.div`
  cursor: pointer;
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
  color: #929292;
  font-size: 15px;
`;
const Address = styled.div`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 15px;
  color: #555555;
`;
const Image = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 5px;
  right: 0px;
  background-color: #909090;
  border-radius: 5px;
`;
