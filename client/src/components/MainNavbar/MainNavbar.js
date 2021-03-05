import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

import './MainNavbar.css';


const MainNavbar = (props) => {

    const { isAuthenticated } = props;

    const [infos, setInfos] = useState("");

    const getInfos = async () => {
        try {
            const response = await fetch("http://localhost:8088/clients/client/infos", {
                method: 'GET',
                mode: 'cors',
                headers: {
                    "jwt": localStorage.jwt
                }
            });
            const parseRes = await response.json();
            setInfos(parseRes);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getInfos();
    }, [isAuthenticated]);
    
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light navbar-main bg-main">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">FansStore</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="is-active" to="/" exact>
                                        <i className="fas fa-home"></i>
                                        <span className="
                                    nav-title">Accueil</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="is-active" to="/produits">
                                        <span className="nav-title">Produits</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" activeclassname="is-active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Univers
                                </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <NavLink
                                                className="dropdown-item"
                                                to="/univers/harry-potter"
                                                exact
                                                // onClick={(event) => setThemeOnClick(event, "produits/univers/harry-potter", "Harry Potter", "hp")}
                                            >
                                                <span className="nav-title">Harry Potter</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="dropdown-item"
                                                to="/univers/star-wars"
                                                exact
                                            // onClick={(event) => setThemeOnClick(event, "produits/univers/star-wars", "Star Wars")}
                                            >
                                                <span className="nav-title">Star Wars</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="dropdown-item"
                                                to="/univers/seigneur-des-anneaux"
                                                exact
                                            // onClick={(event) => setThemeOnClick(event, "produits/univers/seigneur-des-anneaux", "Le Seigneur des Anneaux")}
                                            >
                                                <span className="nav-title">Le Seigneur des Anneaux</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="dropdown-item"
                                                to="/univers/marvel"
                                                exact
                                            // onClick={(event) => setThemeOnClick(event, "produits/univers/marvel", "Marvel")}
                                            >
                                                <span className="nav-title">Marvel</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" activeclassname="is-active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user"></i>
                                        <span className="nav-title">
                                            {isAuthenticated ? infos.first_name : "Compte"}
                                        </span>
                                    </a>
                                    {<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {(isAuthenticated === true) ? (
                                            <>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/compte/infos"
                                                        exact
                                                    >
                                                        <i className="fas fa-user-cog"></i>
                                                        <span className="nav-title">Mes informations</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/compte/deconnexion"
                                                        exact
                                                    >
                                                        <i className="fas fa-user-slash"></i>
                                                        <span className="nav-title">Déconnexion</span>
                                                    </NavLink>
                                                </li>
                                            </>
                                        ) : (
                                                <>
                                                   <li>
                                                        <NavLink
                                                            className="dropdown-item"
                                                            to="/compte/connexion"
                                                            exact
                                                        >
                                                            <i className="fas fa-user-check"></i>
                                                            <span className="nav-title">Connexion</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            className="dropdown-item"
                                                            to="/compte/inscription"
                                                            exact
                                                        >
                                                            <i className="fas fa-user-plus"></i>
                                                            <span className="nav-title">Inscription</span>
                                                        </NavLink>
                                                    </li>
                                                </>
                                            )}
                                    </ul> }
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="is-active" to="/panier" exact>
                                        <i className="fas fa-shopping-basket"></i>
                                        <span className="
                                    nav-title">Panier</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default MainNavbar;