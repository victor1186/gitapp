import React ,{useEffect,useState} from 'react';

import './App.css';

function App() {



const [users,setUsers] = useState([])

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
  
.then(res => {return res.json() })
.then(data => {setUsers(data)})

})

  return (
    <div className="App">
      <h1>Works</h1>
      {users.map(user => {
        return(
          <div>
            <h3>{user.name}</h3>
            <p>Email : {user.email}</p>

          </div>
        )
      })}
    </div>
  );
}

export default App;
