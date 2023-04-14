import { atom } from "recoil";

export const LendDate = atom({
  key: "LendDate",
  default: {
    start: "",
    end: "",
  },
});

export const LastCategory = atom({
  key: "LastCategory",
  default: "스마트폰",
});

export const Rent = atom({
  key: "Rent",
  default: [
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "PENDING",
      size: 0,
    },
    {
      equipmentId: 2,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "APPROVE",
      size: 0,
    },
    {
      equipmentId: 3,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "DENY",
      size: 0,
    },
    {
      equipmentId: 4,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "RETURN",
      size: 0,
    },
  ],
});

export const equipmentList = atom({
  key: "equipmentList",
  default: [
    {
      equipmentId: 1,
      equipmentName: "test",
      brand: "test",
      type: "test",
      state: "",
      size: 5,
    },
  ],
});

//["스마트폰", "데스크탑", "모니터", "노트북"]
