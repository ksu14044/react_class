import { css } from "@emotion/react";

export const headerLayout =  css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 100%;

  & > button {
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
  }
`;

    