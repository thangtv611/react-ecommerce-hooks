import { Button } from 'react-bootstrap';
import Header from "./components/Header";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>
            <Route path='/cart' exact>
                <Cart/>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
