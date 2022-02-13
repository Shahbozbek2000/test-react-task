import styled from "styled-components";

export const LayoutProvider = styled.div`
  width: 100%;
  height: auto;
  min-height: 63vh;
  background: #ffffff;
  box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 12.5072px 12.5072px;
`;

export const ImageUploadProvider = styled.div`
  display: flex !important;
  padding-top: 40px;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
export const StyledImgLabelBlock = styled.div`
  position: relative;
  width: 107px;
  height: 107px;
  /* border: 1px solid rgb(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  @media (max-width: 576px) {
    margin: auto;
  }
`;
export const StyledImgLabel = styled.label`
  width: 107px;
  height: 107px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  /* padding: 2px; */
  cursor: pointer;
  & .upload-image-parent {
    width: 107px;
    height: 107px;
    /* padding: 2px; */
    /* max-width: 100%;
    max-height: 100%; */
    border-radius: 14px;
    object-fit: cover;
  }
`;
export const UploadImageProvider = styled.div`
  .upload-image-child {
    position: absolute;
    /* top:0; */
    right: -10px;
    bottom: 0;
  }
`;

export const UserInfoProvider = styled.div``;

export const UserInformation = styled.div`
margin-left: 20px;
  h2 {
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.019em;
    color: #262628;
    font-weight: bold;
    & .btn {
      &:focus {
        box-shadow: none !important;
      }
    }
  }
  p {
    font-size: 15px;
    @media (max-width: 576px) {
      margin-left: -20px;
    }
  }
`;

export const Education = styled.div`
margin-top: 25px;
p {
  font-size: 15px;
  line-height: 30px;
  span {
    color: #3B7640;
    font-weight: bold;
  }
  @media (max-width: 576px) {
    margin-top: -25px;
  }
}
`