import { ChangeEvent } from "react";
import Button from "../../UI/Button/Button";
import { AddUserProps, MESSAGES_MAP, UserData } from "../types";
import './AddUser.scss';

interface Form extends HTMLFormElement {
    username: HTMLInputElement;
    age: HTMLInputElement;
}

const AddUser = (props: AddUserProps) => {    
    const submitFormHandler = (event: ChangeEvent<Form>) => {
        event.preventDefault();
        
        let enteredUsername = event.target.username.value;
        let enteredAge = event.target.age.value;

        if(!(enteredUsername && enteredAge)) {
            return props.onInvalidData(MESSAGES_MAP['both']);
        }
        if(Number.parseInt(enteredAge) < 1) {
            return props.onInvalidData(MESSAGES_MAP['invalidAge']);
        }

        
        const data: UserData = {
            id: Math.random().toString(),
            username: enteredUsername,
            age: enteredAge
        }
        

        event.target.reset();
        props.onSubmitForm(data);

      }


    return (
        <>
        <form className="form" id="form" onSubmit={submitFormHandler}>
            <div className="form__control">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="u-margin-top--small"/>
            </div>
            <div className="form__control u-margin-top--small">
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" className="u-margin-top--small"/>
            </div>
            <div className="u-margin-top--small">
                <Button type="submit">Add User</Button>
            </div>
        </form>
    </>
    )
}

export default AddUser;