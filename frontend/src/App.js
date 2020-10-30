import React from 'react';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import ProductScreen from './screens/ProductScreen/ProductScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">amazona</Link>
          </div>
          <div>
            <Link to="/cart">
              <a href="/signin">Sign In</a>
                Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
    
  );
}

export default App;
