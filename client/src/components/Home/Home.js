import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
       <div className="home mx-auto col-xl-12 col-lg-12 col-md-11 col-sm-12">
           <div className="row d-flex justify-content-around mt-3">
                <div className="home-image-univers col-xl-8 col-lg-8 col-md-8 col-sm-12 p-5 mb-5 d-flex justify-content-center align-items-center">
                    <NavLink className="nav-link" to="/univers" exact>
                        <span className="home-nav-title">Univers</span>
                    </NavLink>
                </div>
                <div className="licence col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-5 d-flex justify-content-center align-items-center">
                    <span>100 % sous licence</span>
                </div>
           </div>
           <div className="row d-flex justify-content-around space">
                <div className="text col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                    <span>Bienvenue chez FansStore !
                    Notre site e-commerce vous met à disposition 
                    des produits variés,<br/> de qualité et à un prix abordable.<br/>
                    Nos produits sont dérivés d’univers de films célèbres.</span>
                </div>
                <div className="home-image-collection col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex justify-content-center align-items-center">
                <NavLink className="nav-link" to="/produits" exact>
                    <span className="home-nav-title">Collections</span>
                </NavLink>
                </div>
           </div>
       </div>
    );
}

export default Home;