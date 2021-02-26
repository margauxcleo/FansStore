import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainNavbar from './components/MainNavbar/MainNavbar';
import Footer from './components/Footer/Footer';


import Home from './components/Home/Home';

import ProductsPage from './components/ProductsPage/ProductsPage';

import HarryPotter from './components/UniversesPage/HarryPotter';
import Marvel from './components/UniversesPage/Marvel';
import LordOfTheRings from './components/UniversesPage/LordOfTheRings';
import StarWars from './components/UniversesPage/StarWars';
import Article from './components/Article/Article';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useSelector, useDispatch } from "react-redux";

// on fait du destructuring pour importer nos actions 
import { setHarryPotter, setMarvel, setSda, setStarWars, setCollections } from "./actions";

function App() {

  console.log(useSelector((state) => state));
  // renvoi l'objet avec nos reducers 
  const title = useSelector((state) => state.pageTitleReducer);

  const dispatch = useDispatch();

  //soit on crée la fonction à part et on l'appelle après dans le return
  const setCollectionsTitle = () => {
    dispatch(setCollections());
  }
  const setHarryPotterTitle = () => {
    dispatch(setHarryPotter());
  }
  const setMarvelTitle = () => {
    dispatch(setMarvel());
  }
  const setSdaTitle = () => {
    dispatch(setSda());
  }
  const setStarWarsTitle = () => {
    dispatch(setStarWars());
  }



  return (
    <>
      <Router>
        <MainNavbar />

        <div className="main">
          <Switch>
            <Route path="/" exact render={() => { <Home />}} >
              <Home />
            </Route>
            {/* <Route path="/profile/:id" render={() => <Profile name="name" />} /> */}
            <Route path="/produits" exact render={() => <ProductsPage title={title} setCollectionsTitle={setCollectionsTitle}/>} />
            <Route path="/produits/produit/:id" exact render={() => <Article />} />
            <Route path="/univers">
              <Switch>
                <Route path="/univers/harry-potter" exact render={() => <HarryPotter title={title} setHarryPotterTitle={setHarryPotterTitle} />} />
                <Route path="/univers/marvel" exact render={() => <Marvel title={title} setMarvelTitle={setMarvelTitle}/>} />
                <Route path="/univers/seigneur-des-anneaux" exact render={() => <LordOfTheRings title={title} setSdaTitle={setSdaTitle}/>} />
                <Route path="/univers/star-wars" exact render={() => <StarWars title={title} setStarWarsTitle={setStarWarsTitle}/>} />
              </Switch>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
