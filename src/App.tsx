import React from 'react';
import './App.scss';
import Card from './components/UI/Card/Card';
import AddUser from './components/User/AddUser/AddUser';

function App() {
  return (
      <div className='container'>
        <Card>
          <AddUser />
        </Card>
      </div>
    )
}

export default App;
