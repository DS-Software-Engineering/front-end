import { request } from "./Client";

export const getExample = async () => {
  try {
    const response = await request.get({
      url: "/solveBoard/list",
      params: {},
    });
    console.log("주요 처리 사례 목록 요청 완료", response);
    return response;
  } catch (error) {
    console.error("주요 처리 사례 목록 요청 오류:", error);
    throw error;
  }
};
export const getExampleDetail = async (id) => {
  try {
    const response = await request.get({
      url: "/solveBoard/list/" + id,
      params: {},
    });
    console.log("주요 처리 사례 상세목록 요청 완료", response);
    return response;
  } catch (error) {
    console.error("주요 처리 사례 상세목록 요청 오류:", error);
    throw error;
  }
};
export const postExamplePost = async (data) => {
  console.log("사례 작성 요청:", data);
  try {
    const response = await request.get({
      url: "/solveBoard/post",
      data,
    });
    console.log("주요 처리 사례 작성 요청 완료", response);
    return response;
  } catch (error) {
    console.error("주요 처리 사례 작성 요청 오류:", error);
    throw error;
  }
};
