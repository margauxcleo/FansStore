import UniversesNav from '../UniversesNav/UniversesNav'
;
import './Universes.css';

const Universes = () => {
    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded">
                <div className="px-0 mx-auto jumb-div-title">
                    <h1 className="display-4 mx-auto">Nos univers</h1>
                </div>
            </div>
            < UniversesNav />
        </>
    );
}

export default Universes;