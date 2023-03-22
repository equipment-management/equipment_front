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
