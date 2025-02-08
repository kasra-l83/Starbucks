import { IProductlist } from "../data"
import { useBill } from "../provider/BillContext"

function SubmitOrder() {
    const { bill, setBill }= useBill();
    const total= bill.reduce((acc: number, order: IProductlist) => acc+ order.price* order.quantity, 0);

    const submit= () =>{
        const updatedBill= bill.map((order: IProductlist) => ({ ...order, quantity: 0 }))
        setBill(updatedBill);
    }

    return (
        <section className="flex flex-col items-center gap-y-2 mb-5">
            <h3 className="text-darkGreen text-2xl font-medium">Total: ${total}</h3>
            <button className="bg-cream text-[white] py-1 rounded-md w-full font-medium text-xl disabled:bg-darkGreen"
                disabled={total<= 0} onClick={submit}
            >
                Submit Order
            </button>
        </section>
    )
}
export default SubmitOrder;