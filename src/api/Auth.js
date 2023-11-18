import { request } from "./Client";

export const postSignup = async (data) => {
  console.log("가입 요청:", data);
  try {
    const res = await request.post({ url: "/auth/signup", data });
    console.log("가입완료", res);
    return res;
  } catch (error) {
    console.error("가입 오류:", error);
    throw error;
  }
};

export const postSignin = async (data) => {
  console.log("로그인 요청:", data);
  try {
    const res = await request.post({ url: "/auth/signin", data });
    console.log("로그인 완료", res);
    return res;
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error;
  }
};
