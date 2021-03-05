import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";
import './Clients.css'

const SignUp = (props) => {

  const setAuth = props.setAuth;

  const onSubmit = async data => {
    console.log('onSubmit: ', JSON.stringify(data))

    try {
      const response = await fetch('http://localhost:8088/auth/signin', {
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
        console.log('Welcome!');
      } else {
        setAuth(false);
        console.log(parseRes);
      }
    } catch (e) {
      console.error(e.message);
    }
 };

 const {register, handleSubmit, errors} = useForm({});
 
return (
    <div className="login-form container-fluid mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-4">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-4">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <label>Email :</label>
                <br/>
                <input className="form-control" name="email" type="email" placeholder="adresse email" ref={register({required: true, minLength: 8})}/>
                {errors.email && errors.email.type === "required" && (
                    <div className="alert alert-danger" role="alert">Veuillez renseigner un email.</div>
                )}

                {errors.email && errors.email.type === "minLength" && (
                    <div className="alert alert-danger" role="alert">L'email doit faire plus de 8 caractères.</div>
                )} 
            </div>
        </div>
        <div className="row mb-4">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <label>Mot de passe :</label>
          <br/>
          <input className="form-control" name="password" type="password" placeholder="mot de passe" ref={register({required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/})}/>
          {errors.password && errors.password.type === "required" && (
            <div className="alert alert-danger" role="alert">Veuillez renseigner un mot de passe.</div>
          )}

          {errors.password && errors.password.type === "minLength" &&  (
            <div className="alert alert-danger" role="alert">Votre mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial.</div>
          )} 
          {errors.password && errors.password.type === "pattern" &&  (
            <div className="alert alert-danger" role="alert">Votre mot de passe doit contenir minimum 8 caractères et maximum 15 caractères, 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial.</div>
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