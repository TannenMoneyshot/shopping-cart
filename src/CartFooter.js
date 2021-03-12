import React from 'react';

const CartFooter = (
    {copyright,
    year
}) => (
    <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">{copyright} {year}</a>
</nav>
)
export default CartFooter;
