import { ButtonProps } from "./types";
import './Button.scss';
import { PropsWithChildren } from "react";

  const Button = (props: PropsWithChildren<ButtonProps>) => {
    return (
      <button type={props.type} className="button" onClick={props.onClick}>
        {props.children}
      </button>
    );
  };

  export default Button;