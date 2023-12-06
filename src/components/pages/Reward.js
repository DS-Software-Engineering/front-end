import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RewardListComponent from "../mypage/RewardListComponent";
import { getReward } from "../../api/Mypage";

function Reward() {
  const [rewardAmount, setRewardAmount] = useState(0);
  const [rewardHistory, setRewardHistory] = useState([]);

  useEffect(() => {
    fetchRewardData();
  }, []);

  const fetchRewardData = async () => {
    try {
      const response = await getReward();
      if (response.status === 200) {
        const data = response.data[0];
        setRewardAmount(data.reduce((total, item) => total + item.reward, 0));
        setRewardHistory(data);
      } else {
        console.error("리워드 정보 요청 실패:", response.message);
      }
    } catch (error) {
      console.error("리워드 정보 요청 오류:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Extracting YYYY-MM-DD
  };

  return (
    <Container>
      <TitleSpan>리워드</TitleSpan>
      <RewardBox>
        <RewardIcon>R</RewardIcon>
        <RewardSpan>{rewardAmount}</RewardSpan>
      </RewardBox>
      <TitleSpan>리워드 적립 내역</TitleSpan>

      <ListBox>
        {rewardHistory.map((item) => (
          <RewardListComponent
            key={item.id}
            title={item.address}
            date={formatDate(item.date)}
            reward={`+${item.reward} 적립`}
            address={item.detail_location}
          />
        ))}
      </ListBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const RewardBox = styled.div`
  width: 210px;
  height: 75px;
  border: 1px solid #ffdf6c;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

const RewardIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #ffdf6c;
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const RewardSpan = styled.span`
  font-size: x-large;
`;

const ListBox = styled.div`
  width: 100%;
  position: relative;
`;

export default Reward;
