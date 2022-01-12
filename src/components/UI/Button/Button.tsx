import { FC } from "react";
import { ButtonProps } from "./types";
import './Button.scss';
  const Button: FC<ButtonProps> = props => {
    return (
      <button type={props.type} className="button" onClick={props.onClick}>
        {props.children}
      </button>
    );
  };

  export default Button;