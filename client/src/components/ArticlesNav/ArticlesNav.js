import { NavLink, Link } from 'react-router-dom';

import './ArticlesNav.css'; 

const ArticlesNav = () => {
    return (
        <>
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills nav-articles">
                    <li className="nav-item">
                        <Link className="nav-link is-active" activeclassname="is-active" to="/all">
                            <span className="articles-nav-title">Tous</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="is-active" to="/mugs">
                            <span className="articles-nav-title">Mugs</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="is-active" to="/figurines">
                            <span className="articles-nav-title">Figurines</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="is-active" to="/fluffs">
                            <span className="articles-nav-title">Peluches</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="is-active" to="/accessories">
                            <span className="articles-nav-title">Accessoires</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ArticlesNav;