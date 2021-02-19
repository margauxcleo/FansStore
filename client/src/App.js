import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Universes from './components/Universes/Universes';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
