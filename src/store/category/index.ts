import { atom } from "recoil";

interface lendDateType {
  start: string;
  end: string;
}

export const lendDate = atom<lendDateType>({
  key: "lendDate",
  default: {
    start: "",
    end: "",
  },
});

export const selectCategory = atom<string>({
  key: "selectCategory",
  default: "스마트폰",
});

export const categoryKind = atom<string[]>({
  key: "categoryKind",
  default: [],
});
