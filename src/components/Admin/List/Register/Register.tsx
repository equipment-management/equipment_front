import React, { useEffect, useState } from "react";
import * as R from "./Register.style";
import image from "../../../../assets/Admin/List/image.svg";
import { changeEquipmentCategory } from "../../../../common/function/ChangeEquipmentCategoryToEnglish";
import { useRecoilState } from "recoil";
import { headerPath, registerFlag } from "../../../../store/header";

const Register = () => {
  const [FILE, setFILE] = useState<File>();
  const [flag, setFlag] = useRecoilState<boolean>(registerFlag);
  const [categoryName, setCategoryName] = useState<string>("");
  const [path, setPath] = useRecoilState<string>(headerPath);

  const handleFileChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    setFILE(file);
  };

  const cancelRegister = () => {
    setFlag(false);
    setPath("inquiry");
  };

  return (
    <R.Register>
      <button onClick={() => cancelRegister()}>X</button>
      <R.Margin>
        <p>기자재 등록</p>
        <R.Input
          id="name"
          type="text"
          placeholder="기자재 이름을 적어주세요"
          width={"600px"}
        />
        <R.Container>
          <R.BrandImage>
            <R.Input
              type="text"
              placeholder="기자재 브랜드를 적어주세요"
              width={"350px"}
            />
            <label htmlFor="inputFile">
              <p>{FILE ? FILE.name : "선택된 사진 없음"}</p>
              <img src={image} alt="사진 이미지" />
            </label>
            <input type="file" id="inputFile" onChange={handleFileChange} />
            <button>등록</button>
          </R.BrandImage>
          <R.SelectContainer>
            {["태블릿", "스마트폰", "데스크탑", "노트북", "모니터"].map(
              (d, i) => {
                return (
                  <R.Btn key={i}>
                    <button
                      className={
                        categoryName === changeEquipmentCategory(d)
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setCategoryName(changeEquipmentCategory(d))
                      }
                    >
                      {d}
                    </button>
                  </R.Btn>
                );
              }
            )}
          </R.SelectContainer>
        </R.Container>
      </R.Margin>
    </R.Register>
  );
};

export default Register;
