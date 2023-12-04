import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/main/SearchBar";
import RecycleExplainBtn from "../components/main/RecycleExplanBtn";
import { IoTrashOutline } from "react-icons/io5";
import { BsCupStraw } from "react-icons/bs";
import { LuCigarette } from "react-icons/lu";
import { BiRecycle } from "react-icons/bi";
import {
  getMap,
  getMapCigarette,
  getMapDetail,
  getMapDrink,
  getMapGeneral,
  getMapRecycle,
} from "../api/Map";
import {
  getSearch,
  getSearchCb,
  getSearchDrink,
  getSearchGen,
  getSearchRecycleBin,
} from "../api/Search";
import { BOTTOM_SHEET_HEIGHT } from "../components/main/BottomSheet/BottomSheetOption";
import { motion } from "framer-motion";
import useBottomSheet from "../components/main/BottomSheet/useBottomSheet";
import ListComponent from "../components/main/ListComponent";
import generalImg from "../assets/img/generalImg.png";
import drinkImg from "../assets/img/drinkImg.png";
import cbImg from "../assets/img/cbImg.png";
import recycleImg from "../assets/img/recycleImg.png";
import blankImg from "../assets/img/blank.png";
import StarListComponent from "../components/main/StarListComponents";
const { kakao } = window;

const Main = () => {
  const token = localStorage.getItem("token");
  const { sheet, content } = useBottomSheet();
  const [latlng, setLatlng] = useState([]);

  // 카테고리 선택
  const [clickGen, setClickGen] = useState(false);
  const [clickCb, setClickCb] = useState(false);
  const [clickDri, setClickDri] = useState(false);
  const [clickRecy, setClickRecy] = useState(false);
  const [category, setCategory] = useState("general");
  const [id, setId] = useState();

  const handleClickGen = async () => {
    setClickGen(true);
    setClickCb(false);
    setClickDri(false);
    setClickRecy(false);
    setCategory("general");
    mapscript();
    markerGen();
    listGen();
  };
  const handleClickDri = () => {
    setClickDri(true);
    setClickGen(false);
    setClickCb(false);
    setClickRecy(false);
    setCategory("drink");
    mapscript();
    markerDri();
    listDri();
  };
  const handleClickCb = () => {
    setClickCb(true);
    setClickGen(false);
    setClickDri(false);
    setClickRecy(false);
    setCategory("cb");
    markerCb();
    mapscript();
    listCb();
  };
  const handleClickRecy = () => {
    setClickRecy(true);
    setClickGen(false);
    setClickCb(false);
    setClickDri(false);
    setCategory("recycle");
    markerRecy();
    mapscript();
    listRecy();
  };

  // 지도 마커 표시 API 연동
  // 전체 쓰레기통 마커
  /*
  const markerMap = async () => {
    try {
      const response = await getMap();
      //setLatlng(response.data);
      console.log("전체 쓰레기통 목록 가져오기 성공:", response);
    } catch (error) {
      console.error("전체 쓰레기통 목록 가져오기 오류:", error);
    }
  };
*/
  // 일반쓰레기통 마커
  const markerGen = async () => {
    try {
      const response = await getMapGeneral();
      setLatlng(response.data);
      console.log("일반쓰레기 마커 가져오기 성공:", response);
    } catch (error) {
      console.error("일반쓰레기 마커 가져오기 오류:", error);
    }
  };
  // 음료 마커
  const markerDri = async () => {
    try {
      const response = await getMapDrink();
      setLatlng(response.data);
      console.log("음료 마커 가져오기 성공:", response);
    } catch (error) {
      console.error("음료 마커 가져오기 오류:", error);
    }
  };
  // 담배꽁초 마커
  const markerCb = async () => {
    try {
      const response = await getMapCigarette();
      setLatlng(response.data);
      console.log("담배꽁초 마커 가져오기 성공:", response);
    } catch (error) {
      console.error("담배꽁초 마커 가져오기 오류:", error);
    }
  };
  // 재활용 마커
  const markerRecy = async () => {
    try {
      const response = await getMapRecycle();
      setLatlng(response.data);
      console.log("재활용 마커 가져오기 성공:", response);
    } catch (error) {
      console.error("재활용 마커 가져오기 오류:", error);
    }
  };

  // 하단 쓰레기통 리스트 API 연동
  const [searchList, setSearchList] = useState([]);
  /*
  const listAll = async (keyword) => {
    try {
      const response = await getSearch("");
      setSearchList(response.data);
      setDetail([]);
      console.log("전체 쓰레기통 리스트 가져오기 :", response);
    } catch (error) {
      console.error("전체 휴지통 검색 목록 가져오기 오류 :", error);
    }
  };
  */
  const listGen = async (keyword) => {
    try {
      const response = await getSearchGen("");
      setSearchList(response.data);
      setDetail([]);
      console.log("일반쓰레기 리스트 가져오기 :", response);
    } catch (error) {
      console.error("일반쓰레기 리스트 가져오기 오류 :", error);
    }
  };
  const listDri = async (keyword) => {
    try {
      const response = await getSearchDrink("");
      setSearchList(response.data);
      setDetail([]);
      console.log("음료 리스트 가져오기 :", response);
    } catch (error) {
      console.error("음료 리스트 가져오기 오류 :", error);
    }
  };
  const listCb = async (keyword) => {
    try {
      const response = await getSearchCb("");
      setSearchList(response.data);
      setDetail([]);
      console.log("담배꽁초 리스트 가져오기 :", response);
    } catch (error) {
      console.error("담배꽁초 리스트 가져오기 오류 :", error);
    }
  };
  const listRecy = async (keyword) => {
    try {
      const response = await getSearchRecycleBin("");
      setSearchList(response.data);
      setDetail([]);
      console.log("재활용 리스트 가져오기 :", response);
    } catch (error) {
      console.error("재활용 리스트 가져오기 오류 :", error);
    }
  };

  // marker 클릭
  const [detail, setDetail] = useState([]);
  const markerDetail = async (id, category) => {
    if (category === "cb" || category === "drink") {
      try {
        const response = await getMapDetail(id, "general");
        setDetail(response.data);
        setSearchList([]);
        setId(id);
        setCategory(category);
        console.log("상세 정보 클릭 성공 :", response);
      } catch (error) {
        console.error("상세 정보 오류 :", error);
      }
    } else {
      try {
        const response = await getMapDetail(id, category);
        setDetail(response.data);
        setSearchList([]);
        setId(id);
        setCategory(category);
        console.log("상세 정보 클릭 성공 :", response);
      } catch (error) {
        console.error("상세 정보 오류 :", error);
      }
    }
  };

  useEffect(() => {
    mapscript();
    markerGen();
    markerDri();
    markerCb();
    markerRecy();
    //markerMap();
  }, []);

  useEffect(() => {
    mapscript();
  }, [clickGen, clickDri, clickCb, clickRecy, detail]);

  const mapscript = () => {
    /*** 지도 띄우기 */
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(37.5634371209034, 127.03691543197304), //지도의 중심좌표-위도,경도(성동구청)
      level: 5, //지도의 레벨(확대, 축소 정도)
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

    var imageSrc;
    if (category === "general") {
      imageSrc = generalImg;
    } else if (category === "drink") {
      imageSrc = drinkImg;
    } else if (category === "cb") {
      imageSrc = cbImg;
    } else if (category === "recycle") {
      imageSrc = recycleImg;
    } else {
      imageSrc = blankImg;
    }

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기
      var imageSize = new kakao.maps.Size(24, 35);
      // 마커 이미지를 생성
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      // 마커를 생성
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
      });
      kakao.maps.event.addListener(marker, "click", () => {
        if (!token) {
          window.location.href = "/login";
        } else {
          markerDetail(i, category);
        }
      });
    }
  };

  return (
    <Container>
      <SearchBar />
      <CategoryBox>
        <Category
          onClick={handleClickGen}
          style={{
            backgroundColor: clickGen ? "#DCEFFF" : "#ffffff",
            fontSize: clickGen ? "11.5px" : "11px",
          }}
        >
          <IoTrashOutline /> 일반쓰레기
        </Category>
        <Category
          onClick={handleClickDri}
          style={{
            backgroundColor: clickDri ? "#DCEFFF" : "#ffffff",
            fontSize: clickDri ? "11.5px" : "11px",
          }}
        >
          <BsCupStraw /> 음료 컵
        </Category>
        <Category
          onClick={handleClickCb}
          style={{
            backgroundColor: clickCb ? "#DCEFFF" : "#ffffff",
            fontSize: clickCb ? "11.5px" : "11px",
          }}
        >
          <LuCigarette /> 담배꽁초
        </Category>
        <Category
          onClick={handleClickRecy}
          style={{
            backgroundColor: clickRecy ? "#DCEFFF" : "#ffffff",
            fontSize: clickRecy ? "11.5px" : "11px",
          }}
        >
          <BiRecycle /> 재활용정거장
        </Category>
      </CategoryBox>
      <RecycleExplainBtn text={"성동 푸르미 재활용 정거장이란?"} />
      <Map id="map"></Map>
      <span id="bottom-sheet">
        <Wrapper
          ref={sheet}
          style={
            clickGen || clickDri || clickCb || clickRecy
              ? { top: "calc(100% - 150px)" }
              : { top: "calc(100% - 45px)" }
          }
        >
          <Wrapper2>
            <Handle />
          </Wrapper2>
          <BottomSheetContent ref={content}>
            <ListBox>
              {detail.map((request, index) => (
                <StarListComponent
                  key={request}
                  id={request.id}
                  title={request.detail_location}
                  category={request.shape}
                  address={request.address}
                  favorite={request.favorite}
                  latitude={request.latitude}
                  longtitude={request.longtitude}
                  binType={
                    category === "drink" || category === "cb"
                      ? "general"
                      : category
                  }
                  binId={id}
                />
              ))}
              {searchList.map((request, index) => (
                <ListComponent
                  key={request.id}
                  id={request.id}
                  title={request.detail_location}
                  category={request.shape}
                  address={request.address}
                  latitude={request.latitude}
                  longtitude={request.longtitude}
                />
              ))}
            </ListBox>
          </BottomSheetContent>
        </Wrapper>
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

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 999;
  //top: calc(100% - 150px); /*시트가 얼마나 높이 위치할지*/
  left: 0;
  right: 0;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: transform 350ms ease-out; /*바텀시트 애니메이션 속도*/
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const Wrapper2 = styled.div`
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
const ListBox = styled.div`
  width: 100hw;
  position: relative;
  padding-bottom: 120px;
  padding-top: 20px;
`;
