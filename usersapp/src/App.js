import './App.css';
import UserList from './components/UserList';
import Menu from './tasks/Menu';

function App() {
  return (
    <div className="App">
       <h1>Users Application</h1>
      <UserList /> 
      {/* <Menu title="Delicious Recipes" /> */}
    </div>
  );
}

export default App;
