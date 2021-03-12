import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

function App() {
  let cartItemList = [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ];
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

export default App;
