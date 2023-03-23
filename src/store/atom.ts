import { atom } from "recoil";

export const headerPath = atom({
  key: "headerPath",
  default: {
    now: "request",
    before: "",
  },
});

export const userInfo = atom({
  key: "userInfo",
  default: {
    token: "",
    admin: true,
  },
});

export const EqList = atom({
  key: "EqList",
  default: ["스마트폰", "데스크탑", "모니터", "노트북"],
});
