const baseURL = "http://localhost:8080";

const baseHeaders = {
  "Content-Type": "application/json",
};

const getHeadersWithToken = () => {
  const token = localStorage.getItem("token");
  return token
    ? { ...baseHeaders, Authorization: `Bearer ${token}` }
    : { ...baseHeaders };
};

const sendAuthorizedRequest = async ({ url, headers, method, data }) => {
  const requestOptions = {
    method,
    headers: { ...getHeadersWithToken(), ...headers },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  const response = await fetch(baseURL + url, requestOptions);
  return response.json();
};

const createRequestMethod = (method) => async (requestConfig) =>
  sendAuthorizedRequest({ ...requestConfig, method });

export const request = {
  get: createRequestMethod("get"),
  post: createRequestMethod("post"),
  put: createRequestMethod("put"),
  patch: createRequestMethod("patch"),
  delete: createRequestMethod("delete"),
};
