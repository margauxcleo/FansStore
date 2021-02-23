// Page utilisée comme squelette de base des pages suivantes, car avec des components identiques:
// - Landing Page Produits 
// - Landing Page Univers 
// - Page Article 

// Liste des composants communs:
// - Page title: div comprenant le titre de la page 
// - UniversesNav: les pastilles vers les différents univers 
// - Le bloc Articles 

import { PageTitle } from '../PageTitle';
import { UniversesNav } from '../UniversesNav';


import './PageTitle.css';

// where articles = univers HP 

const MainPageArticles = () => {
    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded">
                < PageTitle /> 
                < UniversesNav /> 
            </div>
        </>
    );
}

export default MainPageArticles;