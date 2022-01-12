export interface AddUserProps {
    onSubmitForm: (user: UserData) => void;
}

export interface UserListProps {
    users: UserData[];
}

export interface UserData {
    username: string;
    age: number;
}