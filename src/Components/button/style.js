import styled from "styled-components";
import { systemColors } from "../../Assets/styles/colors";

export const Button = styled.button`
  width: ${(props) => props.propsWidth};
  height: ${(props) => props.propsHeight};
  background: ${systemColors.secondaryGreen};
  color: ${systemColors.mainWhite};
  padding: ${(props) => props.propsPadding};
  border: none;
  transition: all ease 0.3s;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 24px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  cursor:pointer !important;
  @media (max-width: 476px) {
    width: ${(props) => props.mediaWidth};
    font-size: 14px;
  }
  @media (max-width: 400px) {
    padding: ${(props) => props.mediaPropsPadding};
  }
`;
