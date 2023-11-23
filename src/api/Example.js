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

// formData
/*
export const checkSignUp = (e) => {
  
  const formData = new FormData();
  formData.append("email", email);
  formData.append("profileImg", imgRef.current.files[0]);

  fetch("http://localhost:8080/", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      throw new Error("에러 발생!");
    })
    .catch((error) => {
      alert(error);
    })
    .then((data) => {
      console.log(data);
    });
};
*/
export const postExamplePost = async (data) => {
  console.log("사례 작성 요청:", data);
  try {
    const response = await request.post({
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
