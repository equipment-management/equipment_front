import { atom } from "recoil";

interface equipmentListType {
  equipmentId: number;
  equipmentName: string;
  brand: string;
  type: string;
  status: string;
  size: number;
  terminateRental: string;
  rentaledAt: string;
  userEquipmentId: string;
}

interface adminEquipmentListType {
  userEquipmentId: number;
  equipmentName: string;
  brand: string;
  type: string;
  size: number;
  status: string;
  rentaledAt: string;
  terminateRental: string;
  reason: string;
  grade: number;
  room: number;
  number: number;
  name: string;
}

export const equipmentList = atom<Array<equipmentListType>>({
  key: "equipmentList",
  default: [
    {
      equipmentId: 0,
      equipmentName: "",
      brand: "",
      type: "",
      status: "",
      size: 0,
      terminateRental: "",
      rentaledAt: "",
      userEquipmentId: "",
    },
  ],
});

export const adminEquipmentList = atom<Array<adminEquipmentListType>>({
  key: "equipmentList",
  default: [
    {
      userEquipmentId: 0,
      equipmentName: "",
      brand: "",
      type: "",
      size: 0,
      status: "",
      rentaledAt: "",
      terminateRental: "",
      reason: "",
      grade: 0,
      room: 0,
      number: 0,
      name: "",
    },
  ],
});

export const adminEquipmentListKey = atom<number>({
  key: "equipmentListKey",
  default: 0,
});
