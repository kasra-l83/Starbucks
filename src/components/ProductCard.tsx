import { IProductlist } from "../data"

interface ProductCardProps extends IProductlist {
    category: string
    increase?: () => void
    decrease?: () => void
}

function ProductCard({ img, name, price, quantity, category, increase, decrease }: ProductCardProps) {
    return (
        <div className="h-60 w-full bg-darkGreen rounded-lg flex flex-col items-center justify-around sm:w-36">
            <img src={img} className="size-28" alt={name} />
            <h3 className="text-[white] w-full px-3">{name}</h3>
            <h6 className="text-cream font-bold w-full px-3">{category=== "product" ? `$ ${price}` : `$${quantity* price}`}</h6>
            {category=== "product" ? (
                <span className="flex text-darkGreen">
                    <button className="size-7 bg-cream" onClick={decrease} disabled={quantity <= 0}>-</button>
                    <div className="size-7 bg-[white] flex justify-center items-center">{quantity}</div>
                    <button className="size-7 bg-cream" onClick={increase}>+</button>
                </span>
            ) : (
                <h3 className="text-[white] w-full px-3">Qty: {quantity}</h3>
            )}
        </div>
    )
}
export default ProductCard;