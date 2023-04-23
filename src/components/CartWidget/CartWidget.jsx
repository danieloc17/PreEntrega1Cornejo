import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg";
  return (
    <div>
      <strong className="contadorCarrito">5</strong>
      <br />   
      <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
    </div>
  )
}

export default CartWidget;
