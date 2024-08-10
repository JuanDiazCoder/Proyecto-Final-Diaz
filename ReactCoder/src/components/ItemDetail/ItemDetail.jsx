/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../hook/useCart";
import { useNotification } from "../hook/useNotification";

const ItemDetail = ({ product: { id, nombre, precio, imagen, category, description, stock } }) => {
    const { isInCart, addItem } = useCart();
    const {setNotification} = useNotification();

    const handleAdd = (count) => {
        const productObj = {
            id,
            nombre,
            precio,
            quantity: count
        };
        addItem(productObj);
        setNotification('success', `Se agregaron ${count} de ${nombre}`);
    };

    return (
        <div className="mx-auto my-5 p-2" style={{ border: '1px solid #ced4da', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', background: '#fff', maxHeight: '900px', maxWidth: '1300px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imagen} className="card-img" alt={nombre} style={{ objectFit: 'cover', height: '100%' }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">
                            <strong>Categoría:</strong> {category}
                        </p>
                        <p className="card-text">{description}</p>
                        <div className="card-text-container">
                            <p className="card-text">Cantidad de artículos que desea comprar:</p>
                            <div className="card-text">
                                {
                                    isInCart(id) ? (
                                        <Link to='/cart'>Finalizar Compra</Link>
                                    ) : (
                                        <ItemCount stock={stock} onAdd={handleAdd} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
