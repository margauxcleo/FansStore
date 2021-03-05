// pour ne pas gêner le modal =>à fusionner avec signIn 

import { useState } from 'react';

import './Clients.css';

const LogIn = (props) => {

    const { setToken } = props;

    const [userEmail, setUserEmail] = useState();
    const [password, setPassword] = useState();

    
    const loginUser = async (id) => {

        const response = await fetch(`http://localhost:8088/clients/${id}`, {
            method: "GET",
            mode: "cors",
        });
        const user = await response.json();
        console.log(user);
        return user;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userEmail,
            password
        });
        setToken(token);
      }
 
    return(
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Email</p>
              <input type="text" onChange={e => setUserEmail(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )
}

export default LogIn;