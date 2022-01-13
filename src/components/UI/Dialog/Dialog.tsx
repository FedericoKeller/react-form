import { DialogProps } from "./types";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import OverlayModal from "./OverlayModal/OverlayModal";

const Dialog = (props: DialogProps) => {
  return (
    <>
      {
        ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop-root") as HTMLElement
        )
      }

      {
        ReactDOM.createPortal(
          <OverlayModal
            onConfirmation={props.onConfirmation}
            header={props.header && props.header}
            message={props.message}
          />,
          document.getElementById("overlay-root") as HTMLElement
        )
      }
    </>
  );
};

export default Dialog;
