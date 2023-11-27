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

export const postFindId = async (data) => {
  console.log("아이디 찾기 요청:", data);
  try {
    const res = await request.post({
      url: "/auth/findId",
      data,
    });
    console.log("아이디 찾기 완료", res);
    return res;
  } catch (error) {
    console.error("아이디 찾기 오류:", error);
    throw error;
  }
};

export const postFindPW = async (data) => {
  console.log("비밀번호 찾기 요청:", data);
  try {
    const res = await request.post({
      url: "/auth/findPassword",
      data,
    });

    console.log("비밀번호 찾기 완료", res);
    return res;
  } catch (error) {
    console.error("비밀번호 찾기 오류:", error);
    throw error;
  }
};

export const patchChangePW = async (data) => {
  console.log("비밀번호 수정 요청:", data);
  try {
    const res = await request.patch({
      url: "/auth/changePassword",
      data,
    });

    console.log("비밀번호 수정 완료", res);
    return res;
  } catch (error) {
    console.error("비밀번호 수정 오류:", error);
    throw error;
  }
};

export const getNickname = async (nickname) => {
  try {
    const res = await request.get({
      url: "/auth/checkNickname?nickname=" + nickname,
      params: {},
    });
    console.log("닉네임 중복 확인 요청 완료", res);
    return res;
  } catch (error) {
    console.error("닉네임 중복 확인 요청 오류:", error);
    throw error;
  }
};

export const getID = async (id) => {
  try {
    const res = await request.get({
      url: "/auth/checkId?id=" + id,
      params: {},
    });
    console.log("아이디 중복 확인 요청 완료", res);
    return res;
  } catch (error) {
    console.error("아이디 중복 확인 요청 오류:", error);
    throw error;
  }
};
