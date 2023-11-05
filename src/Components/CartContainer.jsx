import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import CartItem from './CartItem'

function CartContainer() {
const {cartItems,total,amount}=useSelector(store=>store.cart)


if(amount < 1){
    return <section className='w-[500px] m-auto mt-20'>
        <header>
            <h2 className='font-bold text-[40px] uppercase tracking-wide mb-4'>Your bag</h2>
            <h4>is currently empty</h4>
        </header>
    </section>
}



  return (
    <div className='w-[500px] m-auto mt-20'>
        <h2 className='font-bold text-[40px] text-center uppercase tracking-wide mb-4'>Your bag</h2>
        <div>
        {
            cartItems.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })
            
        }
        </div>
        <footer>
            <hr />
            <div >
            <h3 className='flex justify-between font-medium'>Total <span>${total}</span></h3>
            </div>
            <button className='btn mb-6 px-2 uppercase mt-6 w-[50%] m-auto block py-2 '>Clear Cart</button>
        </footer>
    </div>
  )
}

export default CartContainer