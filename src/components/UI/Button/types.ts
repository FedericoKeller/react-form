import { SyntheticEvent } from "react";

type ButtonEvents = 'submit' | 'button' | 'reset';

export interface ButtonProps {
    type: ButtonEvents;
    onClick?: (event: SyntheticEvent) => void;
}