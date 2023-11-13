import React from "react";
import styled from "styled-components";
import ListComponent from "../ListComponent";

const Content = () => {
  return (
    <>
      <ListBox>
        <ListComponent title="장소명1" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명2" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명3" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명4" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명5" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명6" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명7" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명8" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명9" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명10" category="음료 컵" address="상세주소" />
      </ListBox>
    </>
  );
};
export default Content;

const ListBox = styled.div`
  width: 100hw;
  position: relative;
`;
