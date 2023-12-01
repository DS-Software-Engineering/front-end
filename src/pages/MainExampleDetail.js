import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getExampleDetail } from "../api/Example";
import { useParams } from "react-router-dom";

const MainExampleDetail = (props) => {
  // 주요 처리 사례 상세 목록 API 연동
  const [exampleDetailList, setExampleDetailList] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await getExampleDetail(params.id);
        setExampleDetailList(response.data);
        console.log("주요 처리 사례 상세목록 가져오기 :", response);
      } catch (error) {
        console.error("주요 처리 사례 상세목록 가져오기 오류 :", error);
      }
    };
    fetchData();
  }, []);

  // 여러장 이미지 보여주기
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Container>
      <Name>[주요 처리 사례]</Name>
      {exampleDetailList.map((request, id) => (
        <>
          <TopBox>
            <Title>{request.title}</Title>
            <Date>{request.date}</Date>
          </TopBox>
          <hr />
          <BottomBox>
            <Image>
              <img
                id="images"
                src={request.image_url[currentImageIndex]}
                alt={`mainexample images  ${currentImageIndex + 1}`}
                style={{
                  objectFit: request.image_url.length === 0 ? "none" : "cover",
                }}
                onClick={() => {
                  setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % request.image_url.length
                  );
                }}
              />
            </Image>
            <Content>{request.context}</Content>
            <Author>{request.userNickname}</Author>
          </BottomBox>
        </>
      ))}
      <ListButton
        onClick={() => {
          window.location.href = "/mainexample";
        }}
      >
        목록
      </ListButton>
    </Container>
  );
};
export default MainExampleDetail;

const Container = styled.div`
  width: 100hw;
  justify-content: center;
`;
const TopBox = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 0px;
`;
const BottomBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Name = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  font-size: 15px;
  color: #c0c0c0;
`;
const Title = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 25px;
`;
const Date = styled.div`
  color: #999999;
  text-align: right;
  margin-top: 15px;
`;
const Image = styled.div`
  // width: 280px;
  // height: 280px;
  // background-color: #999999;
  // border-radius: 10px;
  // margin: 30px auto;
  // margin-bottom: 50px;
  #images {
    width: 280px;
    height: 280px;
    background-color: #999999;
    border-radius: 10px;
    margin: 30px auto;
    margin-bottom: 50px;
    margin-left: 20px;
    //object-fit: cover;
  }
`;
const Content = styled.div``;
const Author = styled.div`
  text-align: right;
  margin-top: 30px;
  font-weight: bold;
`;
const ListButton = styled.div`
  width: 100px;
  height: 35px;
  background-color: #1d70b6;
  text-align: center;
  line-height: 35px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  margin-top: 50px;
  float: right;
  cursor: pointer;
  margin-right: 30px;
`;
