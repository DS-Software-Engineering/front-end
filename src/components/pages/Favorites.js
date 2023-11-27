import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { getFavList } from "../../api/Map";
const { kakao } = window;

function Favorites() {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(37.5634371209034, 127.03691543197304), //지도의 중심좌표-위도,경도(성동구청)
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    function setCenter() {
      // 이동할 위도 경도 위치를 생성
      var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
      // 지도 중심을 이동
      map.setCenter(moveLatLon);
    }

    function panTo() {
      // 이동할 위도 경도 위치를 생성
      var moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);
      // 지도 중심을 부드럽게 이동
      map.panTo(moveLatLon);
    }
  }, []);

  return (
    <>
      <Map id="map"></Map>
      <FavListBtn
        onClick={() => {
          window.location.href = "/mypage/favorites/list";
        }}
      >
        <IoLocationSharp id="location-icon" />
        <FavSpan>즐겨찾기 목록</FavSpan>
      </FavListBtn>
    </>
  );
}

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;

const FavListBtn = styled.div`
  width: 165px;
  height: 50px;
  background-color: #ffdf6c;
  border-radius: 30px;
  z-index: 99;
  position: absolute;
  top: 95px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: center;
  align-items: center;

  #location-icon {
    color: white;
    font-size: 32px;
    margin-right: 5px;
  }
`;

const FavSpan = styled.span`
  font-size: large;
`;

export default Favorites;
