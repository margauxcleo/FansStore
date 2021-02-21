import { NavLink, Link } from 'react-router-dom';

import './ArticlesNav.css'; 

const ArticlesNav = () => {
    return (
        <>
            <div className="card-header">
                <ul class="nav nav-pills card-header-pills nav-articles">
                    <li class="nav-item">
                        <Link className="nav-link is-active" activeClassName="is-active" to="/all" exact>
                            <span className="articles-nav-title">Tous</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="is-active" to="/mugs" exact>
                            <span className="articles-nav-title">Mugs</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="is-active" to="/figurines" exact>
                            <span className="articles-nav-title">Figurines</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="is-active" to="/fluffs" exact>
                            <span className="articles-nav-title">Peluches</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="is-active" to="/accessories" exact>
                            <span className="articles-nav-title">Accessoires</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ArticlesNav;