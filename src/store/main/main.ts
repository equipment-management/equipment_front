import { atom } from "recoil";

export const LendDate = atom({
  key: "LendDate",
  default: {
    start: "",
    end: "",
  },
});

export const Rent = atom({
  key: "Rent",
  default: [
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "standby",
      size: 0,
    },
    {
      equipmentId: 2,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "borrowing",
      size: 0,
    },
  ],
});

export const equipmentList = atom({
  key: "equipmentList",
  default: [
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      state: "",
      type: "PHONE",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      state: "",
      type: "PHONE",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      state: "",
      type: "PHONE",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      state: "",
      type: "PHONE",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      state: "",
      type: "PHONE",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      state: "",
      type: "PHONE",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      state: "",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      state: "",
      type: "PHONE",
      size: 5,
    },
  ],
});

//["스마트폰", "데스크탑", "모니터", "노트북"]
