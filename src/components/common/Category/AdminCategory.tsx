import React, { useState } from "react";
import * as C from "./Category.style";
import CategoryImg from "../../../assets/category/category.png";
import { useRecoilState } from "recoil";
import { categoryKind, selectCategory } from "../../../store/category";
import { headerPath } from "../../../store/header";

const AdminCateogry = () => {
  const [list, setList] = useRecoilState(categoryKind);
  const [selectList, setSelectList] = useRecoilState<string>(selectCategory);
  const [path, setPath] = useRecoilState<string>(headerPath);

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <C.AdminMainContainer>
      <C.AdminMain
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <img src={CategoryImg} alt="카테고리" />
        <p>{path == "requestDetail" ? "전체" : selectList}</p>
        {toggle && (
          <C.AdminListContainer>
            {list.map((i, idx) => (
              <C.Lists
                key={idx}
                onClick={(e) => {
                  setToggle(!toggle);
                  setSelectList(i);
                  e.stopPropagation();
                }}
              >
                <C.AdminList>
                  <img src={CategoryImg} alt="카테고리" />
                  <p>{i}</p>
                </C.AdminList>
              </C.Lists>
            ))}
          </C.AdminListContainer>
        )}
      </C.AdminMain>
    </C.AdminMainContainer>
  );
};

export default AdminCateogry;
