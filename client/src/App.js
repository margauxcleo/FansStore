import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';

import $ from 'jquery';

import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MainUniverse from './components/Universes/MainUniverse';
import Article from './components/Article/Article';
import Cart from './components/Cart/Cart';
import SignOut from './components/Clients/SignOut';
import SignIn from './components/Clients/SignIn';
import SignUp from './components/Clients/SignUp';
import ClientInfos from './components/Clients/ClientInfos';
import PurchasePage from './components/Order/PurchasePage/PurchasePage';
import OrderConfirmation from './components/Order/OrderConfirmation/OrderConfirmation';
import TermsOfUse from './components/Legals/TermsOfUse/TermsOfUse';
import Cookies from './components/Legals/CookiesPage/CookiesPage';
import MentionsLegales from './components/Legals/MentionsLegales/MentionsLegales';
import Error from './components/Error/Error';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// on fait du destructuring pour importer nos actions 
// import { setHarryPotter, setMarvel, setSda, setStarWars, setCollections } from "./actions";
import { addToCart, getCart, removeFromCart, increment, decrement } from './actions/cartActions';


function App(props) {

  // Mise en place de Redux pour la gestion du panier (cart)
  // // renvoi l'objet avec nos reducers 
  const cart = useSelector((state) => state.cartReducer);
  // console.log(useSelector((state) => state));

  const dispatch = useDispatch();

  // Ajouter un article au panier
  const handleAddToCart = (event, article) => {
    event.preventDefault();
    dispatch(addToCart(article));
  };

  // Supprimer un article du Panier
  const handleDeleteFromCart = (event, article) => {
    event.preventDefault();
    dispatch(removeFromCart(article));
  };

  // Récupérer le panier stocké en localStorage
  const handleGetCart = () => {
    // event.preventDefault();
    dispatch(getCart());
  };

  // Incrémenter de 1 
  const handleIncrement = (event, article) => {
    event.preventDefault();
    dispatch(increment(article))
  };

  // Décrémenter de 1 
  const handleDecrement = (event, article) => {
    event.preventDefault();
    dispatch(decrement(article))
  };

  // ----------------------------------------------------------------
  //  AUTH 
  const [isAuthenticated, setAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setAuthenticated(boolean);
  };

  const isAuth = async () => {
    try {
      const response = await fetch("http://localhost:8088/auth/is_verify", {
        method: 'GET',
        mode: 'cors',
        headers: {
          jwt: localStorage.jwt
        }
      });

      const auth = await response.json();
      console.log(auth);

      auth === true ? setAuthenticated(true) : setAuthenticated(false);

    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);


  return (
    <>
      <Router>
        <MainNavbar
          isAuthenticated={isAuthenticated}
          handleGetCart={handleGetCart}
          cart={cart}
        />

        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />

            {/* <Route path={["/produits", "/univers/harry-potter", "/univers/marvel", "/univers/star-wars", "/univers/seigneur-des-anneaux"]} component={MainUniverse}/>  */}

            <Route path="/produits" exact component={MainUniverse} />
            <Route path="/produits/produit/:id"
              exact
              render={(props) => <Article {...props}
                handleAddToCart={handleAddToCart}
                cart={cart}
              />}
            />

            <Route path="/panier"
              exact
              render={(props) => isAuthenticated ? <Cart {...props}
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
                handleGetCart={handleGetCart}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
                : <Redirect to="/compte/connexion" />}
            />

            <Route exact path='/compte/connexion'
              render={(props) => !isAuthenticated ? <SignIn {...props} setAuth={setAuth} /> : <Redirect to='/' />} />

            <Route exact path='/compte/inscription'
              render={(props) => !isAuthenticated ? <SignUp {...props} setAuth={setAuth} /> : <Redirect to='/compte/connexion' />} />

            <Route exact path='/compte/deconnexion' render={(props) => isAuthenticated ? <SignOut {...props} setAuth={setAuth} />
              : <Redirect to="/" />} />

            <Route exact path='/compte/infos'
              render={(props) => isAuthenticated ? <ClientInfos {...props} setAuth={setAuth} /> : <Redirect to='/compte/connexion' />} />

            <Route
              path="/paiement"
              exact
              render={(props) => isAuthenticated ? <PurchasePage {...props}
                cart={cart}
                handleGetCart={handleGetCart}
              />
                : <Redirect to="/compte/connexion" />}
            />

            <Route path="/cgu" exact component={TermsOfUse} />
            <Route path="/cookies" exact component={Cookies} />
            <Route path="/mentions-legales" exact component={MentionsLegales} />
            <Route path="*">
              <Error />
            </Route>

          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
