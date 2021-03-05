import { useState } from "react";
import { withRouter } from 'react-router-dom';

import './Clients.css';

const SignOut = (props) => {

    const setAuth = props.setAuth;

    const onLogout = async (event) => {
        event.preventDefault();
        localStorage.removeItem("jwt");
        setAuth(false);
        props.history.push('/');
    }

    const handleRedirect = (event) => {
        event.preventDefault();
        props.history.push('/');
    }

    return (
        <>
        <div>
            <h2>Déconnexion ?</h2>
            <button onClick={(e) => onLogout(e)}>Oui </button>
            <button onClick={handleRedirect}>Non </button>
        </div>
        </>
    )

}

export default SignOut;