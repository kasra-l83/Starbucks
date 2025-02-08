import { IProductlist, Products } from "../data"
import { createContext, ReactNode, useContext, useState } from "react"

type BillContextType= {
    bill: IProductlist[]
    increase: (name: string) => void
    decrease: (name: string) => void
    setBill: (bill: IProductlist[]) => void
}

const BillContext= createContext<BillContextType | null>(null);

export const BillProvider= ({ children }: { children: ReactNode }) =>{
    const [bill, setBill] = useState(JSON.parse(localStorage.getItem("bill") as string) || Products);
    let updatedBill;

    const increase= (name: string) =>{
        updatedBill= bill.map((el: IProductlist) =>
            el.name=== name ? { ...el, quantity: el.quantity + 1 } : el
        )
        setBill(updatedBill);
        localStorage.setItem("bill", JSON.stringify(updatedBill));
    }
    const decrease= (name: string) =>{
        updatedBill= bill.map((el: IProductlist) =>
            el.name === name ? { ...el, quantity: el.quantity - 1 } : el
        )
        setBill(updatedBill);
        localStorage.setItem("bill", JSON.stringify(updatedBill));
    }

    return (
        <BillContext.Provider value={{ bill, increase, decrease, setBill }}>
            {children}
        </BillContext.Provider>
    )
}

export const useBill= () =>{
    const context= useContext(BillContext);
    if (!context) {
        throw new Error("useBill must be used within a BillProvider");
    }else return context;
}