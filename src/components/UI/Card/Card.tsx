import { FC } from "react";
import './Card.scss';

const Card: FC<{}> = (props) => {
  return (
    <div className="card">
      <div className="card__row">
        <div className="card__content">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
