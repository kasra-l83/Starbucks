import Header from "./components/Header"
import OrdersList from "./components/OrdersList"
import ProductsList from "./components/ProductsList"
import SubmitOrder from "./components/SubmitOrder"
import { BillProvider } from "./provider/BillContext"

function App() {
  return(
    <>
      <Header/>
      <div className="max-w-[1440px] mx-auto">
        <BillProvider>
          <ProductsList/>
          <OrdersList/>
          <SubmitOrder/>
        </BillProvider>
      </div>
    </>
  )
}
export default App