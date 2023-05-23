import { atom } from "recoil";

export const localData = atom({
  key: "localStorage",
  default: {
    token: localStorage.getItem("equipment_token"),
    refreshToekn: localStorage.getItem("equipment_refreshToken"),
    user_id: localStorage.getItem("equipment_user_id"),
    admin: localStorage.getItem("equipment_admin") === "true" ? true : false,
  },
});
