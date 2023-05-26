import { atom, useRecoilState } from "recoil";

export const headerPath = atom({
  key: "headerPath",
  default:
    localStorage.getItem("equipment_admin") === "true" ? "inquiry" : "request",
});
