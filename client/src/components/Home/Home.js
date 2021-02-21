import {Link} from "react-router-dom";
import './Home.css';


const Home = () => {
    return (
        <div className="grid mb-4">
            <div className="univers">
            <Link to="/univers">
                <h2 className="texte_univers"> Univers</h2>
            </Link>
            </div>
            <div className="licence">
                <h2 className="texte_licence"> 100% sous licence</h2>
            </div>
            <div className="texte">
                <p className="texte_texte">
                    Bienvenue chez FansStore !
                    Notre site e-commerce vous met à disposition 
                    des produits variés,<br/> de qualité et à un prix abordable.<br/>
                    Nos produits sont dérivés d’univers de films célèbres. 
                </p>
            </div>
            <div className="collection">
            <Link to="/produits">
                <h2 className="texte_collection">Collections</h2>
            </Link>
            </div>
        </div>
    );
}

export default Home;