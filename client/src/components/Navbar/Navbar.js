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
                            <a className="nav-link active" aria-current="page" href="#">
                                <i className="fas fa-home"></i>
                                <span className="
                                nav-title">Accueil</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span className="
                                nav-title">Produits</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span className="
                                nav-title">Univers</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                <i className="fas fa-user"></i>
                                <span className="
                                nav-title">Compte</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                <i className="fas fa-shopping-basket"></i>
                                <span className="
                                nav-title">Panier</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
};

export default Nav;