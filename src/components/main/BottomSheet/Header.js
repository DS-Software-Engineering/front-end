import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Handle />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 24px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: relative;
  padding-top: 12px;
  padding-bottom: 4px;
`;

const Handle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: #1d70b6;
  margin: auto;
`;
