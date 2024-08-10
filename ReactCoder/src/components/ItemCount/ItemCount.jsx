/* eslint-disable react/prop-types */

import { useState } from "react";

const ItemCount = ({ initial = 1, stock , onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    };

    return (
        <div className="container mt-4">
            <div className="input-group " style={{ maxWidth: "200px", margin: "0 auto" }}>
                <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                <input type="text" className="form-control text-center" value={count} readOnly />
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            </div>
            <button className="btn btn-primary"  onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
