import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Error.css";

const Error = () => {

    let location = useLocation();

    return (
        <div className="error p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded row d-flex flex-column ">
            <h4>
                Nous sommes désolé(e)s, l'url <code>{location.pathname}</code> n'existe pas ou plus.
            </h4>
            <button className="btn btn-primary">
                <Link className="error-link" to="/">Retour à la page d'Accueil</Link>
            </button> 
        </div>
    );
}

export default Error;