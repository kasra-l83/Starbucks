import { IProductlist } from "../data"
import ProductCard from "./ProductCard"
import { useBill } from "../provider/BillContext"

function OrdersList() {
    const { bill }= useBill();

    return (
        <section>
            {bill.some((product: IProductlist) => product.quantity> 0) && (
                <h4 className="text-lg font-bold text-darkGreen my-5 text-center">Bill</h4>
            )}
            <div className="flex justify-around flex-wrap px-5 gap-5">
                {bill.filter((product: IProductlist) => product.quantity> 0).map((product: IProductlist) => (
                    <ProductCard key={product.name} img={product.img} name={product.name} price={product.price} quantity={product.quantity} category="order"/>
                ))}
            </div>
        </section>
    )
}
export default OrdersList;