import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Universes from './components/Universes/Universes';
import Footer from './components/Footer/Footer';

import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produits">Produits</Link>
          </li>
          <li>
            <Link to="/univers">Univers</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact render={() => { <Home />;}} >
            <Home />
          </Route>
          {/* <Route path="/profile/:id" render={() => <Profile name="name" />} /> */}
          <Route path="/produits" render={() => <Products name="name" />} />
          <Route path="/univers" render={() => <Universes />} />
        </Switch>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
