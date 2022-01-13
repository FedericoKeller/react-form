export interface DialogProps {
    header?: string;
    onConfirmation?: () => void;
    message: string;
}
