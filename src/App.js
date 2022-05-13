import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))

  },[])
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='enter name'></input>
        <input type="submit" placeholder="submit"/>
      </form>
      <ul>
        {
          users.map(user=> <li>{user.name}{user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
