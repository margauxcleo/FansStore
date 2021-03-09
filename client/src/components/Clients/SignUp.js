import {useForm} from 'react-hook-form';
import { useRef } from "react";
import {Link} from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';

import './Clients.css';


const SignUp = (props) => {

    const setAuth = props.setAuth;
    
    const onSubmit = async data => {
    // console.log('onSubmit: ', JSON.stringify(data));
    
    try {
        const response = await fetch('http://localhost:8088/auth/signup', {
            method : 'POST',
            mode : 'cors',
            headers : {
            'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
  
        const parseRes = await response.json();
  
        if (parseRes.jwt) {
          localStorage.setItem('jwt', parseRes.jwt);
          setAuth(true);
        //   toast.success("Bienvenue !");
          console.log('Welcome!');
        } else {
          setAuth(false);
          console.log(parseRes);
        }
      } catch (e) {
        console.error(e.message);
      }
};

 const {register, handleSubmit, errors, watch} = useForm({});
 const password = useRef({});
 password.current = watch("password", "");

return (
    <div className="container-fluid mx-auto logup-form col-xl-6 col-lg-8 col-md-8 col-sm-11 mb-4">
      <h1>Création d'un nouveau compte</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-4">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Prénom : </label>
                <br />
                <input  className="form-input" name="first_name" type="text" placeholder="prénom" ref={register({required: true, minLength: 3})} />
                {errors.first_name && errors.first_name.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez renseigner votre prénom.</div>
                )}

                {errors.first_name && errors.first_name.type === "minLength" && (
                    <div className="alert alert-danger" role="alert">Le prénom doit faire plus de 3 caractères.</div>
                )}                  
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Nom :</label>
                <br/>
                <input  className="form-input" name="last_name" type="text" placeholder="nom" ref={register({required: true, minLength: 3})}/>
                {errors.last_name && errors.last_name.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez renseigner votre nom.</div>
                )}

                {errors.last_name && errors.last_name.type === "minLength" && (
                    <div className="alert alert-danger" role="alert">Le nom doit faire plus de 3 caractères.</div>
                )}  
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Email :</label>
                <br/>
                <input  className="form-input" name="email" type="email" placeholder="adresse email" ref={register({required: true, minLength: 8})}/>
                {errors.email && errors.email.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez renseigner un email.</div>
                )}

                {errors.email && errors.email.type === "minLength" && (
                    <div className="alert alert-danger" role="alert">L'email doit faire plus de 8 caractères.</div>
                )} 
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Date de naissance :</label>
                <br/>
                <input  className="form-input" name="birth_date" type="date" placeholder="date" ref={register({required: true})}/>
                {errors.birth_date && errors.birth_date.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez renseigner votre date de naissance.</div>
                )}
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Mot de passe :</label>
                <br/>
                <input  className="form-input" name="password" type="password" placeholder="mot de passe" ref={register({required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/})}/>
                {errors.password && errors.password.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez renseigner un mot de passe.</div>
                )}

                {errors.password && errors.password.type === "minLength" &&  (
                    <div className="alert alert-danger" role="alert">Le mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial.</div>
                )} 


                {errors.password && errors.password.type === "pattern" &&  (
                    <div className="alert alert-danger" role="alert">Le mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial.</div>
                )} 
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Vérification mot de passe :</label>
                <br/>
                <input  className="form-input" name="passwordcheck" type="password" placeholder="Vérification mot de passe" ref={register({required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/, validate: value => value === password.current || "les mots de passe ne correspondent pas"})}/>
                {errors.passwordcheck && errors.passwordcheck.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez renseigner un mot de passe.</div>
                )}

                {errors.passwordcheck && errors.passwordcheck.type === "minLength" &&  (
                    <div className="alert alert-danger" role="alert">Le mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial.</div>
                )} 


                {errors.passwordcheck && errors.passwordcheck.type === "pattern" &&  (
                    <div className="alert alert-danger" role="alert">Le mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial.</div>
                )} 

                {errors.passwordcheck && errors.passwordcheck.type === "validate" &&  (
                    <div className="alert alert-danger" role="alert">les mots de passe ne correspondent pas </div>
                )} 

            </div>
        </div>
       <div className="row mb-4">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-row justify-content-start align-items-baseline">
            <input type="checkbox" name="check" aria-label="Checkbox for following text input" ref={register({required: true})}/>
            {errors.check && errors.check.type === "required" && (
                <div className="alert alert-danger" role="alert">Veuillez prendre connaissance des règles d'utilisation svp</div>
            )}
            <br/>
            <label className="check-label">Je certifie avoir pris connaissance des règles d'utilisation.</label>
        </div>
       </div>
       <div className="form-group">
        <button className="btn btn-primary" type="submit">Créer un compte</button>
      </div>
      <div className="form-group">
        <Link to="/compte/connexion">
        <button className="btn btn-secondary" type="submit">J'ai déjà un compte, me connecter</button>
        </Link>
      </div>
      </form>
    </div>
)

}

export default SignUp;