function Header(){
  return(
    <section className="flex flex-col items-center h-28 justify-between pt-2">
      <span className="flex items-center">
        <img src="img/logo.png" className="size-16 mr-2"/>
        <h1 className="text-4xl font-black">Starbucks</h1>
      </span>
      <h4 className="text-lg font-bold text-darkGreen">Starbucks Online Coffee Order</h4>
    </section>
  )
}
export default Header