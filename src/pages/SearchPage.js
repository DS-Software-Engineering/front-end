import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListComponent from "../components/main/ListComponent";
import CategoryComponent from "../components/main/CategoryComponent";
import {
  getSearch,
  getSearchCb,
  getSearchDrink,
  getSearchGen,
  getSearchRecycle,
  getSearchRecycleBin,
} from "../api/Search";
import { TiDelete } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { BsCupStraw } from "react-icons/bs";
import { LuCigarette } from "react-icons/lu";
import { BiRecycle } from "react-icons/bi";

const Search = () => {
  // 카테고리 선택
  const [clickGen, setClickGen] = useState(false);
  const [clickCb, setClickCb] = useState(false);
  const [clickDri, setClickDri] = useState(false);
  const [clickRecy, setClickRecy] = useState(false);

  const handleClickGen = async () => {
    searchGen(searchKeyword);
    setClickGen(!clickGen);
    setClickCb(false);
    setClickDri(false);
    setClickRecy(false);
    if (clickGen || clickDri || clickCb || clickRecy === true) {
      fetchData(searchKeyword);
    }
  };
  const handleClickCb = () => {
    searchCb(searchKeyword);
    setClickCb(!clickCb);
    setClickGen(false);
    setClickDri(false);
    setClickRecy(false);
    if (clickGen || clickDri || clickCb || clickRecy === true) {
      fetchData(searchKeyword);
    }
  };
  const handleClickDri = () => {
    searchDri(searchKeyword);
    setClickDri(!clickDri);
    setClickGen(false);
    setClickCb(false);
    setClickRecy(false);
    if (clickGen || clickDri || clickCb || clickRecy === true) {
      fetchData(searchKeyword);
    }
  };
  const handleClickRecy = () => {
    searchRecy(searchKeyword);
    setClickRecy(!clickRecy);
    setClickGen(false);
    setClickCb(false);
    setClickDri(false);
    if (clickGen || clickDri || clickCb || clickRecy === true) {
      fetchData(searchKeyword);
    }
  };

  // 초기 검색 리스트 목록(필터X)
  const fetchData = async (keyword) => {
    try {
      const response = await getSearch(keyword);
      setSearchList(response.data);
      console.log("초기 휴지통 검색 목록 가져오기 :", response);
    } catch (error) {
      console.error("초기 휴지통 검색 목록 가져오기 오류 :", error);
    }
  };
  useEffect(() => {
    fetchData("");
  }, []);

  // 검색 리스트 목록
  const searchGen = async (keyword) => {
    // 일반쓰레기 필터
    try {
      const response = await getSearchGen(keyword);
      console.log("일반휴지통 검색 목록 가져오기 :", response);
      setSearchList(response.data);
    } catch (error) {
      console.error("일반휴지통 검색 목록 가져오기 :", error);
    }
  };
  const searchDri = async (keyword) => {
    // 음료컵 필터
    try {
      const response = await getSearchDrink(keyword);
      console.log("음료컵 검색 목록 가져오기 :", response);
      setSearchList(response.data);
    } catch (error) {
      console.error("음료컵 검색 목록 가져오기 :", error);
    }
  };
  const searchCb = async (keyword) => {
    // 담배꽁초 필터
    try {
      const response = await getSearchCb(keyword);
      console.log("담배꽁초 검색 목록 가져오기 :", response);
      setSearchList(response.data);
    } catch (error) {
      console.error("담배꽁초 검색 목록 가져오기 :", error);
    }
  };
  const searchRecy = async (keyword) => {
    // 재활용 + 재활용정거장 필터
    try {
      //const response = await getSearchRecycleBin(keyword);
      const response2 = await getSearchRecycle(keyword);
      console.log("재활용 및 정거장 검색 목록 가져오기 :", response2);
      setSearchList(response2.data);
    } catch (error) {
      console.error("재활용 및 정거장 검색 목록 가져오기 :", error);
    }
  };

  // 검색 리스트 API 연동
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchList, setSearchList] = useState([]);

  // 검색어
  const handleInputChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    searchGen(keyword);
    searchDri(keyword);
    searchCb(keyword);
    searchRecy(keyword);
  };

  const clearInput = () => {
    setSearchKeyword("");
  };

  return (
    <Container>
      <SearchBox>
        <SearchInput
          id="input"
          type="text"
          autoFocus
          value={searchKeyword}
          onChange={handleInputChange}
        />
        <div id="delete-icon" onClick={clearInput}>
          <TiDelete size="35" />
        </div>
      </SearchBox>
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
      <ListBox>
        {searchList.map((request, index) => (
          <ListComponent
            key={index}
            id={request.id}
            title={request.detail_location}
            category={request.shape}
            address={request.address}
            latitude={request.latitude}
            longtitude={request.longtitude}
          />
        ))}
      </ListBox>
    </Container>
  );
};
export default Search;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ListBox = styled.div`
  width: 100hw;
  position: relative;
`;

const SearchBox = styled.div`
  width: 95%;
  height: 43px;
  border: 1px solid #929292;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: relative;
  margin: 0 auto;
  margin-top: 15px;

  #delete-icon {
    color: #888;
    position: absolute;
    top: 5px;
    right: 5%;
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  margin-left: 20px;
  font-size: 20px;
  color: #333;
  &:focus {
    outline: none;
  }
`;

const CategoryBox = styled.div`
  width: 368px;
  height: 25px;
  display: flex;
  z-index: 999;
  margin: 15px auto;
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
