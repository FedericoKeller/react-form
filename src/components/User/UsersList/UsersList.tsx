import { UserListProps } from "../types";
import './UsersList.scss';

const UsersList = (props: UserListProps) => {
    return (
        <div className="users">
            <ul>
                {props.users.length > 0 && props.users.map(user => <li key={user.id}>{`${user.username} (${user.age} years old)`}</li>)}
            </ul>
        </div>
    )
}

export default UsersList;