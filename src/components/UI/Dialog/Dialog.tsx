import { PropsWithChildren, SyntheticEvent } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import './Dialog.scss';
import { DialogProps } from "./types";


const Dialog = (props: PropsWithChildren<DialogProps>) => {

    const onClickDialogHandler = (event: SyntheticEvent) => {
      if(event.target !== event.currentTarget) {
        return;
      }

       if(props.onConfirmation) {
        props.onConfirmation();
       }
    }

    return (
    <div className="dialog">
      <div className="dialog__container" onClick={onClickDialogHandler}>
        <Card header={props.header && props.header}>
            {props.children}
           <div className="dialog__actions">
           <Button type="button" onClick={onClickDialogHandler}>Okay</Button>
           </div>
        </Card> 
      </div>
    </div>
    );
}

export default Dialog;