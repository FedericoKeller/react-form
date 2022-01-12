import { FC } from "react";
import { UserListProps } from "../types";
import './UsersList.scss';

const UsersList: FC<UserListProps> = (props) => {
    return (
        <div className="users">
            <ul>
                {props.users.length > 0 && props.users.map(user => <li key={user.username}>{`${user.username} (${user.age} years old)`}</li>)}
            </ul>
        </div>
    )
}

export default UsersList;