import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3002/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route exact path="/cart" render={() => <Cart />} />
      </div>
    </div>
  );
}

export default App;
