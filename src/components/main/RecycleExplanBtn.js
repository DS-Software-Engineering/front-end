import React, { useState } from "react";
import styled from "styled-components";

const RecycleExplainBtn = (props) => {
  return (
    <TextBox
      onClick={() => {
        window.location.href = "/explain";
      }}
    >
      {props.text}
    </TextBox>
  );
};
export default RecycleExplainBtn;

const TextBox = styled.div`
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 4px 4px -4px black;
  z-index: 999;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;
