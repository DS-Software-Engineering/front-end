import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";

function Header() {
  return (
    <Container>
      <TfiMenu className="menu-icon" />
      <Logo>TRAP</Logo>
    </Container>
  );
}

const Logo = styled.span`
  font-size: 38px;
  font-weight: 700;
  color: #1d70b6;
`;

const Container = styled.header`
  position: fixed;
  top: 0;
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
