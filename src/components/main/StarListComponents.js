import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { deleteFavoriteDelete, postFavoriteCreate } from "../../api/Favorite";

const StarListComponent = (props) => {
  // 즐겨찾기 api연동
  const latitude = props.latitude;
  const longtitude = props.longtitude;
  const binId = props.binId;
  const binType = props.binType;
  const [star, setStar] = useState(props.favorite);
  const token = localStorage.getItem("token");
  const Client_id = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const mapImageUrl = `https://maps.googleapis.com/maps/api/streetview?size=70x70&location=${latitude},${longtitude}&fov=80&heading=70&pitch=0&key=${Client_id}`;

  const handleFavoriteBtn = () => {
    if (!token) {
      window.location.href = "/login";
    } else {
      console.log(star);
      if (star === false) {
        createFavorite();
      } else {
        deleteFavorite();
      }
      setStar(!star);
      console.log(star);
    }
  };

  const createFavorite = async () => {
    const data = {
      binId: binId,
      binType: binType,
    };
    try {
      const response = await postFavoriteCreate(data);
      console.log("즐겨찾기 생성 성공:", response);
    } catch (error) {
      console.error("즐겨찾기 생성 실패:", error);
    }
  };
  const deleteFavorite = async () => {
    const data = {
      binId: binId,
      binType: binType,
    };
    try {
      const response = await deleteFavoriteDelete(data);
      console.log("즐겨찾기 삭제 성공:", response);
    } catch (error) {
      console.error("즐겨찾기 삭제 실패:", error);
    }
  };

  return (
    <>
      <Container>
        <TextBox>
          <BigText>{props.title}</BigText>
          <SmallText>{props.category}</SmallText>
          <Address>{props.address}</Address>
          <Favorite
            onClick={() => {
              handleFavoriteBtn();
            }}
          >
            {star === false ? <FaRegStar /> : <FaStar />}

          </Favorite>
          <Image
            id="roadview
          "
          >
            <img
              id="images"
              alt="roadview"
              src={latitude ? mapImageUrl : null}

              style={{
                objectFit: props.image ? "cover" : "none",
              }}
            />
            {props.image}
          </Image>
        </TextBox>
      </Container>
    </>
  );
};
export default StarListComponent;

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
const Favorite = styled.span`
  font-size: 25px;
  position: absolute;
  top: 30px;
  right: 80px;
  color: #ffd400;
  cursor: pointer;
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
