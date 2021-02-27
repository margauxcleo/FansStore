import { NavLink } from 'react-router-dom';

import './UniversesNav.css';
import '../Universes/Universes.css';

const UniversesNav = (props) => {

    const { setThemeOnClick } = props;

    return (
        <>
            <div className="universes-links p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                <div className="col-sm-12 col-md-6 d-flex justify-content-around align-items-center px-0">
                    <div>
                        <div className="circle circle-sm hp-circle d-flex justify-content-center align-items-center">
                            <NavLink 
                            className="nav-link" 
                            to="/univers/harry-potter"
                             
                            onClick={(event) => setThemeOnClick(event, "produits/univers/harry-potter", "Harry Potter", "hp")}
                            // onClick={props.setHarryPotterTitle}
                            >
                                <span className="universe-nav-title">Harry Potter</span>
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="circle circle-sm marvel-circle d-flex justify-content-center align-items-center">
                        <NavLink 
                        className="nav-link" 
                        to="/univers/marvel" 
                        exact 
                        onClick={(event) => setThemeOnClick(event, "produits/univers/marvel", "Marvel" , "marvel")}
                        // onClick={props.setMarvelTitle}
                        >
                            <span className="universe-nav-title">MARVEL</span>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-around align-items-center px-0">
                    <div className="circle circle-sm lotr-circle d-flex justify-content-center align-items-center">
                        <NavLink 
                        className="nav-link align-items-center justify-content-center" 
                        to="/univers/seigneur-des-anneaux" 
                        exact 
                        onClick={(event) => setThemeOnClick(event, "produits/univers/seigneur-des-anneaux", "Le Seigneur des Anneaux", "sda")}
                        // onClick={props.setSdaTitle}
                        >
                            <span className="universe-nav-title">Le Seigneur des</span>
                            <br />
                            <span className="universe-nav-title">Anneaux
                            </span>
                    </NavLink>
                </div>
                    <div className="circle circle-sm sw-circle d-flex justify-content-center align-items-center">
                        <NavLink 
                        className="nav-link" 
                        to="/univers/star-wars" 
                        exact 
                        onClick={(event) => setThemeOnClick(event, "produits/univers/star-wars", "Star Wars", "sw")}
                        // onClick={props.setStarWarsTitle}
                        >
                            <span className="universe-nav-title">Star Wars</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UniversesNav;