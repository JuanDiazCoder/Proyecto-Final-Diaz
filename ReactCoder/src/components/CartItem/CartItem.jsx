import PropTypes from 'prop-types';
import "./CartItem.css"

// eslint-disable-next-line react/prop-types
const CartItem = ({ id, nombre, precio, quantity,removeItem }) => {
   
    return (
        <article className="cartItem">
            <header className="header">
                {nombre}
            </header>
            <section className="section">
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio por unidad: $ {precio}
                </p>
            </section>
            <button className="btn btn-danger align-self-end mt-2" onClick={() => removeItem(id)}>Eliminar coche</button>
        </article>
    );
}

CartItem.propTypes = {
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
};

export default CartItem;
