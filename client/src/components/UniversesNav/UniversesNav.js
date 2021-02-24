import { NavLink } from 'react-router-dom';

import './UniversesNav.css';
import '../UniversesPage/Universes.css';

const UniversesNav = () => {
    return (
        <>
            <div className="universes-links p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                <div className="col-sm-12 col-md-6 d-flex justify-content-around align-items-center px-0">
                    <div>
                        <div className="circle circle-sm hp-circle d-flex justify-content-center align-items-center">
                            <NavLink className="nav-link" to="/univers/harry-potter" exact>
                                <span className="universe-nav-title">Harry Potter</span>
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="circle circle-sm marvel-circle d-flex justify-content-center align-items-center">
                        <NavLink className="nav-link" to="/univers/marvel" exact>
                            <span className="universe-nav-title">MARVEL</span>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-around align-items-center px-0">
                    <div className="circle circle-sm lotr-circle d-flex justify-content-center align-items-center">
                        <NavLink className="nav-link align-items-center justify-content-center" to="/univers/seigneur-des-anneaux" exact>
                            <span className="universe-nav-title">Le Seigneur des</span>
                            <br />
                            <span className="universe-nav-title">Anneaux
                            </span>
                    </NavLink>
                </div>
                    <div className="circle circle-sm sw-circle d-flex justify-content-center align-items-center">
                        <NavLink className="nav-link" to="/univers/star-wars" exact>
                            <span className="universe-nav-title">Star Wars</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UniversesNav;