import React from "react";
import styled from "styled-components";
import MainExampleDetail from "../../pages/MainExampleDetail";

const ExampleComponent = (props) => {
  return (
    <Container
      onClick={() => {
        window.location.href = "/mainexample/detail/" + props.id;
        <MainExampleDetail
          id={props.id}
          title={props.title}
          context={props.context}
          date={props.date}
          image={props.image_url}
          userNickname={props.userNickname}
        />;
      }}
    >
      <Image>
        <img
          id="images"
          src={props.image}
          alt="mainexample images"
          style={{
            objectFit: props.image ? "cover" : "none",
          }}
        />
      </Image>
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
    </Container>
  );
};
export default ExampleComponent;

const Container = styled.div`
  width: 170px;
  height: 250px;
  text-align: center;
  justify-content: center;
`;
const Image = styled.div`
  // width: 150px;
  // height: 150px;
  // background-color: #999999;
  // border-radius: 10px;
  // margin: 0 auto;
  #images {
    width: 150px;
    height: 150px;
    background-color: #999999;
    border-radius: 10px;
    margin: 0 auto;
    //object-fit: cover;
  }
`;
const Title = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 17px;
`;
const Date = styled.div`
  color: #999999;
`;
