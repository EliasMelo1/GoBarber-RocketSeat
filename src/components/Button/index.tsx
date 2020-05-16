import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

// Utilizar type quando não for sobrescrever
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
