import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExampleComponent from "../components/mainexample/ExampleComponent";
import { getExample } from "../api/Example";

const MainExample = () => {
  const token = localStorage.getItem("token");

  // 주요처리 사례 API 연동
  const [exampleList, setExampleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExample("");
        setExampleList(response.data);
        console.log("주요 처리 사례 목록 가져오기 :", response);
      } catch (error) {
        console.error("주요 처리 사례 목록 가져오기 오류 :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Title>주요 처리 사례</Title>
      {token ? (
        <PostBtn
          onClick={() => {
            window.location.href = "/mainexample/post";
          }}
        >
          글 작성
        </PostBtn>
      ) : (
        <></>
      )}

      <ListBox>
        {exampleList.map((request) => (
          <ExampleComponent
            key={request.id}
            id={request.id}
            title={request.title}
            context={request.context}
            date={request.date.split("T")[0]}
            image={request.image_url}
            userNickname={request.userNickname}
          />
        ))}
      </ListBox>
    </Container>
  );
};
export default MainExample;

const Container = styled.div`
  width: 100hw;
  cursor: pointer;
`;
const Title = styled.div`
  font-family: "Nanum";
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
  margin-bottom: 20px;
`;
const ListBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 10vw;
  text-align: center;
  justify-content: center;
`;
const PostBtn = styled.div`
  width: 80px;
  height: 25px;
  cursor: pointer;
  background-color: #1d70b6;
  text-align: center;
  line-height: 25px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  margin-right: 20px;
  float: right;
  margin-bottom: 20px;
`;
