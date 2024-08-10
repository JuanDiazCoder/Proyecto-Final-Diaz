import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../hook/useCart";
import "./Cart.css"; 

const Cart = () => {
  const { cart, getTotal, totalQuantity,clearCart,removeItem } = useCart();
  const total = getTotal();



  return (
    <div className="container mt-5">
      <div className="cart-container bg-light p-4">
        {totalQuantity === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
            <h2>No hay items en el carrito</h2>
          </div>
        ) : (
          <>
            <div className="row">
              {cart.map((item) => (
                <div className="col-12 mb-3" key={item.id}>
                  <CartItem {...item} removeItem={removeItem} />
                </div>
              ))}
            </div>
            <h2 className="text-end">Total: ${total}</h2>
            <div className="d-flex justify-content-end">
              <button className="btn btn-danger me-1" onClick={clearCart}>Borrar productos</button>
              <Link to="/CheckOut" className="btn btn-primary">CheckOut</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

