import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";
import validator from 'validator';

import { useState } from 'react';

import AuthService from "../../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) =>  {

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    // this.state = {
    //   username: "",
    //   password: "",
    //   loading: false,
    //   message: ""


  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (userEmail != 0 && password != 0) {
      AuthService.login(userEmail, password).then(
        () => {
          props.history.push("/home");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            setMessage(resMessage);
            setLoading(false);
        }
      );
    } else {
        setLoading(false);
    }
  }

    return (
      <div className="col-md-12">
        <div className="card card-container">

          <Form
            onSubmit={handleLogin}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                onChange={e => setUserEmail(e.target.value)}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                onChange={e => setPassword(e.target.value)}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
            />
          </Form>
        </div>
      </div>
    );
}

export default Login;