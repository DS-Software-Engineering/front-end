import { request } from "./Client";

export const getMyInfo = async () => {
  try {
    const response = await request.get({
      url: "/myPage/myInfo",
      params: {},
    });
    console.log("내 정보 요청 완료", response);
    return response;
  } catch (error) {
    console.error("내 정보 요청 오류:", error);
    throw error;
  }
};

export const getDeclaration = async (type) => {
  try {
    const res = await request.get({
      url: "/myPage/declaration/" + type,
      params: {},
    });
    console.log("신고 내역 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("신고 내역 정보 요청 오류:", error);
    throw error;
  }
};

export const getDeclarationDetail = async (id) => {
  try {
    const res = await request.get({
      url: "/myPage/declaration/detail/" + id,
      params: {},
    });
    console.log("신고 내역 상세보기 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("신고 내역 상세보기 정보 요청 오류:", error);
    throw error;
  }
};

export const getReward = async () => {
  try {
    const res = await request.get({
      url: "/myPage/reward",
      params: {},
    });
    console.log("리워드 정보 요청 완료", res);
    return res;
  } catch (error) {
    console.error("리워드 정보 요청 오류:", error);
    throw error;
  }
};
