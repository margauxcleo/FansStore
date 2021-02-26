import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';

import MainUniverse from './components/Universes/MainUniverse';
import Article from './components/Article/Article';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useSelector, useDispatch } from "react-redux";

// on fait du destructuring pour importer nos actions 
// import { setHarryPotter, setMarvel, setSda, setStarWars, setCollections } from "./actions";

function App(props) {

  const { setThemeOnClick } = props;

  console.log(useSelector((state) => state));
  // renvoi l'objet avec nos reducers 
  // const title = useSelector((state) => state.pageTitleReducer);

  const dispatch = useDispatch();

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
        <MainNavbar setThemeOnClick={setThemeOnClick}/>

        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/produits" exact> 
              <MainUniverse /> 
            </Route>

            <Route path="/produits/produit/:id" exact component={Article} />

          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
