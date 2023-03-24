import { atom } from "recoil";

export const EqList = atom({
  key: "EqList",
  default: ["스마트폰", "데스크탑", "모니터", "노트북"],
});

export const LendDate = atom({
  key: "LendDate",
  default: {
    start: "",
    end: "",
  },
});

export const Equipment = atom({
  key: "Equipment",
  default: {
    PHONE: [
      {
        equipmentId: 1,
        equipmentName: "아이폰",
        brand: "애플",
        type: "PHONE",
        size: 5,
      },
    ],
    LAPTOP: [
      {
        equipmentId: 1,
        equipmentName: "",
        brand: "",
        type: "LAPTOP",
        size: 5,
      },
    ],
    DESKTOP: [
      {
        equipmentId: 1,
        equipmentName: "",
        brand: "",
        type: "DESKTOP",
        size: 5,
      },
    ],
    MONITOR: [
      {
        equipmentId: 1,
        equipmentName: "",
        brand: "",
        type: "MONITOR",
        size: 5,
      },
    ],
  },
});

//["스마트폰", "데스크탑", "모니터", "노트북"]
