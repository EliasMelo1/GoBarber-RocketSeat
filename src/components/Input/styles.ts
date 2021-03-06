import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;
  /* color: #f4ede8; */

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    &placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
