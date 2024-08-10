import Nav from './components/Nav/Nav';
import ListProduct from './components/ListProductContainer/ListProductContainer';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ListProductContainer from './components/ListProductContainer/ListProductContainer';
import { CardProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import { NotificationProvider } from './context/Notification';

function App() {

  return (
    <BrowserRouter>
    <NotificationProvider>
      <CardProvider>
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
          <Nav title="Agencia Quilmeña" />
          <Routes>
            <Route
              path="/"
              element={<ListProduct greetings="Todos los productos disponibles" />}
            />
            <Route exact path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ListProductContainer />}
            />
            <Route
              path="/Cart"
              element={<Cart />}
            />
            <Route
              path="/CheckOut"
              element={<CheckOut/>}
            />
          </Routes>
          <Footer />
        </div>
      </CardProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
