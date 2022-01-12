type ButtonEvents = 'submit' | 'button' | 'reset';

export interface ButtonProps {
    type: ButtonEvents;
    onClick?: () => void;
}