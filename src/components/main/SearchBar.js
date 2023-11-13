import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <SearchBox
      onClick={() => {
        window.location.href = "/search";
      }}
    >
      <AiOutlineSearch id="search-icon" size="35" />
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
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;

  #search-icon {
    color: #666;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    line-height: 43px;
  }
`;
