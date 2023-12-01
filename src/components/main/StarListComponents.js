import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { deleteFavoriteDelete, postFavoriteCreate } from "../../api/Favorite";

const StarListComponent = (props) => {
  const Client_id = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const latitude = props.latitude;
  const longtitude = props.longtitude;
  const mapImageUrl = `https://maps.googleapis.com/maps/api/streetview?size=70x70&location=${latitude},${longtitude}&fov=80&heading=70&pitch=0&key=${Client_id}`;

  // 즐겨찾기 api연동
  const [binId, setBinId] = useState(props.id);
  const [binType, setBinType] = useState("general"); // ***오류로 인해 기본 general로 해둠
  const [star, setStar] = useState(false);

  /*
  if (props.type_general) {
    setBinType("general");
  } else if (props.type_drink) {
    setBinType("drink");
  } else if (props.type_cb) {
    setBinType("cb");
  } else if (props.type_recycle) {
    setBinType("recycle");
  }
  */

  const handleFavoriteBtn = () => {
    setStar(!star);
    if (!star) {
      createFavorite();
    } else {
      deleteFavorite();
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
            {!star ? <FaRegStar /> : <FaStar />}
          </Favorite>
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
