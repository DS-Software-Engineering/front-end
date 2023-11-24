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
