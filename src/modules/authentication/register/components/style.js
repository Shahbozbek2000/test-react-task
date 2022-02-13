import styled from "styled-components";
import { systemColors } from "../../../../assets/styles/colors";

export const RegisterProvider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${systemColors.mainGreen};
  background-size: cover;
  background-position: bottom;
`;

export const RegisterImageWrap = styled.div`
  position: absolute;
  bottom: 0;
  img {
    width: 72%;
    opacity: 0.2;
    filter: blur(10px);
  }
`;

export const MainRegister = styled.div`
  display: flex;
  width: calc(100% - 40px);
  height: auto;
  margin: auto;
  @media (max-width: 992px) {
    display: flex;
    align-items:center;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 70vh;
  text-align: center;
  & .side-logo {
    font-weight: bold;
    font-size: 34px;
    line-height: 21px;
    color: ${systemColors.mainWhite};
  }
  & .side-title {
    font-weight: 800;
    font-size: 34px;
    line-height: 42px;
    text-align: center;
    text-transform: uppercase;
    color: ${systemColors.mainWhite};
    margin-top: 33px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  position:relative;
  z-index: 100;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-y:auto;
  white-space:noWrap;
  @media (max-width: 992px) {
    margin: auto;
    width: 60%;
    height: 80vh;
  }
  @media (max-width: 576px) {
    width: 576px;
  }
`;

export const RightSideCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${systemColors.mainWhite};
  box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  width: 100%;
  height: calc(100% - 46px);
  overflow-y: scroll;
  .hide-password {
    position: absolute;
    right: 7%;
    top: 22px;
  }
  .login-form {
    width: 400px;
    @media (max-width: 768px) {
     width: 100%;
    }
  }
  & .form {
    width: 65%;
    @media (max-width: 768px) {
      width: 80%;
    }
    h2 {
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.019em;
      color: #262628;
    }
  }
`;
