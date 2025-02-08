import Modal from "./Modal"
import { useState } from "react"
import { IProductlist } from "../data"
import { useBill } from "../provider/BillContext"

function SubmitOrder() {
    const [open, setOpen]= useState(false);
    const { bill, setBill }= useBill();
    const total= bill.reduce((acc: number, order: IProductlist) => acc+ order.price* order.quantity, 0);

    const submit= () =>{
        const updatedBill= bill.map((order: IProductlist) => ({ ...order, quantity: 0 }))
        setBill(updatedBill);
        localStorage.setItem("bill", JSON.stringify(updatedBill));
        setOpen(true);
    }

    return (
        <section className="flex flex-col items-center gap-y-2 mb-5">
            <h3 className="text-darkGreen text-2xl font-medium">Total: ${total}</h3>
            <button className="bg-cream text-[white] py-1 rounded-md w-full font-medium text-xl disabled:bg-darkGreen"
                disabled={total<= 0} onClick={submit}
            >
                Submit Order
            </button>
            {open && <Modal close={() => setOpen(false)}/>}
        </section>
    )
}
export default SubmitOrder;