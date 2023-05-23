import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import baseURL from "./baseURL";

// Axios 인스턴스 생성
const API = axios.create({
  baseURL: `${baseURL}`,
  timeout: 10000,
});

// 토큰 재발급 함수
async function equipment_refreshToken(): Promise<string | null> {
  try {
    const equipment_refreshToken = localStorage.getItem(
      "equipment_refreshToken"
    );
    if (!equipment_refreshToken) return null;

    const response = await API.post("/auth/refresh", {
      equipment_refreshToken,
    });

    const { equipment_token } = response.data;
    localStorage.setItem("equipment_token", equipment_token);

    return equipment_token;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    return null;
  }
}

// Request 인터셉터 - 토큰 추가
API.interceptors.request.use((config) => {
  const equipment_token = localStorage.getItem("equipment_token");
  if (equipment_token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${equipment_token}`,
    } as unknown as AxiosHeaders; // 타입 캐스팅
  }
  return config;
});

// Response 인터셉터 - 토큰 갱신
API.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { response } = error;

    // 토큰 만료 (HTTP 상태 코드 401)
    if (response && response.status === 401) {
      const originalRequest: AxiosRequestConfig = error.config || {}; // 기본값으로 빈 객체를 할당

      const equipment_token = await equipment_refreshToken();

      // 토큰 재발급 성공
      if (equipment_token) {
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${equipment_token}`,
        } as unknown as AxiosHeaders; // 타입 캐스팅
        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
