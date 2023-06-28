import React, { useState } from "react";
import * as A from "./ApproveANDRefuse.style";
import { useRecoilState } from "recoil";
import { approveRefuseBox, approveRefuseFlag } from "../../../store/header";
import { toast } from "react-toastify";
import {
  adminEquipmentList,
  adminEquipmentListKey,
} from "../../../store/list/list";
import API from "../../../lib/axios/BaseAxios";
import TokenAPI from "../../../lib/axios/TokenAxios";

interface listType {
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

const Toast = (bol: boolean, an: string) => {
  bol
    ? toast.success(`${an}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      })
    : toast.error(`${an}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
};

const ApproveANDRefuse = () => {
  const [apReFlag, setApReFlag] = useRecoilState<boolean>(approveRefuseFlag);

  return (
    <A.ApproveANDRefuse>
      {apReFlag ? <ApproveBox /> : <RefuseBox />}
    </A.ApproveANDRefuse>
  );
};

const ApproveBox = () => {
  const [apReBox, setApReBox] = useRecoilState<boolean>(approveRefuseBox);
  const [hash, setHash] = useState<string>("test");
  const [list, setList] = useRecoilState<Array<listType>>(adminEquipmentList);
  const [shareKey, setShareKey] = useRecoilState<number>(adminEquipmentListKey);
  const info = list[shareKey];

  const getHash = () => {
    API.get(`/admin/hash`)
      .then((d) => {
        console.log(d);
        Toast(true, "태그 완료");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const approve = () => {
    TokenAPI.post(`/admin/approve/${info.userEquipmentId}?hash=${hash}`)
      .then((d) => {
        console.log(d);
        Toast(true, "대여 승인");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <A.Approve>
      <div>
        <div id="info">
          <p>
            {info.grade}학년 {info.room}반 {info.number}번 {info.name}
          </p>
          <p>
            {info.rentaledAt} ~ {info.terminateRental}
          </p>
        </div>
        <p>{info.reason}</p>
        <div id="NFC">
          <button
            onClick={() => {
              getHash();
            }}
          >
            버튼을 누르고 기자재를 태그해주세요
          </button>
          <p>A1234567890 태크되었습니다.</p>
        </div>
        <A.ApproveRefuseContainer>
          <A.ApproveRefuse width={"300px"}>
            <A.Btn
              id="O"
              width={"100px"}
              onClick={() => {
                setApReBox(false);
                approve();
              }}
            />
            <A.Btn id="X" width={"100px"} onClick={() => setApReBox(false)} />
          </A.ApproveRefuse>
        </A.ApproveRefuseContainer>
      </div>
    </A.Approve>
  );
};

const RefuseBox = () => {
  const [apReBox, setApReBox] = useRecoilState<boolean>(approveRefuseBox);
  const [list, setList] = useRecoilState<Array<listType>>(adminEquipmentList);
  const [shareKey, setShareKey] = useRecoilState<number>(adminEquipmentListKey);
  const info = list[shareKey];

  const refuse = () => {
    TokenAPI.delete(`/admin/deny/${info.userEquipmentId}`)
      .then((d) => {
        console.log(d);
        Toast(true, "거절 완료");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <A.MiniBox>
      거절하시겠습니까?
      <A.ApproveRefuse width={"200px"}>
        <A.Btn
          id="O"
          width={"70px"}
          onClick={() => {
            setApReBox(false);
            refuse();
          }}
        />
        <A.Btn id="X" width={"70px"} onClick={() => setApReBox(false)} />
      </A.ApproveRefuse>
    </A.MiniBox>
  );
};

export default ApproveANDRefuse;
