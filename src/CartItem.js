import React from 'react';

const CartItem = (
  {name,
  price,
  qty
  }) =>(
<div className="list-group-item">
  <div className="row">
    <div className="col-md-8">{name}</div>
    <div className="col-md-2">${price /100}</div>
    <div className="col-md-2">{qty}</div>
  </div>
</div>
);


export default CartItem;