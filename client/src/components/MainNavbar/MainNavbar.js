import { NavLink } from 'react-router-dom';

import './MainNavbar.css';

const MainNavbar = () => {
    return(
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
                            <NavLink className="nav-link" activeClassName="is-active" to="/produits" exact>
                                <span className="nav-title">Produits</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="is-active" to="/univers" exact>
                                <span className="
                                nav-title">Univers</span>
                            </NavLink>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" activeclassname="is-active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Univers
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink className="dropdown-item"to="/univers/harry-potter" exact>
                                        <span className="nav-title">Harry Potter</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/univers/star-wars" exact>
                                        <span className="nav-title">Star Wars</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/univers/seigneur-des-anneaux" exact>
                                        <span className="nav-title">Le Seigneur des Anneaux</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/univers/marvel" exact>
                                        <span className="nav-title">Marvel</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="is-active" to="/signIn" exact>
                                <i className="fas fa-user"></i>
                                <span className="
                                nav-title">Compte</span>
                            </NavLink>
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
    );
};

export default MainNavbar;