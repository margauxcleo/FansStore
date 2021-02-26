import { NavLink, Link } from 'react-router-dom';

import './ArticlesNav.css'; 

const ArticlesNav = (props) => {

    const { articles, setCategoryOnClick } = props; 

    return (
        <>
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills nav-articles">
                    <li className="nav-item">
                        <a 
                        className="nav-link is-active" 
                        // activeclassname="is-active" 
                        // to="/all"
                        onClick={(event) => setCategoryOnClick(event, 0)}
                        >
                            <span className="articles-nav-title">Tous</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link is-active" 
                        // activeclassname="is-active" 
                        // to="/mugs"
                        onClick={(event) => setCategoryOnClick(event, 1)}>
                            <span className="articles-nav-title">Mugs</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link" 
                        activeclassname="is-active" 
                        // to="/figurines"
                        onClick={(event) => setCategoryOnClick(event, 2)}
                        >
                            <span className="articles-nav-title">Figurines</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link" 
                        activeclassname="is-active" 
                        to="/fluffs"
                        onClick={(event) => setCategoryOnClick(event, 3)}
                        >
                            <span className="articles-nav-title">Peluches</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link" 
                        activeclassname="is-active" 
                        to="/accessories"
                        onClick={(event) => setCategoryOnClick(event, 4)}
                        >
                            <span className="articles-nav-title">Accessoires</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ArticlesNav;