import { ToastContainer, toast } from 'react-toastify';

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
        toast.dark("A bientôt !");
        // props.history.push('/');
    }

    return (
        <>
        <div className="logout-form container-fluid mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-4">
            <h1>Se déconnecter ?</h1>
            <br/>
            <div className="d-flex justify-content-around align-items-center">
                <button className="btn btn-primary" onClick={(e) => onLogout(e)}>Oui </button>
                <button className="btn btn-secondary" onClick={handleRedirect}>Non </button>
            </div>
            
        </div>
        </>
    )

}

export default SignOut;