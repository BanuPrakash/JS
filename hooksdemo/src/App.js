import { createContext, useState } from 'react';
import './App.css';
import Users from './Users';
import UserDetails from './UserDetails';

export const UserContext = createContext(0);

function App() {
  let [id, setId] = useState(0);
  return (
    <div className="container">
      <div className='row'> 
        <div className='col-md-6'>
          <Users setUserId={setId}/>
        </div>
        <div className='col-md-6'>
          <UserDetails id={id}/>
        </div>
      </div>
   
    </div>
  );
}

export default App;
