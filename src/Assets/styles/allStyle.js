import styled from "styled-components";
import { systemColors } from "./colors";

export const LayoutProvider = styled.div`
  width: 100%;
  height:63vh;
  min-height: 60vh;
  background: #ffffff;
  box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 12.5072px 12.5072px;
  @media (max-width: 576px) {
    height: auto;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 35px;
  background: #fcfcfd;
  /* grey 90 */
  border: 1.06532px solid #cfd0d7;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  &::placeholder {
    font-size: 12px;
    color: rgba(26, 32, 61, 0.3);
  }
  & label {
    font-size: 12px;
    color: #5F6377;
    font-weight: 500;
  }
  &:-webkit-autofill {
    background: #fff !important;
  }
  &.error-input {
    border: 1px solid red !important;
  }
  &:focus {
    border: 2px solid #12aae4 !important;
  }
  &.error {
    border-color: ${systemColors.errorColor} !important;
    &:focus {
      border-color: ${systemColors.errorColor} !important;
      box-shadow: inset 0 0 0 0 !important;
    }
  }
`;
export const StyleSelectAll = styled.div`
  margin-top: 10px;

  & > div > div {
    width: 100%;
    border-color: ${systemColors.selectBorder} !important;
    box-shadow: inset 0 0 0 0 !important;
    border-radius: 4px;
    font-size: 12px;
    &::placeholder {
      font-size: 12px;
    }

    & > div:nth-child(2) span {
      display: none;
    }
  }
  & > div > div:nth-child(3) > div:nth-child(1) {
    height: 35px;
  }

  & > div > div:nth-child(4) {
    box-shadow: 0px 0px 4px rgba(18, 170, 228, 0.16);
    padding: 8px 4px 8px 4px;
    & > div:nth-child(1) {
      .css-1n7v3ny-option {
        background: #e7f7fc !important;
      }
      .css-9gakcf-option {
        background: #a0ddf4 !important;
      }

      ::-webkit-scrollbar {
        width: 5px;
        margin-right: 15px !important;
      }
      ::-webkit-scrollbar-track {
        // background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #9d9d9d;
        border-radius: 3px;
        margin-right: 40px !important;
      }
    }
  }
  .css-1pahdxg-control {
    border: 2px solid #12aae4 !important;
    border-radius: 4px;
  }
  &.error > div > div {
    border-color: red !important;
  }
  &.error {
    & div {
      & div {
        border-coler: ${systemColors.errorColor} !important;
      }
    }
    .css-1pahdxg-control {
      border-color: ${systemColors.errorColor} !important;
      box-shadow: 0 0 0 4px ${systemColors.erorShadow} !important;
    }
  }
`;
