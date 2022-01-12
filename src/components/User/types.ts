export interface AddUserProps {
    onSubmitForm: (user: UserData) => void;
    onInvalidData: (dataState: boolean) => void;
}

export interface UserListProps {
    users: UserData[];
}

export interface UserData {
    username: string;
    age: number;
}

export interface UserDataChecker {
    username: boolean;
    age: boolean;
}