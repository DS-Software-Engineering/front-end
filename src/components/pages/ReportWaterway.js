import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import axios from "axios";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function ReportWaterway() {
  //const { location, error } = useGeoLocation(geolocationOptions);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState();
  const [context, setContext] = useState("");

  const handleLocation = (event) => {
    setLocation(event.target.value);
    console.log(location);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleContext = (event) => {
    setContext(event.target.value);
  };
  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append("file", uploadFile);
      setFile(uploadFile);
      console.log(uploadFile);
      console.log("===useState===");
      console.log(file);
    }
  };

  const imgInput = useRef(null); // Ref 선언
  const onClickPost = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("images", imgInput.current.files[0]);
    formData.append("address", location);
    formData.append("detail_location", address);
    formData.append("context", context);
    formData.append("type", "2");
    axios
      .post("http://localhost:8080/declaration/uploadPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
          Authorization: `Bearer ${token}`,
        },
        //data: commentDTO,
      })
      .then((result) => {
        console.log("요청성공");
        console.log(result);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  };
  return (
    <Container>
      <TitleSpan>배수구 막힘 신고</TitleSpan>
      <form onSubmit={onClickPost}>
        <Box>
          <SubTitleSpan>위치</SubTitleSpan>
          <Input placeholder="나의 GPS 좌표" disabled />
        </Box>
        <Box>
          <SubTitleSpan>장소</SubTitleSpan>
          <Input
            value={location}
            onChange={handleLocation}
            placeholder="해당 장소의 위치를 적어주세요"
          />
        </Box>
        <Box>
          <SubTitleSpan>주소</SubTitleSpan>
          <Input
            value={address}
            onChange={handleAddress}
            placeholder="해당 상세주소를 적어주세요"
          />
        </Box>
        <Box>
          <SubTitleSpan>사진</SubTitleSpan>
          <input
            type="file"
            id="declarationImg"
            name="declarationImg"
            accept="image/*"
            onChange={onChangeImg}
            ref={imgInput}
          />
        </Box>
        <Box2>
          <SubTitleSpan>설명</SubTitleSpan>
          <ExplainTextBox
            value={context}
            onChange={handleContext}
            placeholder="신고 사진에 대한 설명을 적어주세요."
          />
        </Box2>
        <NextBtn
          type="submit"
          // onClick={() => {
          //   //window.location.href = "/report/complete";
          // }}*/
        >
          신고 완료!
        </NextBtn>
      </form>
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
  margin: 35px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubTitleSpan = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  margin-right: 15px;
`;

const Input = styled.input`
  width: 230px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #929292;
  padding: 0px 15px;
`;

const AttachFileBtn = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: #dceeff;
  margin-right: 10px;
`;

const ExplainTextBox = styled.textarea`
  width: 245px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid #929292;
  padding: 5px 7.5px;
`;

const NextBtn = styled.button`
  width: 300px;
  height: 65px;
  border: none;
  border-radius: 30px;
  background-color: #1d70b6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  font-size: x-large;
  font-weight: 700;
  color: white;
  position: fixed;
  bottom: 10px;
`;

export default ReportWaterway;
