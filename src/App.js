import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import React, {Component} from 'react'; 

class App extends Component{

  state = {
    products:[
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ] 
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <CartHeader />
      </header>
      <main>
        <CartItems cartItems = {cartItemList} />
      </main>
      <footer>
        <CartFooter copyright="&copy;" year="2016" />
      </footer>
    </div>
  );
  }
}

export default App;
