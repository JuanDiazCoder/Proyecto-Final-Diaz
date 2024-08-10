import "./ListProductContainer.css";
import ListProducts from "../ListProducts/ListProducts";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firebase/products";
import { useAsync } from "../hook/useAsync";


// eslint-disable-next-line react/prop-types
const ListProductContainer = ({ greetings }) => {
    const { categoryId } = useParams();
    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId]);

    if (loading) return (
        <div className="container my-4">
            <div className="alert alert-info text-center" role="alert">
                Loading...
            </div>
        </div>
    );

    if (error) return (
        <div className="container my-4">
            <div className="alert alert-danger text-center" role="alert">
                Error: {error.message}
            </div>
        </div>
    );

    return (
        <section className="container my-4">
            <h5 className="productos-title text-center mb-5 heading">{greetings}</h5>
            <div className="row">
                <ListProducts products={products} />
            </div>
        </section>
    );
};

export default ListProductContainer;
