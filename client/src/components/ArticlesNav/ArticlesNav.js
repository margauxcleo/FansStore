import $ from 'jquery';

import './ArticlesNav.css'; 

const ArticlesNav = (props) => {

    // mise en place de la classe active
    $( '.nav-pills a' ).on( 'click', function () {
        $( '.nav-pills' ).find( 'li a.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });

    const { setCategoryOnClick } = props; 

    return (
        <>
            <div className="card-header mx-auto">
                <ul className="nav nav-pills card-header-pills nav-articles">
                    <li className="nav-item">
                        <a 
                        className="nav-link active" 
                        // activeclassname="is-active" 
                        // to="/all"
                        onClick={(event) => setCategoryOnClick(event, 0)}
                        >
                            <span className="articles-nav-title">Tous</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link" 
                        // activeclassname="is-active" 
                        onClick={(event) => setCategoryOnClick(event, 1)}
                        >
                            <span className="articles-nav-title">Mugs</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link" 
                        // activeclassname="is-active" 
                        onClick={(event) => setCategoryOnClick(event, 2)}
                        >
                            <span className="articles-nav-title">Figurines</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link" 
                        // activeclassname="is-active" 
                        onClick={(event) => setCategoryOnClick(event, 3)}
                        >
                            <span className="articles-nav-title">Peluches</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className="nav-link" 
                        // activeclassname="is-active" 
                        onClick={(event) => setCategoryOnClick(event, 4)}
                        >
                            <span className="articles-nav-title">Accessoires</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ArticlesNav;