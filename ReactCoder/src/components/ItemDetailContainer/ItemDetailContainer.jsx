import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const querySnapShot = await getDoc(doc(db, "products", productId));
                const product = { id: querySnapShot.id, ...querySnapShot.data() };
                setProduct(product);
                console.log("detalle", product);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <>
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <div className="loading-container">
                    <p className="loading-text">Loading...</p>
                    <div className="spinner"></div>
                </div>
            )}
        </>
    );
}

export default ItemDetailContainer;
