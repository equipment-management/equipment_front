import React, { useEffect, useState } from "react";
import * as A from "./Admin.style";
import { useNavigate } from "react-router-dom";
import Float from "./float/Float";

const AdminMain = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState("");

  if (localStorage.getItem("equipment_admin") == "false") {
    navigate("/");
  }

  return (
    <A.Admin>
      <A.statusBtnContainer>
        <A.statusBtn
          className={select == "rental" ? "select" : ""}
          onClick={() => {
            setSelect("rental");
          }}
        >
          대여
        </A.statusBtn>
        <A.statusBtn
          className={select == "return" ? "select" : ""}
          onClick={() => {
            setSelect("return");
          }}
        >
          반납
        </A.statusBtn>
        <A.statusBtn
          className={select == "wait" ? "select" : ""}
          onClick={() => {
            setSelect("wait");
          }}
        >
          대기
        </A.statusBtn>
        {/* <Float /> */}
      </A.statusBtnContainer>
    </A.Admin>
  );
};

export default AdminMain;

// localStorage.setItem("equipment_admin", "true");
