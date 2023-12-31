import { request } from "./Client";

export const getMap = async () => {
  try {
    const res = await request.get({
      url: "/map",
      params: {},
    });
    console.log("전체 지도 마커 요청 완료", res);
    return res;
  } catch (error) {
    console.error("전체 지도 마커 요청 오류:", error);
    throw error;
  }
};
export const getMapGeneral = async () => {
  try {
    const res = await request.get({
      url: "/map?type=general",
      params: {},
    });
    console.log("일반쓰레기 마커 요청 완료", res);
    return res;
  } catch (error) {
    console.error("일반쓰레기 마커 요청 오류:", error);
    throw error;
  }
};
export const getMapDrink = async () => {
  try {
    const res = await request.get({
      url: "/map?type=drink",
      params: {},
    });
    console.log("음료 마커 요청 완료", res);
    return res;
  } catch (error) {
    console.error("음료 마커 요청 오류:", error);
    throw error;
  }
};
export const getMapCigarette = async () => {
  try {
    const res = await request.get({
      url: "/map?type=cb",
      params: {},
    });
    console.log("담배꽁초 마커 요청 완료", res);
    return res;
  } catch (error) {
    console.error("담배꽁초 마커 요청 오류:", error);
    throw error;
  }
};
export const getMapRecycle = async () => {
  try {
    const res = await request.get({
      url: "/map?type=recycle",
      params: {},
    });
    console.log("재활용 마커 요청 완료", res);
    return res;
  } catch (error) {
    console.error("재활용 마커 요청 오류:", error);
    throw error;
  }
};

export const getFavList = async () => {
  try {
    const res = await request.get({
      url: "/myPage/favoriteBin",
      params: {},
    });
    console.log("즐겨찾기 목록 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("즐겨찾기 목록 정보 요청 오류:", error);
    throw error;
  }
};
export const getMapDetail = async (binId, binType) => {
  try {
    const res = await request.get({
      url: "/map/detail?binId=" + binId + "&binType=" + binType,
      params: {},
    });
    console.log("마커 상세 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("마커 상세 정보 요청 오류:", error);
    throw error;
  }
};
