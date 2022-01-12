import { FC } from "react";
import './Card.scss';

const Card: FC<{className?: string}> = (props) => {
  const classNames = `card ${props.className ? props.className : ''}`.trim();

  return (

    <div className={classNames}>
      <div className="card__row">
        <div className="card__content">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
