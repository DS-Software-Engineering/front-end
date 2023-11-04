import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

const SearchBar = () => {
  return (
    <SearchBox>
      <SearchInput type="text" autoFocus />
      <div id="delete-icon">
        <TiDelete size="35" />
      </div>
    </SearchBox>
  );
};
export default SearchBar;

const SearchBox = styled.div`
  width: 95%;
  height: 43px;
  border: 1px solid #929292;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: relative;
  margin: 0 auto;
  margin-top: 15px;

  #delete-icon {
    color: #888;
    position: absolute;
    top: 5px;
    right: 5%;
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  margin-left: 20px;
  font-size: 20px;
  color: #333;
  &:focus {
    outline: none;
  }
`;
