import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProductScreen from './screens/ProductScreen/ProductScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">amazona</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
    
  );
}

export default App;