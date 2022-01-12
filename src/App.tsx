import { useState } from 'react';
import './App.scss';
import Card from './components/UI/Card/Card';
import AddUser from './components/User/AddUser/AddUser';
import { UserData } from './components/User/types';
import UsersList from './components/User/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState<UserData[]>([]);

  const submitForm = (user: UserData) => {

    setUsers(usersList => {
        return [
          ...usersList,
          user
        ]
    })
  }

  return (
      <div className='container'>
        <Card>
          <AddUser onSubmitForm={submitForm}/>
        </Card>
        <Card className={`${users.length <= 0 ? 'hidden' : 'visible'}`}>
          <UsersList users={users}/>
        </Card> 
      </div>
    )
}

export default App;
