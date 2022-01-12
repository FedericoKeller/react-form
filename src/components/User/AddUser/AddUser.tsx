import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import Button from "../../UI/Button/Button";
import { AddUserProps, UserData } from "../types";
import './AddUser.scss';


const AddUser: FC<AddUserProps> = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const submitFormHandler = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data: UserData = {
            username: enteredUsername,
            age: Number.parseInt(enteredAge)
        }

        const validEntries = Object.values(data).every(userProp => userProp);
       
        if(!validEntries) {
            return;
        }

        props.onSubmitForm(data);
      }

    const changeUsernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const user = event.target.value;

        if(user == null) {
            return;
        }

        setEnteredUsername(user);
    }

    
    const changeAgeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const age = event.target.value;

        setEnteredAge(age);
    }

    return (
        <form className="form" onSubmit={submitFormHandler}>
            <div className="form__control">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="u-margin-top--small" onChange={changeUsernameHandler}/>
            </div>
            <div className="form__control u-margin-top--small">
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" className="u-margin-top--small" onChange={changeAgeHandler}/>
            </div>
            <div className="u-margin-top--small">
                <Button type="submit">Add User</Button>
            </div>
        </form>
    )
}

export default AddUser;