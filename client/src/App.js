import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

// import { useSelector, useDispatch} from "react-redux";

import { useState, useEffect } from 'react';

import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MainUniverse from './components/Universes/MainUniverse';
import Article from './components/Article/Article';


import SignOut from './components/Clients/SignOut';
import SignIn from './components/Clients/SignIn';
import SignUp from './components/Clients/SignUp';
import ClientInfos from './components/Clients/ClientInfos';

import Error from './components/Error/Error';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


// on fait du destructuring pour importer nos actions 
// import { setHarryPotter, setMarvel, setSda, setStarWars, setCollections } from "./actions";

// function setToken(userToken) {
//   // pour conserver tout le user récupérer => on doit transformer l'objet json en string, peut poser pb ici
//   localStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = localStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App(props) {

  // console.log(useSelector((state) => state));
  // // renvoi l'objet avec nos reducers 
  // // const title = useSelector((state) => state.pageTitleReducer);

  // const dispatch = useDispatch();

  //soit on crée la fonction à part et on l'appelle après dans le return
  // const setCollectionsTitle = () => {
  //   dispatch(setCollections());
  // }
  // const setHarryPotterTitle = (event) => {
  //   event.preventDefault();
  //   dispatch(setHarryPotter());
  // }
  // const setMarvelTitle = (event) => {
  //   event.preventDefault();
  //   dispatch(setMarvel());
  // }
  // const setSdaTitle = (event) => {
  //   event.preventDefault();
  //   dispatch(setSda());
  // }
  // const setStarWarsTitle = (event) => {
  //   event.preventDefault();
  //   dispatch(setStarWars());
  // }

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
        <MainNavbar isAuthenticated={isAuthenticated} />

        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />

            {/* <Route path={["/produits", "/univers/harry-potter", "/univers/marvel", "/univers/star-wars", "/univers/seigneur-des-anneaux"]} component={MainUniverse}/>  */}

            <Route path="/produits" exact component={MainUniverse} />
            <Route path="/produits/produit/:id" component={Article} />

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
