import React, { useState } from "react";
import * as F from "./Float.style";
import VBox from "../../../assets/admin/V.svg";
import XBox from "../../../assets/admin/X.svg";

const Float = () => {
  const [refusal, setRefusal] = useState<boolean>(false);

  return (
    <F.Float>
      {/* <F.FristBox></F.FristBox> */}
      <F.SecondeBox>
        {refusal ? "수락 하시겠습니까?" : "거절 하시겠습니까?"}
        <div>
          <img src={VBox} alt="확인 사진" />
          <img src={XBox} alt="거절 사진" />
        </div>
      </F.SecondeBox>
    </F.Float>
  );
};

export default Float;
