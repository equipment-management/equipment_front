import axios from "axios";

const baseURL = "http://15.164.249.181:2542";

export const API = axios.create({
  baseURL,
  timeout: 1000,
});

export const APIToken = axios.create({
  baseURL,
  timeout: 1000,
});

APIToken.interceptors.request.use(async function (config) {
  const accessToken = localStorage.getItem("equipment_token");

  accessToken &&
    (config.headers = {
      // Authorization: `Bearer "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OTVmNTM5Mi0xMjNmLTQ4OGMtOGQ1MS1iMTMxZWVlM2UwMDEiLCJ0eXBlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY4MTg4ODU4OSwiZXhwIjoxNjg1NDg4NTg5fQ.R-0f13HJ6UGEZ0xzi9NShatwHWJOE8yoJBUmJ9HkLV8"`,
      Authorization: `Bearer ${accessToken}`,
    });
  return config;
});

// APIToken.interceptors.request.use(
//   function (response) {
//     return response;
//   },
//   async (error) => {
//     console.log(error);
//     const {
//       config,
//       response: { status },
//     } = error;
//     if (status === 401) {
//       const originalRequest = config;
//       const refreshToken = await localStorage.getItem("equipment_refreshToken");
//       // token refresh 요청
//       const { data } = await axios.post(
//         baseURL, // token refresh api
//         {},
//         { headers: { authorization: `Bearer ${refreshToken}` } }
//       );
//       // 새로운 토큰 저장
//       // dispatch(userSlice.actions.setAccessToken(data.data.accessToken)); store에 저장
//       const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
//         data;
//       await localStorage.multiSet([
//         ["equipment_token", newAccessToken],
//         ["equipment_refreshToken", newRefreshToken],
//       ]);
//       originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
//       // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
//       return axios(originalRequest);
//     }
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     console.log("response error", error);
//     return Promise.reject(error);
//   }
// );

// APIToken.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async (error) => {
//     if (axios.isAxiosError(error) && error.response) {
//       const { config, response } = error;
//       if (response.data.status === 401 && getToken().refreshToken) {
//         try {
//           const {
//             data: { accessToken, refreshToken },
//           } = await axios({
//             method: "POST",
//             url: `${conf.baseUrl}/user/token-reniew`,
//             headers: {
//               "refresh-token": `Bearer ${getToken().refreshToken}`,
//             },
//           });

//           setToken(accessToken, refreshToken);
//           if (config?.headers)
//             config.headers.Authorization = `Bearer ${accessToken}`;

//           return axios(config!!);
//         } catch (e) {
//           if (
//             error.response.data.status === 401 ||
//             error.response.data.status === 404
//           ) {
//             router.push("/login");
//             clearToken();
//           }
//         }
//       } else return Promise.reject(error);
//     }
//   }
// );

// localStorage.removeItem("equipment_token");
// localStorage.removeItem("equipment_admin");
// localStorage.removeItem("equipment_refreshToken");
// localStorage.removeItem("equipment_user_id");

// localStorage.setItem(
//   "equipment_token",
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDhiNjY5NC00ZmQ5LTQ5MzgtYjNlYy1lZjIyMjZiZTljYWYiLCJ0eXBlIjoiUk9MRV9TVFVERU5UIiwiaWF0IjoxNjgxODgwODYxLCJleHAiOjE2ODU0ODA4NjF9.Rq--Q3RsjcdsvKDa1PMCKqFvsLP7abWGm-_PJ6SdOjo"
// );
