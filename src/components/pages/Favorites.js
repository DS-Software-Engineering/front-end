import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { getFavList } from "../../api/Map";
import generalImg from "../../assets/img/generalImg.png";

const { kakao } = window;

function Favorites() {
  const [latlng, setLatlng] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    markerFav();
  }, []); // 페이지가 처음 로딩될 때만 markerFav 함수를 호출

  useEffect(() => {
    mapscript();
  }, [latlng]); // latlng 상태가 변경될 때마다 mapscript 함수를 호출

  // 즐겨찾기 마커
  const markerFav = async () => {
    try {
      const response = await getFavList();
      setLatlng(response.data);
      console.log("즐겨찾기 마커 가져오기 성공:", response);
    } catch (error) {
      console.error("즐겨찾기 마커 가져오기 오류:", error);
    }
  };

  const mapscript = () => {
    /*** 지도 띄우기 */
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(37.5634371209034, 127.03691543197304), //지도의 중심좌표-위도,경도(성동구청)
      level: 6, //지도의 레벨(확대, 축소 정도)
    };

    // 지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

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

    // 나의 위치
    var myPosition = new kakao.maps.LatLng( // 기본위치(성동구청)
      37.5634371209034,
      127.036915431973047
    );
    var myimageSize = new kakao.maps.Size(24, 35);

    var myimageSrc = // 마커 이미지를 생성
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    var mymarkerImage = new kakao.maps.MarkerImage(myimageSrc, myimageSize);

    var myMarker = new kakao.maps.Marker({
      // 마커를 생성
      map: map,
      position: myPosition,
      image: mymarkerImage, // 마커 이미지
    });
    myMarker.setMap(map); // 마커 지도 위에 표시

    // latlng를 기반으로 positions 배열 생성
    var positions = latlng.map((request) => ({
      id: request.id,
      latlng: new kakao.maps.LatLng(request.latitude, request.longtitude),
    }));

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기
      var imageSize = new kakao.maps.Size(24, 35);
      // 마커 이미지를 생성
      var markerImage = new kakao.maps.MarkerImage(generalImg, imageSize);
      // 마커를 생성
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
      });
    }
  };

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
