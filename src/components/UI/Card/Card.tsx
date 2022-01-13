import { PropsWithChildren } from "react";
import "./Card.scss";
import { CardProps } from "./types";

const Card = (props: PropsWithChildren<CardProps>) => {
  const classNames = `card ${props.className ? props.className : ""}`.trim();

  return (
    <div className={classNames}>
      <div className="card__row">
          <div className="card__content">
          {props.header &&  <div className="card__header">{props.header}</div>}
            <div className="card__children">
            {props.children}
            </div>
            </div>
      </div>
    </div>
  );
};

export default Card;
