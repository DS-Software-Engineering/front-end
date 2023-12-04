import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavListComponent from "../mypage/FavListComponent";
import { getFavList } from "../../api/Map";

function FavList() {
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    fetchFavList();
  }, []);

  const fetchFavList = async () => {
    try {
      const response = await getFavList();
      setFavList(response.data);
    } catch (error) {
      console.error("즐겨찾기 목록 정보 요청 오류:", error);
    }
  };
  return (
    <Container>
      <TitleSpan>즐겨찾기 목록</TitleSpan>

      <ListBox>
        {favList.map((request) => (
          <FavListComponent
            key={request.binId}
            title={request.address}
            category={request.binType}
            address={request.detail_location}
            latitude={request.latitude}
            longtitude={request.longtitude}
          />
        ))}
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
