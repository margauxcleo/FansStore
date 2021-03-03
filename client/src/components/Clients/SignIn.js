import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import SignInContent from './SignInContent.js';
import {useForm} from 'react-hook-form';
import { useState } from "react";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './content.css';

const schema = yup.object().shape({
  email: yup.string().required(<div className="alert alert-danger" role="alert">Entrez votre email svp</div>).email(),
  password: yup.string().required(<div className="alert alert-danger" role="alert">Entrez votre mot de passe svp</div>).matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
      "le mot de passe doit contenir minimum 8 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial"
    ),
})

const SignIn = (props) => {
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);
return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SignInContent.inputs.map((input, key)=>{
          return(
            <div key={key}>
              <p>
                <label>{input.label}</label>
              </p>
              <p>
                <input name={input.name} className="input" type={input.type} ref={register} />
              </p>
              <p className="messages">{errors[input.name]?.message}</p>
            </div>
          )
        })}
      <div className="form-group">
        <button className="btn btn-primary btn-lg" type="submit">Sign in</button>
      </div>
      <div className="form-group">
        <button  type="submit" className="btn btn-light">Créer un compte</button>
      </div>
      </form>
    </div>
)

}

export default SignIn;