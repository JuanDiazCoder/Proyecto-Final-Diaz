/* eslint-disable react/prop-types */
import Product from "../Product/Product";
const ListProducts = ({products}) => {
    
  return (
    <div className="container row " style={{top: "3rem"}}>
        {products.map( product =>
         <Product product={product} key={product.id} />
         )}        
    </div>
  )
}

export default ListProducts