import { atom } from "recoil";

export const lendDate = atom({
  key: "lendDate",
  default: {
    start: "",
    end: "",
  },
});

export const selectCategory = atom({
  key: "selectCategory",
  default: "스마트폰",
});

export const categoryKind = atom({
  key: "categoryKind",
  default: [],
});
