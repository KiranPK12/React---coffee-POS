import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total , reset , amount  } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your Order</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  
  const printCart = ()=>{
    cart.map((item)=>{
     return console.log(item);
    })
     console.log(amount,total);
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>Your Order</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>₹{total}</span>
          </h4>
        </div>
        {/* <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button> */}
        <button className='btn clear-btn' onClick={reset}>
          Reset
        </button>
        <button className='btn print-btn' onClick={printCart}>
          Print
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
