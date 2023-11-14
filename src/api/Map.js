import { request } from "./client";

export const getMap = async () => {
  try {
    const res = await request.get({
      url: "/map",
      params: {},
    });
    console.log("지도 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("지도 정보 요청 오류:", error);
    throw error;
  }
};

export const getCigarette = async () => {
  try {
    const res = await request.get({
      url: "/map?type=cb",
      params: {},
    });
    console.log("담배꽁초 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("담배꽁초 정보 요청 오류:", error);
    throw error;
  }
};
export const getRecycleBin = async () => {
  try {
    const res = await request.get({
      url: "/map?type=recycleBin",
      params: {},
    });
    console.log("재활용 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("재활용 정보 요청 오류:", error);
    throw error;
  }
};
export const getGeneral = async () => {
  try {
    const res = await request.get({
      url: "/map?type=general",
      params: {},
    });
    console.log("일반쓰레기 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("일반쓰레기 정보 요청 오류:", error);
    throw error;
  }
};
