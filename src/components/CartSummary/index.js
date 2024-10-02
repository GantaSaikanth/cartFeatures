import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      let totalPrice = 0
      cartList.forEach(eachCart => {
        totalPrice += eachCart.price * eachCart.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="total-order-heading">
            Order Total:
            <span className="total-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="summary-desc">{cartLength} items in cart</p>
          <button className="check-out-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
