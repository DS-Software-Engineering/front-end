import React from "react";
import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { BsCupStraw } from "react-icons/bs";
import { LuCigarette } from "react-icons/lu";
import { BiRecycle } from "react-icons/bi";
const CategoryComponent = () => {
  return (
    <CategoryBox>
      <Category>
        <IoTrashOutline /> 일반쓰레기
      </Category>
      <Category>
        <BsCupStraw /> 음료 컵
      </Category>
      <Category>
        <LuCigarette /> 담배꽁초
      </Category>
      <Category>
        <BiRecycle /> 재활용정거장
      </Category>
    </CategoryBox>
  );
};
export default CategoryComponent;

const CategoryBox = styled.div`
  width: 368px;
  height: 25px;
  display: flex;
  z-index: 999;
  margin: 15px auto;
  justify-content: space-between;
`;
const Category = styled.div`
  width: 85px;
  height: 25px;
  background-color: #fff;
  border: 1px solid #929292;
  border-radius: 20px;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
`;
