import { useState } from "react";
import "./App.scss";
import Card from "./components/UI/Card/Card";
import Dialog from "./components/UI/Dialog/Dialog";
import AddUser from "./components/User/AddUser/AddUser";
import { UserData } from "./components/User/types";
import UsersList from "./components/User/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [dataState, setDataState] = useState("");

  const submitForm = (user: UserData) => {
    setUsers((usersList) => {
      return [...usersList, user];
    });
  };

  const invalidData = (dataState: string) => {
    setDataState(dataState);
  };

  const confirmationAccepted = () => {
    setDataState("");
  };

  return (
    <div className="container">
      {dataState && (
        <Dialog header="Invalid Input" onConfirmation={confirmationAccepted}  message={dataState}/>

      )}
      <Card>
        <AddUser onSubmitForm={submitForm} onInvalidData={invalidData} />
      </Card>
      <Card className={`${users.length <= 0 ? "hidden" : "visible"}`}>
        <UsersList users={users} />
      </Card>
    </div>
  );
}

export default App;
