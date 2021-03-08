// Composant permettant d'afficher le titre de la page 
import './CookiesPage.css';

const Cookies = (props) => {


    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded d-flex align-items-center">
                <div className="px-0 mx-auto jumb-div-title" >
                    <h1 className="display-4 mx-auto">Conditions Générales d'Utilisations du site</h1>
                </div>
            </div>

            <section className="cookies p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded">
                <div className=" offset-xs-1 col-xs-10 offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-xl-2 col-xl-8">
                    <h2>Cookies</h2>

                    <p> Si vous souhaitez accéder à la page panier de notre site, il vous sera proposé d’enregistrer une adresse emai et un mot de passe. Ces informations seront conservés dans des cookies (localStorage). C’est uniquement pour votre confort afin de ne pas avoir à saisir ces informations . Ces cookies expirent au bout de 24 heures.
			        </p>
                    <p>
                        Si vous avez un compte et que vous vous connectez sur ce site, un cookie temporaire sera créé. Ces informations seront supprimées lors de votre déconnexion.
			        </p>
                    <p>
                        Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.
			        </p>
                    <p>
                        En modifiant les articles ajoutés au panier, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de l'article et les quantités sélectionnées que vous venez de modifier. Il expire au bout d’un jour.
			        </p>
                </div>
            </section>
        </>
    );
}

export default Cookies;