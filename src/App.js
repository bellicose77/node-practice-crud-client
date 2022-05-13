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
      <ul>
        {
          users.map(user=> <li>{user}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
