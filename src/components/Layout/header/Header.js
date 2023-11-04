import React, { useState } from "react";
import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";
import Menu from "../../menu/Menu";

function Header() {
  // 메뉴바 열기
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Container>
        <TfiMenu className="menu-icon" onClick={onClickButton} />
        <Logo
          onClick={() => {
            window.location.href = "/";
          }}
        >
          TRAP
        </Logo>
      </Container>
      {isOpen && (
        <Menu
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
}

const Logo = styled.span`
  font-size: 38px;
  font-weight: 700;
  color: #1d70b6;
  cursor: pointer;
`;

const Container = styled.header`
  //position: fixed;
  //top: 0;
  width: 100%;
  height: 80px;
  background-color: #dceeff;
  display: flex;
  align-items: center;
  justify-content: center;

  .menu-icon {
    font-size: 38px;
    color: #1d70b6;
    position: absolute;
    left: 20px;
  }
`;

export default Header;
