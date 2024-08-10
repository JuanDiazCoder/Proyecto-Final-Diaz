import { useState } from "react";
import { useCart } from "../hook/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState(false);
    const [buyer, setBuyer] = useState({
        FirstName: "",
        LastName: "",
        Phone: "",
        Address: "",
        Country: ""
    });

    const { cart, getTotal, totalQuantity,cleanCart } = useCart();
    const total = getTotal();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyer((prev) => ({ ...prev, [name]: value }));
    };

    const createOrder = async () => {
        setLoading(true);
        try {
            const objOrder = {
                buyer,
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            };

            const ids = cart.map((item) => item.id);
            const productRef = collection(db, "products");

            const productsAddFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids))
            );
            const { docs } = productsAddFirestore;

            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;
                const productAddToCart = cart.find((prod) => prod.id === doc.id);
                const productQuantity = productAddToCart?.quantity;

                if (stockDB >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDB - productQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                await addDoc(orderRef, objOrder);
                setOrder(true);
                cleanCart()
            } else {
                alert("Algunos productos están fuera de stock");
            }
        } catch (error) {
            console.error("Error al crear la orden", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h4 className="text-center text-primary p-4">Se está generando la orden...</h4>;
    }

    if (order) {
        return <h4 className="text-center text-success p-4">Orden creada correctamente</h4>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card " style={{ width: '500px' }}>
                <h2 className="text-center">CheckOut</h2>
                <form>
                    <div className="mb-3 m-2">
                        <label htmlFor="FirstName" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="FirstName" name="FirstName" value={buyer.FirstName} onChange={handleChange} />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="LastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="LastName" name="LastName" value={buyer.LastName} onChange={handleChange} />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="Phone" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="Phone" name="Phone" value={buyer.Phone} onChange={handleChange} />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="Address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="Address" name="Address" value={buyer.Address} onChange={handleChange} />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="Country" className="form-label">País</label>
                        <input type="text" className="form-control" id="Country" name="Country" value={buyer.Country} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-info m-2" onClick={createOrder}>Generar orden</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
