import { SyntheticEvent } from "react";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import { OverlayModalProps } from "./types";
import './OverlayModal.scss';

const OverlayModal = (props: OverlayModalProps) => {
    const onClickDialogHandler = (event: SyntheticEvent) => {
        if (event.target !== event.currentTarget) {
          return;
        }
    
        if (props.onConfirmation) {
          props.onConfirmation();
        }
      };


      return (
        <div className="dialog__container" onClick={onClickDialogHandler}>
        <Card header={props.header && props.header}>
          {props.message}
          <div className="dialog__actions">
            <Button type="button" onClick={onClickDialogHandler}>
              Okay
            </Button>
          </div>
        </Card>
      </div>
      )
      
}

export default OverlayModal;