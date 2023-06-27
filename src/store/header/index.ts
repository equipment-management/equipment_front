import { atom, useRecoilState } from "recoil";

export const headerPath = atom<string>({
  key: "headerPath",
  default:
    localStorage.getItem("equipment_admin") === "true" ? "inquiry" : "request",
});

export const registerFlag = atom<boolean>({
  key: "registerFlag",
  default: false,
});

export const approveRefuseFlag = atom<boolean>({
  key: "approveRefuseFlag",
  default: false,
});

export const approveRefuseBox = atom<boolean>({
  key: "approveRefuseBox",
  default: false,
});
