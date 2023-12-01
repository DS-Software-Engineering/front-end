import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { getDeclarationDetail } from "../../api/Mypage";

const ReportModal = (props) => {
  const [reportDetail, setReportDetail] = useState(null);

  useEffect(() => {
    if (props.id) {
      getDeclarationDetail(props.id)
        .then((response) => {
          console.log("상세 정보 불러오기 성공:", response);
          setReportDetail(response.data[0]);
        })
        .catch((error) => {
          console.error("상세 정보 불러오기 실패:", error);
        });
    }
  }, [props.id]);
  return (
    <>
      <ModalBackground></ModalBackground>
      <ModalContainer>
        <IoClose id="close-icon" onClick={props.onClose} />
        <Image>
          <img
            id="images"
            src={props.image}
            style={{ width: "150px", height: "150px" }}
          />
        </Image>
        <ModalSection>
          <ModalText>신고 장소명 :</ModalText>
          <ModalContext>{props.title}</ModalContext>
        </ModalSection>
        <Line></Line>
        <ModalSection>
          <ModalText>신고 위치 :</ModalText>
          <ModalContext>{props.address}</ModalContext>
        </ModalSection>
        <Line></Line>
        <ModalSection>
          <ModalText>신고 날짜 :</ModalText>
          <ModalContext>{props.date}</ModalContext>
        </ModalSection>
        <Line></Line>
        <ModalSection>
          <ModalText>신고 내용 :</ModalText>
          <ModalContext>{reportDetail?.context}</ModalContext>
        </ModalSection>
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  width: 320px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1001;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  top: 180px;
  left: 35px;

  #close-icon {
    font-size: xx-large;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const ModalBackground = styled.div`
  width: 390px;
  height: 100vh;
  z-index: 1000;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: black;
  opacity: 65%;
`;

const ModalText = styled.span`
  font-size: medium;
  font-weight: 700;
  color: #929292;
  margin-right: 10px;
`;

const ModalContext = styled.span`
  font-size: medium;
  font-weight: 700;
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  background-color: #909090;
  border-radius: 5px;
  margin: 20px 10px;
`;

const ModalSection = styled.div`
  width: 290px;
`;

const Line = styled.div`
  width: 290px;
  height: 1px;
  background-color: black;
  opacity: 9%;
  margin: 10px 0px;
`;

export default ReportModal;
