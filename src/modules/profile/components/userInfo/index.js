import React, { useState } from "react";
import SpinnerComponent from "../../../../components/spinner/spinner";
import {
  LayoutProvider,
  ImageUploadProvider,
  StyledImgLabelBlock,
  StyledImgLabel,
  UploadImageProvider,
  UserInfoProvider,
  UserInformation,
  Education,
} from "./style";
import UserImage from "../../../../assets/images/user/user.svg";
import UploadImage from "../../../../assets/images/user/camera.svg";
import Pencil from "../../../../assets/images/user/pencil.svg"

export default function UserInfo() {
  const [uploadImage, setUploadImage] = useState("");
  const [imgLoading, setImgLoading] = useState(false);
  const handlChangeImg = async (event) => {
    await setImgLoading(true);
    event.preventDefault();
    const files = event.target.files;
      setUploadImage(URL.createObjectURL(files[0]));
      setImgLoading(false)
  };
  console.log(uploadImage, 'uploaddd')
  return (
    <LayoutProvider>
      <UserInfoProvider className="container">
        <ImageUploadProvider>
          <StyledImgLabelBlock>
            {!!uploadImage && (
              <div
                className={"clear"}
                onClick={(e) => e.stopPropagation()}
              ></div>
            )}
            <StyledImgLabel htmlFor={"subject_image_input"}>
              {imgLoading ? (
                <>
                  <SpinnerComponent />
                </>
              ) : (
                <UploadImageProvider>
                  <img
                    className="upload-image-parent"
                    src={
                      uploadImage
                        ? `${uploadImage}`
                        : UserImage
                    }
                    alt={"upload"}
                  />
                  <img
                    className="upload-image-child"
                    src={UploadImage}
                    alt="upload-image"
                  />
                </UploadImageProvider>
              )}
            </StyledImgLabel>
            <input
              id={"subject_image_input"}
              type={"file"}
              className={"d-none"}
              onChange={handlChangeImg}
            />
          </StyledImgLabelBlock>
          <UserInformation>
            <h2 className="d-flex justify-content-between"><span>Name Surname</span>
              <button className="btn">
                <img src={Pencil} alt='pencil' />
              </button>
            </h2>
            <p>
              272610
              <br /> Bachelor of science program in
              <br /> <strong>ENGINEERING AND MANAGEMENT</strong>
            </p>
          </UserInformation>
        </ImageUploadProvider>
        <Education>
          <p>
            Latest enrolment<br/> <strong>2021/2022 - Full time</strong><br/> 3^ enrollment, cohort 2019/20
            <br/>Academic progress status: <span>ACTIVE</span>
          </p>
        </Education>
      </UserInfoProvider>
    </LayoutProvider>
  );
}
