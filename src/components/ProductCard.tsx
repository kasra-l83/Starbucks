import { Productlist } from "../data";

function ProductCard(el: Productlist){
    return(
        <div className="h-60 w-36 bg-darkGreen rounded-lg flex flex-col items-center justify-around mt-5">
            <img src={el.img} className="size-28"/>
            <div className="self-start flex flex-col space-y-2 px-3">
                <h3 className="text-[white]">{el.name}</h3>
                <h6 className="text-cream font-bold">${el.price}</h6>
            </div>
            <span className="flex text-darkGreen">
                <button className="size-7 bg-cream">-</button>
                <div className="size-7 bg-[white] flex justify-center	items-center">{el.quantity}</div>
                <button className="size-7 bg-cream">+</button>
            </span>
        </div>
    )
}
export default ProductCard