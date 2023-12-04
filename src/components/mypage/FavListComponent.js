import React, { useEffect } from "react";
import styled from "styled-components";
const { kakao } = window;

const FavListComponent = (props) => {
  const binId = props.binId;
  const binType = props.binType;
  const Client_id = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const latitude = props.latitude;
  const longtitude = props.longtitude;
  const mapImageUrl = `https://maps.googleapis.com/maps/api/streetview?size=70x70&location=${latitude},${longtitude}&fov=80&heading=70&pitch=0&key=${Client_id}`;
  return (
    <>
      <Container>
        <TextBox>
          <BigText>{props.address}</BigText>
          <SmallText>
            {props.category === "RecycleBin" ? "재활용 정거장" : "가로 휴지통"}
          </SmallText>
          <Address>{props.title}</Address>
          <Image
            id="roadview
          "
          >
            <img
              id="images"
              alt="roadview"
              src={mapImageUrl}
              style={{
                objectFit: props.image ? "cover" : "none",
              }}
            />
            {props.image}
          </Image>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default FavListComponent;

const Container = styled.div`
  cursor: pointer;
  width: 100hw;
  margin: auto 0;
  //border: 1px solid #111;
  padding-top: 10px;
  padding-left: 5%;
  padding-right: 5%;
`;
const TextBox = styled.div`
  //border: 1px solid #111;
  position: relative;
`;
const BigText = styled.div`
  width: 280px;
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
`;
const SmallText = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  color: #929292;
  font-size: 15px;
`;
const Address = styled.div`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 15px;
  color: #555555;
`;
const Image = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 5px;
  right: 0px;
  background-color: #909090;
  border-radius: 5px;
`;
