import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Navbar from './components/MainNavbar/Navbar';
import Footer from './components/Footer/Footer';


import Home from './components/Home/Home';

import Products from './components/ProductsPage/Products';

import Universes from './components/UniversesPage/Universes';
import HarryPotter from './components/UniversesPage/HarryPotter';
import Marvel from './components/UniversesPage/Marvel';
import LordOfTheRings from './components/UniversesPage/LordOfTheRings';
import StarWars from './components/UniversesPage/StarWars';
import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="main">
          <Switch>
            <Route path="/" exact render={() => { <Home />}} >
              <Home />
            </Route>
            {/* <Route path="/profile/:id" render={() => <Profile name="name" />} /> */}
            <Route path="/articles" exact render={() => <Articles />} />
            <Route path="/articles/article/:id" exact render={() => <Article />} />
            <Route path="/univers">
              <Switch>
                <Route path="/univers" exact render={() => <Universes />} />
                <Route path="/univers/harry-potter" exact render={() => <HarryPotter />} />
                <Route path="/univers/marvel" exact render={() => <Marvel />} />
                <Route path="/univers/seigneur-des-anneaux" exact render={() => <LordOfTheRings />} />
                <Route path="/univers/star-wars" exact render={() => <StarWars />} />
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
