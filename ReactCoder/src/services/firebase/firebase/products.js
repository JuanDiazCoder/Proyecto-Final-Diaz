import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { ProductAdapter } from '../../../adapters/ProductsAdapters';


export const getProducts = (categoryId) => {
    const productsCollection = categoryId 
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products")

    return getDocs(productsCollection)
        .then((querySnapshot)=>{
            const productAdapted = querySnapshot.docs.map((doc)=>{
                return ProductAdapter(doc)
            })
            return productAdapted;
        })
        .catch((error)=>{
            return error
        })
};
export const getProductById = (itemId)=>{
    const productDoc = doc(db, "products", itemId)

    return getDoc(productDoc)
    .then((queryDocumentSnapshot)=>{
        const productAdapted = ProductAdapter(
          queryDocumentSnapshot
        );
        return productAdapted
    })
    .catch((error)=>{
        return error
    })
}