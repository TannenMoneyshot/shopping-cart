import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import React, { Component } from 'react';
import AddItem from './AddItem'

class App extends Component {

  state = {
    products: [],
    cartItemsList: []
  }

  async componentDidMount() {
    const responseProducts = await fetch('http://localhost:8082/api/products')
    const responseItems = await fetch('http://localhost:8082/api/items')
    const jsonProducts = await responseProducts.json()
    console.log(jsonProducts)
    const jsonItems = await responseItems.json()
    console.log(jsonItems)
    this.setState({ products: jsonProducts, cartItemsList: jsonItems })
    console.log(this.state)
    
  }

  submitFunction = (itemToAdd) => {
    if (this.state.cartItemsList.find((item) => item.product.id === itemToAdd.product.id)) {
      let updatedItemsList = [...this.state.cartItemsList]
      console.log()
      updatedItemsList[this.state.cartItemsList.findIndex((item) => item.product.id === itemToAdd.product.id)].quantity += +itemToAdd.quantity
      this.setState({ cartItemsList: updatedItemsList })
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
          <CartItems cartItems={this.state.cartItemsList} products= {this.state.products} />
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
