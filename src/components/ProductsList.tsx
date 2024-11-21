import {Products} from "../data"
import ProductCard from "./ProductCard"

function ProductsList(){

    return(
        <div className="flex justify-around flex-wrap px-20 mb-5">
            {Products.map((product, index) =>{
                return(
                    <ProductCard key={index} img={product.img} name={product.name} price={product.price} quantity={product.quantity}/>
                )
            })}
        </div>
    )
}
export default ProductsList