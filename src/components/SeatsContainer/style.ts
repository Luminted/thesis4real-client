import css from "styled-jsx/css";
import { tableHeightPercentage } from "../../config";

export const style = css`
  .seats-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: ${(100 - tableHeightPercentage) / 2}vh;
    margin: auto;
    z-index: 2;
  }
`;
