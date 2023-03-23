import { atom } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: {
    token: "",
    admin: true,
  },
});