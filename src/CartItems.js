import React from 'react';
import CartItem from './CartItem'

const CartItems = ({cartItems, products}) =>(
<div className="container">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
    {cartItems.map((cartItem) => <CartItem key = {cartItem.id} name = {products.find((product) => product.id === cartItem.product_id).name} price = {products.find((product) => product.id === cartItem.product_id).priceInCents} qty = {cartItem.quantity} />)}
  </div>
  <small>Total Price: <b>${cartItems.reduce((acc, curr) => acc + products[curr.product_id -1 ].priceInCents * curr.quantity, 0) / 100}</b>
</small>
</div>



);

export default CartItems;