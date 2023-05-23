import { atom, useRecoilState } from "recoil";
import { localData } from "../loacl";

export const headerPath = atom({
  key: "headerPath",
  default:
    localStorage.getItem("equipment_admin") === "true" ? "inquiry" : "request",
});
