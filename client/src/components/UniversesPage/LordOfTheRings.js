import UniversesNav from '../UniversesNav/UniversesNav'
;
import Articles from '../Articles/Articles';

import './Universes.css';

// where articles = univers LORDOFTHERINGS

const LordOfTheRings = () => {
    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded">
                <div className="px-0 mx-auto jumb-div-title">
                    <h1 className="display-4 mx-auto">Le Seigneur des Anneaux</h1>
                </div>
            </div>
            < UniversesNav />
            < Articles />
        </>
    );
}

export default LordOfTheRings; 