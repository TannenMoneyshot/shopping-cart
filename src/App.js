import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import React, { Component } from 'react';
import AddItem from './AddItem'

class App extends Component {

  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }

  submitFunction = (itemToAdd) => {
    if (this.state.cartItemsList.find((item) => item.product.id === itemToAdd.product.id)) {
      let updatedItemsList = [...this.state.cartItemsList]
      console.log()
      updatedItemsList[this.state.cartItemsList.findIndex((item) => item.product.id === itemToAdd.product.id )].quantity+= +itemToAdd.quantity
      this.setState({ cartItemsList:updatedItemsList })
    } else {
      let newCartListItem = { id: this.state.cartItemsList.length + 1, ...itemToAdd }
      this.setState({ cartItemsList: [...this.state.cartItemsList, newCartListItem] })
    }
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
        </header>
        <main>
          <CartItems cartItems={this.state.cartItemsList} />
          <AddItem arrayOfProducts={this.state.products} submitFunction={this.submitFunction} />
        </main>
        <footer>
          <CartFooter copyright="&copy;" year="2016" />
        </footer>
      </div>
    );
  }
}

export default App;
