// pour ne pas gêner le modal =>à fusionner avec signIn 

import { useState } from 'react';

import './Clients.css';

const LogIn = (props) => {

  const { setToken } = props;

  // inscription
  const [firstNameReg, setFirstNameReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [birthDateReg, setBirthDateReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [phoneReg, setPhoneReg] = useState('');

  const signUp = async(e) => {
    e.preventDefault();
    const register = await fetch(`http://localhost:8088/auth/signup`, {
      method: "POST",
      mode: "cors",
      first_name: firstNameReg,
      last_name: lastNameReg,
      email: emailReg,
      birth_date: birthDateReg,
      password: passwordReg,
      phone: phoneReg 
    }).then((response) => {
      console.log(response);
    })
  }

  // Connexion
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  // pour vérifier si on est login ou non
  const [loginStatus, setLoginStatus] = useState(false);


  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8088/auth/signin", {
      method: "POST",
      mode: "cors",
      email: userEmail,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(false);
      } else {
        console.log(response.data);
        // localStorage.setItem('token', response.data.token);
        setLoginStatus(true);
      }
    })
    // const user = await response.json();
    // console.log(user);
    // return user;
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     userEmail,
  //     password
  //   });
  //   setToken(token);
  // }

  return (
    <>
      <div className="login-wrapper">
        <h1>Inscription</h1>
        <form>
        <label>
            <p>Prénom</p>
            <input type="text" onChange={(e) => setFirstNameReg(e.target.value)} />
          </label>
          <label>
            <p>Nom</p>
            <input type="text" onChange={(e) => setLastNameReg(e.target.value)} />
          </label>
          <label>
            <p>Email</p>
            <input type="text" onChange={(e) => setEmailReg(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e) => setPasswordReg(e.target.value)} />
          </label>
          <label>
            <p>Date de naissance</p>
            <input type="date" onChange={(e) => setBirthDateReg(e.target.value)} />
          </label>
          <label>
            <p>Téléphone</p>
            <input type="number" onChange={(e) => setPhoneReg(e.target.value)} />
          </label>
          <div>
            <button type="submit" onClick={signUp}>Valider</button>
          </div>
        </form>
      </div>

      <div className="login-wrapper">
        <h1>Connexion</h1>
        <form>
          <label>
            <p>Email</p>
            <input type="text" onChange={e => setUserEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" onClick={loginUser}>Se connecter</button>
          </div>
        </form>
      </div>
      <div>
        <h4>{ loginStatus } </h4>
      </div>
    </>
  )
}

export default LogIn;