import React from "react";
import styled from "styled-components";

const RecycleExplain = () => {
  return (
    <>
      <Container>
        <Title>성동 푸르미 재활용 정거장이란?</Title>
        <Text>
          코로나 19 및 비대면 문화 확산으로 늘어나는 재활용 가능한 쓰레기를
          줄이고, 주택가에 혼합배출 하는 재활용 쓰레기의 배출 체계를 개선하고자
          정해진 거점 장소에 매주 2회 2시간씩 이동식 분리수거함을 설치하고
          주민들이 품목별 분리배출에 참여하는 사업입니다.
        </Text>
        <Title>참여방법은?</Title>
        <Text>
          매주 목요일, 일요일 저녁 7시부터 9시까지(2시간) 가까운 재활용정거장을
          방문하여 자원관리사의 도움에 따라 8종의 재활용 분리배출에
          참여해주세요.
        </Text>
        <Text>
          <div id="gray">
            ※ 한파·폭염시에는 운영시간을 변경할 수 있으며, 우천·강설시에는
            재활용 정거장이 미운영되오니 이용에 착오 없으시길 바랍니다. (단,
            기상청 예보 강수량이 시간당 3mm미만 인 경우 운영)
          </div>
        </Text>

        <Title>분리배출 품목 8종은 무엇인가요?</Title>
        <Text>
          투명페트병, 폐비닐, 플라스틱, 종이, 종이팩, 유리병, 고철(캔), 흰색
          스티로폼
        </Text>

        <Title>우천시 운영 기준</Title>
        <Text>
          운영 당일 14:00~16:00 기준 기상청 강수 예보량에 따라 운영 결정 우천시
          <table>
            <thead>
              <tr>
                <th>기상청 시간당 강수량</th>
                <th>정거장 운영 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3mm 이하</td>
                <td>운영 또는 단축운영</td>
              </tr>
              <tr>
                <td>3mm 초과</td>
                <td>단축운영 또는 미운영</td>
              </tr>
            </tbody>
          </table>
          <div id="gray">
            정거장 특성 또는 시간 당 기상상황에 따라 변동 및 탄력운영 가능
            <br /> ※ 정거장 운영 도중, 갑작스런 기상변동으로 단축운영시 “새소식”
            게시판에 “단축운영 알림” 공지
            <br />
            <a href="https://www.sd.go.kr/main/selectBbsNttList.do?bbsNo=183&key=1472&">
              성동구청 - 새소식 게시판
            </a>
          </div>
        </Text>

        <Title>한파 및 강설시 운영기준</Title>
        <Text>
          한파 및 강설시 운영기준 - 기상청 예보 기준, 정거장 운영 여부,
          비고순으로 정보를 제공하고 있습니다. 기상청 예보 기준 정거장 운영 여부
          비고 한파 한파주의보 운영 1시간 단축 운영 한파경보 미운영 강설 2cm이하
          운영 2cm초과 미운영
        </Text>
      </Container>
      <FooterBox>
        <div>담당부서 청소행정과 | 담당자 정은혜</div>
        <div>전화번호 02-2286-5540</div>
      </FooterBox>
    </>
  );
};
export default RecycleExplain;

const Container = styled.div`
  width: 100hw;
  margin: 0 20px;
`;
const Title = styled.h3`
  margin-top: 40px;
  font-size: 20px;
`;
const Text = styled.p`
  #gray {
    font-size: 15px;
    color: #999999;
  }
  table {
    margin: 5px 0;
    border-collapse: collapse;
    border: none;
  }
  th,
  td {
    border: 1px solid #111;
    background-clip: padding-box;
    padding: 8px;
    text-align: center;
  }
  a {
    text-decoration-line: none;
    color
  }
`;
const FooterBox = styled.div`
  width: 300px;
  margin: 40px auto;
  font-weight: bold;
  div {
    text-align: center;
    margin: 0 auto;
  }
`;
