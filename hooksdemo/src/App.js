import { useState } from 'react';
import './App.css';
import Users from './Users';

function App() {
  let [id, setId] = useState(0);
  return (
    <div className="container">
      <Users/>
    </div>
  );
}

export default App;
