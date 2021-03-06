import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import { useSelector, useDispatch} from "react-redux";
import { useState, useEffect } from 'react';

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

import Error from './components/Error/Error';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// on fait du destructuring pour importer nos actions 
// import { setHarryPotter, setMarvel, setSda, setStarWars, setCollections } from "./actions";
import { addToCart, getCart, removeFromCart } from './actions/cartActions';

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
  }

  // Supprimer un article du Panier
  const handleDeleteFromCart = (event, id) => {
    event.preventDefault();
    dispatch(removeFromCart(id));
  }

  // Récupérer le panier stocké en localStorage
  const handleGetCart = () => {
    // event.preventDefault();
    dispatch(getCart());
  }


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
        <MainNavbar isAuthenticated={isAuthenticated} handleGetCart={handleGetCart}/>

        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />

            {/* <Route path={["/produits", "/univers/harry-potter", "/univers/marvel", "/univers/star-wars", "/univers/seigneur-des-anneaux"]} component={MainUniverse}/>  */}

            <Route path="/produits" exact component={MainUniverse} />
            <Route path="/produits/produit/:id" 
              exact 
              render={(props) => <Article {...props} handleAddToCart={handleAddToCart}/>} 
            />
            <Route path="/panier" 
              exact 
              render={(props) => <Cart {...props} 
                cart={cart}
                handleAddToCart={handleAddToCart} 
                handleDeleteFromCart={handleDeleteFromCart}
                handleGetCart={handleGetCart}/>} 
            />

            <Route exact path='/compte/connexion'
              render={(props) => !isAuthenticated ? <SignIn {...props} setAuth={setAuth} /> : <Redirect to='/' />} />

            <Route exact path='/compte/inscription'
              render={(props) => !isAuthenticated ? <SignUp {...props} setAuth={setAuth} /> : <Redirect to='/compte/connexion' />} />

            <Route exact path='/compte/deconnexion' render={(props) => isAuthenticated ? <SignOut {...props} setAuth={setAuth} />
              : <Redirect to="/" />} />

            <Route exact path='/compte/infos'
              render={(props) => isAuthenticated ? <ClientInfos {...props} setAuth={setAuth} /> : <Redirect to='/compte/connexion' />} />

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
