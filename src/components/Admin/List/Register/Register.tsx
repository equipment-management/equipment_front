import React, { useEffect, useState } from "react";
import * as R from "./Register.style";
import image from "../../../../assets/Admin/List/image.svg";
import { changeEquipmentCategory } from "../../../../common/function/ChangeEquipmentCategoryToEnglish";
import { useRecoilState } from "recoil";
import { headerPath, registerFlag } from "../../../../store/header";
import { categoryKind } from "../../../../store/category";
import API from "../../../../lib/axios/BaseAxios";
import TokenAPI from "../../../../lib/axios/TokenAxios";

const Register = () => {
  interface equipmentType {
    name: string;
    brand: string;
    type: string;
    size: number;
    imageList: Array<number>;
  }

  const [FILE, setFILE] = useState<File>();
  const [flag, setFlag] = useRecoilState<boolean>(registerFlag);
  const [path, setPath] = useRecoilState<string>(headerPath);
  const [category] = useRecoilState<string[]>(categoryKind);
  const [equipmentInfo, setEquipmentInfo] = useState<equipmentType>({
    name: "string",
    brand: "string",
    type: "PHONE",
    size: 0,
    imageList: [0],
  });

  const handleFileChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setFILE(file);
  };

  const uploadImg = async () => {
    const formdata = new FormData();
    formdata.append("image", FILE!);
    console.log(formdata.append);

    await TokenAPI.post(`/upload`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sendData = async () => {
    await API.post(`/equipment`);
  };

  return (
    <R.Register>
      <button
        onClick={() => {
          setFlag(false);
          setPath("inquiry");
        }}
      >
        X
      </button>
      <R.Margin>
        <p>기자재 등록</p>
        <R.Input
          id="name"
          type="text"
          placeholder="기자재 이름을 적어주세요"
          width={"600px"}
          onChange={(e) => {
            setEquipmentInfo({ ...equipmentInfo, name: e.target.value });
          }}
        />
        <R.Container>
          <R.BrandImage>
            <R.Input
              type="text"
              placeholder="기자재 브랜드를 적어주세요"
              width={"350px"}
              onChange={(e) => {
                setEquipmentInfo({ ...equipmentInfo, brand: e.target.value });
              }}
            />
            <label htmlFor="inputFile">
              <p>{FILE ? FILE.name : "선택된 사진 없음"}</p>
              <img src={image} alt="사진 이미지" />
            </label>
            <input type="file" id="inputFile" onChange={handleFileChange} />
            <button
              onClick={() => {
                uploadImg();
              }}
            >
              등록
            </button>
          </R.BrandImage>
          <R.SelectContainer>
            {category.map((d: string, i: number) => {
              return (
                <R.Btn key={i}>
                  <button
                    className={
                      equipmentInfo.type === changeEquipmentCategory(d)
                        ? "selected"
                        : ""
                    }
                    onClick={() => {
                      setEquipmentInfo({
                        ...equipmentInfo,
                        type: changeEquipmentCategory(d),
                      });
                    }}
                  >
                    {d}
                  </button>
                </R.Btn>
              );
            })}
          </R.SelectContainer>
        </R.Container>
      </R.Margin>
    </R.Register>
  );
};

export default Register;
