import { useState } from 'react';
import './App.scss';
import Card from './components/UI/Card/Card';
import Dialog from './components/UI/Dialog/Dialog';
import AddUser from './components/User/AddUser/AddUser';
import { UserData } from './components/User/types';
import UsersList from './components/User/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [dataState, setDataState] = useState(false);

  const submitForm = (user: UserData) => {

    setUsers(usersList => {
        return [
          ...usersList,
          user
        ]
    })
  }

  const invalidData = (dataState: boolean) => {
    setDataState(dataState);
  }

  const confirmationAccepted = ()  => {
    setDataState(false);
  }


  return (
      <div className='container'>
        {dataState && <Dialog header='Invalid Input' onConfirmation={confirmationAccepted}>hola</Dialog>}
        <Card>
          <AddUser onSubmitForm={submitForm} onInvalidData={invalidData}/>
        </Card>
        <Card className={`${users.length <= 0 ? 'hidden' : 'visible'}`}>
          <UsersList users={users}/>
        </Card> 
      </div>
    )
}

export default App;
