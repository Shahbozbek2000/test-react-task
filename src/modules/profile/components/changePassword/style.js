import styled from "styled-components";
import { systemColors } from "../../../../Assets/styles/colors";

export const PasswordInfo = styled.div`
  h1 {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.019em;
    color: ${systemColors.secondaryGreen};
    font-weight: bold;
    padding-top: 28px;
  }
  p {
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.016em;
    color: #292929;
    &.phone-number-info {
      width: 65%;
      margin: 0 auto;
    }
    &.phone-email-info {
      width: 78%;
      margin: 0 auto;
    }
  }
`;

export const FormContainer = styled.div`
  width: calc(100% - 200px);
  margin: 18px auto;
  &.form-container {
    margin-top:50px;
  }
  @media (max-width: 576px) {
    width: calc(100% - 100px);
  }
`;
export const FormGroupWrap = styled.div`
  position: relative !important;
  margin-top: -15px;
  .hide-password {
    position: absolute;
    right: 7%;
    top: 22px;
  }
`;

export const PasswordFooter = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  color: #292929;
  /* margin: 25px 0; */
  margin-top: 25px;
  padding-bottom: 25px;
`;
