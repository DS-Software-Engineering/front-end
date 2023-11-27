import React from "react";
import styled from "styled-components";
import ListComponent from "../main/ListComponent";
import { getFavList } from "../../api/Map";

function FavList() {
  return (
    <Container>
      <TitleSpan>즐겨찾기 목록</TitleSpan>

      <ListBox>
        <ListComponent title="장소명1" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명2" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명3" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명4" category="음료 컵" address="상세주소" />
        <ListComponent title="장소명5" category="음료 컵" address="상세주소" />
      </ListBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const ListBox = styled.div`
  width: 100%;
  position: relative;
`;

export default FavList;
