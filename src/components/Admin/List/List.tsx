import React, { useEffect, useState } from "react";
import * as L from "./List.style";
import category from "../../../assets/category/category.svg";
import person from "../../../assets/Admin/List/person.svg";
import Register from "./Register";
import {
  approveRefuseBox,
  approveRefuseFlag,
  headerPath,
  registerFlag,
} from "../../../store/header";
import { useRecoilState } from "recoil";
import ApproveANDRefuse from "../ApproveANDRefuse";
import { useQuery } from "react-query";
import TokenAPI from "../../../lib/axios/TokenAxios";
import {
  adminEquipmentList,
  adminEquipmentListKey,
} from "../../../store/list/list";

const List = () => {
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

  const [option, setOption] = useState<string>("대여");
  const [flag, setFlag] = useRecoilState<boolean>(registerFlag);
  const [path, setPath] = useRecoilState<string>(headerPath);
  const [apReFlag, setApReFlag] = useRecoilState<boolean>(approveRefuseFlag);
  const [apReBox, setApReBox] = useRecoilState<boolean>(approveRefuseBox);
  const [list, setList] = useRecoilState<Array<listType>>(adminEquipmentList);
  const [shareKey, setShareKey] = useRecoilState<number>(adminEquipmentListKey);

  const { isLoading, error, data, refetch } = useQuery(
    "AdminEquipmentList",
    async () =>
      await TokenAPI.get(
        `admin/${
          option === "대여"
            ? "approve"
            : option === "대기"
            ? "pending"
            : "return-request"
        }`
      )
        .then((res) => {
          setList(res.data.list);
          console.log(res.data.list);
        })
        .catch((e) => {
          console.error(e);
        })
  );

  useEffect(() => {
    refetch();
  }, [option]);

  useEffect(() => {
    if (path === "approve") {
      setOption("대기");
      TokenAPI.get(`admin/pending`)
        .then((res) => {
          setList(res.data.list);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [path]);

  return (
    <L.Container>
      {path === "inquiry" && (
        <L.Option>
          {["대여", "반납", "대기"].map((d, i) => {
            return (
              <div
                key={i}
                className={option === d ? "selected" : ""}
                onClick={() => setOption(d)}
              >
                <img src={category} alt="OptionImg" />
                {d}
              </div>
            );
          })}
        </L.Option>
      )}
      <L.MainList>
        {list.map((d, i) => {
          return (
            <L.List key={i}>
              <img src={person} alt="person" />
              <p className="name">
                {d.grade}학년 {d.room}반 {d.number}번 {d.name}
              </p>
              <p className="reason">{d.reason}</p>
              <p className="equipment">{d.equipmentName}</p>
              {path === "inquiry" && (
                <p className="state">
                  {d.status === "APPROVE"
                    ? "대여"
                    : d.status === "PENDING"
                    ? "대기"
                    : "반납"}
                </p>
              )}
              <p className="date">
                {d.rentaledAt} ~ {d.terminateRental}
              </p>
              {path === "approve" && (
                <L.ApproveRefuse>
                  <button
                    id="O"
                    onClick={() => {
                      setApReFlag(true), setApReBox(true);
                      setShareKey(i);
                    }}
                  />
                  <button
                    id="X"
                    onClick={() => {
                      setApReFlag(false), setApReBox(true);
                    }}
                  />
                </L.ApproveRefuse>
              )}
            </L.List>
          );
        })}
      </L.MainList>
      {flag && <Register />}
      {apReBox && <ApproveANDRefuse />}
    </L.Container>
  );
};

export default List;
