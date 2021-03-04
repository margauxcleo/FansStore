import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";
import './Clients.css'

const SignUp = () => {
 const onSubmit = async data => {
    console.log('onSubmit: ', JSON.stringify(data))
 };
 const {register, handleSubmit, errors} = useForm({});
 

return (
    <div className="container-fluid mx-auto col-2">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-4">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <label>Email :</label>
                <br/>
                <input name="email" type="email" placeholder="adresse email" ref={register({required: true, minLength: 8})}/>
                {errors.email && errors.email.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez entrer un email svp</div>
                )}

                {errors.email && errors.email.type === "minLength" && (
                    <div className="alert alert-danger" role="alert">l'email doit faire plus de 8 caractères</div>
                )} 
            </div>
        </div>
        <div className="row mb-4">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <label>Mot de passe :</label>
          <br/>
          <input name="password" type="password" placeholder="mot de passe" ref={register({required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/})}/>
          {errors.password && errors.password.type === "required" && (
            <div className="alert alert-danger" role="alert">Veuillez entrer un mot de passe svp</div>
          )}

          {errors.password && errors.password.type === "minLength" &&  (
            <div className="alert alert-danger" role="alert">le mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial</div>
          )} 
          {errors.password && errors.password.type === "pattern" &&  (
            <div className="alert alert-danger" role="alert">le mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial</div>
          )} 
            </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Connexion</button>
        </div>
        <div className="form-group">
          <Link to="/compte/inscription">
          <button className="btn btn-secondary" type="submit">Créer un compte</button>
          </Link>
        </div>
      </form>
    </div>
)

}

export default SignUp;