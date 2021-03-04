import { Fragment, useState } from 'react';

const Login3 = (props) => {
    const [userEmail, setUserEmail] = useState();
    const [password, setPassword] = useState();
    console.log(userEmail);
    console.log(password);
  
    const setAuth = props.setAuth;
  
    const onSubmitForm = async (event) => {
        event.preventDefault();
        const body = { userEmail, password };
        console.log(body);
        console.log(userEmail);
        console.log(password);
      try {
        const response = await fetch('http://localhost:8088/auth/signin', {
            method : 'POST',
            mode : 'cors',
            headers : {
            'Content-Type' : 'application/json'
            },
            body : JSON.stringify(body)
            // email: userEmail, 
            // password: password
        });
  
        const parseRes = await response.json();
  
        if (parseRes.jwt) {
          localStorage.setItem('jwt', parseRes.jwt);
          setAuth(true);
          console.log('Welcome!');
        } else {
          setAuth(false);
          console.log(parseRes);
        }
      } catch (e) {
        console.error(e.message);
      }
    };
  
    return (
      <Fragment>
        <h1 className='text-center my-5 display-1'>Login</h1>
        <form>
          <input
            type='text'
            name='email'
            placeholder='email'
            className='form-control my-3'
            onChange={e => setUserEmail(e.target.value)}
            // value={userEmail}
            />
          <input
            type='password'
            name='password'
            placeholder='password'
            className='form-control my-3'
            onChange={e => setPassword(e.target.value)}
            // value={password}
            />
          <button className='btn btn-success btn-block' onClick={(e) => onSubmitForm(e)}>Submit</button>
          </form>
      </Fragment>
    );
  };
  
  export default Login3;