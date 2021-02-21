import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


import Home from './components/Home/Home';

import Products from './components/Products/Products';

import Universes from './components/Universes/Universes';
import HarryPotter from './components/Universes/HarryPotter';
import Marvel from './components/Universes/Marvel';
import LordOfTheRings from './components/Universes/LordOfTheRings';
import StarWars from './components/Universes/StarWars';


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
            <Route path="/produits" exact render={() => <Products name="name" />} />
            <Route path="/univers">
              <Switch>
                <Route path="/univers" exact render={() => <Universes />} />
                <Route path="/univers/harry-potter" exact render={() => <HarryPotter />} />
                <Route path="/univers/marvel" exact render={() => <Marvel />} />
                <Route path="/univers/-des-anneaux" exact render={() => <LordOfTheRings />} />
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
