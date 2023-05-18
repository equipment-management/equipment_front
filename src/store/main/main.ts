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

export const equipmentList = atom({
  key: "equipmentList",
  default: [
    {
      equipmentId: 1,
      equipmentName: "test",
      brand: "test",
      type: "test",
      status: "",
      size: 5,
      terminateRental: "",
      rentaledAt: "",
      userEquipmentId: "",
    },
  ],
});

//["스마트폰", "데스크탑", "모니터", "노트북"]
