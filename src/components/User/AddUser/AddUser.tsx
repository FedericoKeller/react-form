import { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "../../UI/Button/Button";
import { AddUserProps, MESSAGES_MAP, UserData } from "../types";
import './AddUser.scss';


const AddUser: FC<AddUserProps> = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState<string | number>('');


    
    const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if(!(enteredAge && enteredUsername)) {
            return props.onInvalidData(MESSAGES_MAP['both']);
        }
        if(enteredAge < 1) {
            return props.onInvalidData(MESSAGES_MAP['invalidAge']);
        }

        
        const data: UserData = {
            username: enteredUsername,
            age: enteredAge
        }
        
        setEnteredAge('');
        setEnteredUsername('');
        props.onSubmitForm(data);
      }


    const changeUsernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const user = event.target.value;
        setEnteredUsername(user);
    }

    
    const changeAgeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const age = event.target.value;
        setEnteredAge(Number.parseInt(age));
    }

    return (
        <div>
        <form className="form" id="form" onSubmit={submitFormHandler}>
            <div className="form__control">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="u-margin-top--small" onChange={changeUsernameHandler} value={enteredUsername}/>
            </div>
            <div className="form__control u-margin-top--small">
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" className="u-margin-top--small" onChange={changeAgeHandler} value={enteredAge}/>
            </div>
            <div className="u-margin-top--small">
                <Button type="submit">Add User</Button>
            </div>
        </form>
    </div>
    )
}

export default AddUser;