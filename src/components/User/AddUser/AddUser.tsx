import { FC } from "react";
import Button from "../../UI/Button/Button";
import './AddUser.scss';

const AddUser: FC<{}> = (props) => {
    return (
        <form className="form">
            <div className="form__control">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="u-margin-top--small"/>
            </div>
            <div className="form__control u-margin-top--small">
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="text" className="u-margin-top--small"/>
            </div>
            <div className="u-margin-top--small">
                <Button type="submit">Add User</Button>
            </div>
        </form>
    )
}

export default AddUser;