import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Nav = () => {
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
                                <span className="
                                nav-title">Produits</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="is-active" to="/univers" exact>
                                <span className="
                                nav-title">Univers</span>
                            </NavLink>
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

export default Nav;