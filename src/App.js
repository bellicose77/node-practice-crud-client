import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [users,setUsers]=useState([]);
  const nameref = useRef("")
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))

  },[]);
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("submit")
    fetch('users',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringfy()
    })
  }
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
