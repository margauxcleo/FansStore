
import SignUpContent from './SignUpContent.js';
import {useForm} from 'react-hook-form';
import { useState } from "react";




const SignUp = () => {
 const onSubmit = data => {
     console.log(data);
 };
 const {register, handleSubmit, errors} = useForm();

return (
    <div>
      <h1>Informations nécessaires</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-4">
            <div className="col">
                <input name="prenom" type="text" placeholder="prénom" ref={register({required: true, minLength: 3})} required/>
                {errors.prenom && <div className="alert alert-danger" role="alert">le prénom doit faire plus de 3 caractères</div>}
            </div>
            <div className="col">
                <input name="nom" type="text" placeholder="nom" ref={register({required: true, minLength: 3})} required/>
                {errors.nom && <div className="alert alert-danger" role="alert">le nom doit faire plus de 3 caractères</div>}
            </div>
        </div>
        <div className="row mb-4">
            <div className="col">
                <input name="email" type="email" placeholder="adresse email" ref={register({required: true, minLength: 8})} required/>
                {errors.email && <div className="alert alert-danger" role="alert">l'email doit faire plus de 8 caractères</div>}
            </div>
            <div className="col">
                <input name="date" type="date" placeholder="date" ref={register({required: true})}/>
                {errors.date && <div className="alert alert-danger" role="alert">la date ne doit pas être vide</div>}
            </div>
        </div>
        <div className="row mb-4">
            <div className="col">
                <input name="password" type="password" placeholder="mot de passe" ref={register({required: true, minLength: 8, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/})}/>
                {errors.password && <div className="alert alert-danger" role="alert">le mot de passe doit contenir minimum 8 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial</div>}
            </div>
            <div className="col">
                <input name="passwordcheck" type="password" placeholder="Vérification mot de passe" ref={register({required: true, minLength: 8, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/})}/>
                {errors.passwordcheck && <div className="alert alert-danger" role="alert">le mot de passe doit contenir minimum 8 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial</div>}
            </div>
        </div>
       <div className="row mb-4">
        <div className="col">
            <label>Je certifie avoir pris connaissance des règles d'utilisation</label>
            <br/>
            <input type="checkbox" name="check" aria-label="Checkbox for following text input" ref={register({required: true})}/>
            {errors.check && <div className="alert alert-danger" role="alert">Il faut prendre connaissance des règles d'utilisation</div>}
        </div>
       </div>
       <div className="form-group">
        <button className="btn btn-primary btn-lg" type="submit">Créer un compte</button>
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-lg" type="submit">J'ai déjà uncompte, me connecter</button>
      </div>
      </form>
    </div>
)

}

export default SignUp;