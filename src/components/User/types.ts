export interface AddUserProps {
    onSubmitForm: (user: UserData) => void;
    onInvalidData: (dataState: string) => void;
}

export interface UserListProps {
    users: UserData[];
}

export interface UserData {
    id: string;
    username: string;
    age: string | number;
}

export interface UserDataChecker {
    username: boolean;
    age: boolean;
}

export type Messages = 'username' | 'age' | 'both' | 'invalidAge' | '';


export const MESSAGES_MAP: Record<Omit<Messages, ''>[number], string> = {
    "both": "Please, enter the username and the password to proceed.",
    "invalidAge": "The age should be greater than 1."
}