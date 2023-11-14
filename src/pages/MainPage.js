import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/main/SearchBar";
import RecycleExplainBtn from "../components/main/RecycleExplanBtn";
import { IoTrashOutline } from "react-icons/io5";
import { BsCupStraw } from "react-icons/bs";
import { LuCigarette } from "react-icons/lu";
import { BiRecycle } from "react-icons/bi";
import BottomSheet from "../components/main/BottomSheet/BottomSheet";
const { kakao } = window;

const Main = () => {
  /*** 지도 띄우기 */
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
    <Container>
      <SearchBar />
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
      <RecycleExplainBtn text={"성동 푸르미 재활용 정거장이란?"} />
      <Map id="map"></Map>
      <span id="bottom-sheet">
        <BottomSheet />
      </span>
    </Container>
  );
};
export default Main;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;

  #bottom-sheet {
    z-index: 999;
  }
`;

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;
const CategoryBox = styled.div`
  width: 368px;
  height: 25px;
  display: flex;
  z-index: 99;
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translate(-50%, 0%);
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
