import { request } from "./Client";

export const postFavoriteCreate = async (data) => {
  console.log("즐겨찾기 생성 요청:", data);
  try {
    const res = await request.post({ url: "/favorite/create", data });
    console.log("즐겨찾기 생성 완료", res);
    return res;
  } catch (error) {
    console.error("즐겨찾기 생성 오류:", error);
    throw error;
  }
};

export const deleteFavoriteDelete = async (data) => {
  console.log("즐겨찾기 삭제 요청:", data);
  try {
    const res = await request.delete({ url: "/favorite/delete", data });
    console.log("즐겨찾기 삭제 완료", res);
    return res;
  } catch (error) {
    console.error("즐겨찾기 삭제 오류:", error);
    throw error;
  }
};
