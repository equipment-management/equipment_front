import { atom } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: {
    login: false,
    admin: false,
  },
});
