import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import { useSelector, useDispatch} from "react-redux";

import { useState } from 'react';

import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MainUniverse from './components/Universes/MainUniverse';
import Article from './components/Article/Article';
import SignOut from './components/Clients/SignOut';

import LogIn from './components/Clients/LogIn';
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

  //modal du login
  // const [signInModalShow, setSignInModalShow] = useState(false);
  
  // pour le login 
  // const [token, setToken] = useState();
  // const token = getToken();

  // if(!token) {
  //   return <LogIn setToken={setToken} />
  // }

  // const { setThemeOnClick } = props;

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



  return (
    <>
      <Router>
        <MainNavbar>
          
        </MainNavbar>
        {/* <SignIn
            show={signInModalShow}
            onHide={() => setSignInModalShow(false)}
          /> */}
        

        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />

            {/* <Route path={["/produits", "/univers/harry-potter", "/univers/marvel", "/univers/star-wars", "/univers/seigneur-des-anneaux"]} component={MainUniverse}/>  */}

            <Route path={"/produits"} exact component={MainUniverse}/>

            <Route path="/produits/produit/:id" component={Article} />

            {/* <Route path="/compte/connexion" exact component={SignIn} /> */}
            <Route path="/signOut" component={SignOut} />
            {/* <Route path="/compte/inscription" component={SignUp} /> */}


            <Route path="/infos" component={ClientInfos} />

            <Route path="*">
              <Error />
            </Route>

          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
