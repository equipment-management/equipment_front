import { atom } from "recoil";

export const headerPath = atom({
  key: "headerPath",
  default: {
    now: "request",
    before: "",
  },
});
