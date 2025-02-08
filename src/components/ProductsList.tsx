import { IProductlist } from "../data"
import ProductCard from "./ProductCard"
import { useBill } from "../provider/BillContext"

function ProductsList() {
    const { bill, increase, decrease }= useBill();

    return (
        <section className="flex justify-around flex-wrap my-5 px-5 gap-5">
            {bill.map((product: IProductlist) => (
                <ProductCard key={product.name} img={product.img} name={product.name} price={product.price} quantity={product.quantity}
                    category="product" increase={() => increase(product.name)} decrease={() => decrease(product.name)}
                />
            ))}
        </section>
    )
}
export default ProductsList;