/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Product.css'

function Product({product:{ imagen, nombre, id, precio, stock }}) {

    return (
        <div className="card mx-auto" style={{ width: '18rem', marginBottom:"15px"}}>
            <div className="card-body text-center">
                <img src={imagen} className="card-img sobresaliente" alt={nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Precio: €{precio}</p>
                    <p className="card-text">Stock: {stock}</p>
                    <Link to={`/detail/${id}`} className="btn btn-secondary">Ver detalles</Link>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};

export default Product;
