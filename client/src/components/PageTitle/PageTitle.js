// Composant permettant d'afficher le titre de la page 

import './PageTitle.css';

const PageTitle = (props) => {

    const title = props.title;

    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded">
                <div className="px-0 mx-auto jumb-div-title">
                    <h1 className="display-4 mx-auto">{title}</h1>
                </div>
            </div>

        </>
    );
}

export default PageTitle;