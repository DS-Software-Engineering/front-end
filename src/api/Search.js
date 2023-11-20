import { request } from "./Client";

export const getSearch = async (keyword) => {
  try {
    const response = await request.get({
      url: "/search?keyword=" + keyword,
      params: {},
    });
    console.log("휴지통 검색 요청 완료", response);
    return response;
  } catch (error) {
    console.error("휴지통 검색 요청 오류:", error);
    throw error;
  }
};

export const getSearchGen = async (keyword) => {
  try {
    const response = await request.get({
      url: "/search?keyword=" + keyword + "&type=general",
      params: {},
    });
    console.log("일반휴지통 검색 요청 완료", response);
    return response;
  } catch (error) {
    console.error("일반휴지통 검색 요청 오류:", error);
    throw error;
  }
};
export const getSearchCb = async (keyword) => {
  try {
    const response = await request.get({
      url: "/search?keyword=" + keyword + "&type=cb",
      params: {},
    });
    console.log("담배꽁초 검색 요청 완료", response);
    return response;
  } catch (error) {
    console.error("담배꽁초 검색 요청 오류:", error);
    throw error;
  }
};
export const getSearchDrink = async (keyword) => {
  try {
    const response = await request.get({
      url: "/search?keyword=" + keyword + "&type=drink",
      params: {},
    });
    console.log("음료컵 검색 요청 완료", response);
    return response;
  } catch (error) {
    console.error("음료컵 검색 요청 오류:", error);
    throw error;
  }
};
export const getSearchRecycle = async (keyword) => {
  try {
    const response = await request.get({
      url: "/search?keyword=" + keyword + "&type=recycle",
      params: {},
    });
    console.log("재활용 검색 요청 완료", response);
    return response;
  } catch (error) {
    console.error("재활용 검색 요청 오류:", error);
    throw error;
  }
};
export const getSearchRecycleBin = async (keyword) => {
  try {
    const response = await request.get({
      url: "/search?keyword=" + keyword + "&type=recycleBin",
      params: {},
    });
    console.log("재활용정거장 검색 요청 완료", response);
    return response;
  } catch (error) {
    console.error("재활용정거장 검색 요청 오류:", error);
    throw error;
  }
};
