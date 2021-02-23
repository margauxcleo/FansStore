import UniversesNav from '../UniversesNav/UniversesNav'
;
import Articles from '../Articles/Articles';

import './Universes.css';

// where articles = univers HP 

const Marvel = () => {
    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded">
                <div className="px-0 mx-auto jumb-div-title">
                    <h1 className="display-4 mx-auto">Marvel</h1>
                </div>
            </div>
            < UniversesNav />
            < Articles />
        </>
    );
}

export default Marvel;