export const ProductAdapter = ( doc ) => {
    const data = doc.data()

    return {
        id: doc.id,
        nombre: data.nombre,
        category: data.category,
        imagen: data.imagen,
        precio: data.precio,
        stock: data.stock,
        description: data.description
    }
}