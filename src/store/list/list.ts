import { atom } from "recoil";

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
