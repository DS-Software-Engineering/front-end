import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReportListComponent from "../mypage/ReportListComponent";
import ReportModal from "../mypage/ReportModal";
import { getDeclaration, getDeclarationDetail } from "../../api/Mypage";

function ReportWaterwayHistory() {
  const [reportType, setReportType] = useState("2");
  const [reportList, setReportList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    fetchReportData("2");
  }, []);

  const fetchReportData = async (type) => {
    try {
      const response = await getDeclaration(type);
      setReportList(response.data[0]);
    } catch (error) {
      console.error("신고 내역 정보 요청 오류:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Extracting YYYY-MM-DD
  };

  const handleTabClick = (type) => {
    setReportType(type);
    fetchReportData(type);
  };

  const handleReportClick = (report) => {
    setSelectedReport(report); // 선택된 신고 정보 저장
    setModalOpen(true);
  };

  return (
    <Container>
      <TitleSpan>신고 내역</TitleSpan>
      <TapBox>
        <TapBtn
          onClick={() => {
            window.location.href = "/mypage/report/trash";
          }}
        >
          무단투기
        </TapBtn>
        <SelectedTapBtn onClick={() => handleTabClick("2")}>
          배수구
        </SelectedTapBtn>
      </TapBox>
      <ListBox>
        {reportList.map((report) => (
          <ReportListComponent
            key={report.id}
            title={report.address}
            date={formatDate(report.date)}
            address={report.detail_location}
            image={report.image_url}
            onClick={() => handleReportClick(report)}
          />
        ))}
      </ListBox>
      {modalOpen && selectedReport && (
        <ReportModal
          onClose={() => setModalOpen(false)}
          id={selectedReport.id}
          title={selectedReport.address}
          date={formatDate(selectedReport.date)}
          address={selectedReport.detail_location}
          image={selectedReport.image_url}
          context={selectedReport.context}
        />
      )}
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
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const TapBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 18px;
`;

const SelectedTapBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #dceeff;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 5px 5px lightgray;
  margin: 0px 7px;
`;

const TapBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  border: 0.1px solid lightgray;
  border-radius: 15px;
  box-shadow: 0px 3px 3px lightgray;
  margin: 0px 7px;
`;

const ListBox = styled.div`
  width: 100%;
  position: relative;
`;

export default ReportWaterwayHistory;
