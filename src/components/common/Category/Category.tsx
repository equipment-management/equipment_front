import React, { useEffect, useState } from "react";
import * as C from "./Category.style";
import { useRecoilState } from "recoil";
import { localData } from "../../../store/loacl";
import UserCategory from "./UserCategory";
import AdminCategory from "./AdminCategory";
import styled from "styled-components";
import API from "../../../lib/axios/BaseAxios";
import { categoryKind } from "../../../store/category";

const Container = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(249, 248, 252);
`;

const Category = () => {
  const [categoryList, setCategoryList] = useRecoilState(categoryKind);

  useEffect(() => {
    API.get(`equipment/types`)
      .then(async (res: any) => {
        console.log(res.data.typeList);
        setCategoryList(res.data.typeList);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {useRecoilState(localData)[0].admin ? (
        <AdminCategory />
      ) : (
        <UserCategory />
      )}
    </Container>
  );
};

export default Category;
