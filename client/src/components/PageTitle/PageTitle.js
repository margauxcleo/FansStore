// Composant permettant d'afficher le titre de la page 
// Composant permettant d'afficher le titre de la page 

import './PageTitle.css';

const PageTitle = (props) => {

    const { mainTitle, themeStyle} = props;

    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded d-flex align-items-center">
                <div className={themeStyle + " " + "px-0 mx-auto jumb-div-title"} >
                    <h1 className="display-4 mx-auto">{mainTitle}</h1>
                </div>
            </div>

        </>
    );
}

export default PageTitle;