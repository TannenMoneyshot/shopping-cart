import React from 'react';

const CartItem = (
  {name,
  price,
  qty
  }) =>(
<div class="list-group-item">
  <div class="row">
    <div class="col-md-8">{name}</div>
    <div class="col-md-2">{price}</div>
    <div class="col-md-2">{qty}</div>
  </div>
</div>
);


export default CartItem;