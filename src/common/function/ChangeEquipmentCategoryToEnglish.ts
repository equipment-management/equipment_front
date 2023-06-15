export const changeEquipmentCategory = (name: string) => {
  switch (name) {
    case "스마트폰":
      return "PHONE";

    case "데스크탑":
      return "DESKTOP";

    case "모니터":
      return "MONITOR";

    case "노트북":
      return "LAPTOP";

    case "태블릿":
      return "TABLET";

    default:
      return "";
  }
};
