import React, {useContext} from 'react'
import CartItem from '../components/CartItem'
import { CartContext } from '../context/CartContext'
import { FiTrash2 } from 'react-icons/fi'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { UserAuth } from '../context/AuthContext'

const Cart = () => {
    const {cart, clearCart, total} = useContext(CartContext)
    const { user } = UserAuth();

    const config = {
      public_key: 'FLWPUBK_TEST-78299c0dfa29e7a97ee7540265c69967-X',
      tx_ref: Date.now(),
      amount: total,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: "User",
        phone_number: '070********',
        name: 'John Doe',
      },
      customizations: {
        title: 'NorthSTVR',
        description: 'Payment for items in cart',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
  
    const fwConfig = {
      ...config,
      text: 'Pay with Flutterwave!',
      callback: (response) => {
         console.log(response);
        closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => {},
    };

  return (
    <div className='container mx-auto'>
    <div className='flex flex-col gap-y-2 border-b pt-[4rem]'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
     </div>
     <div className='flex flex-col gap-y-3 py-4 mt-4'>
          <div className='flex w-full justify-between items-center'>
            <div className='uppercase font-semibold'>
              <span className='mr-2'>Total:</span>$ {total}
            </div>
            <div onClick={() => clearCart()} className='cursor-pointer py-4 flex w-12 h-12 justify-center items-center text-xl'> 
            <FiTrash2 className='text-[#920701]'/>
          </div>
          </div>
        </div>
        <div className='flex-col justify-center items-center p-6 bg-[#f5f5f5] my-8 md:w-1/2 md:m-auto md:my-8'>
                <h1 className='text-center mb-4'>ORDER SUMMARY</h1>
                <div className='flex justify-between mb-3'>
                <p>Subtotal</p>
                <p>$ {total}</p>
                </div>
                <div className='flex justify-between mb-3'>
                <p>Shipping Charge</p>
                <p>Free</p>
                </div>
                <div className='flex justify-between mb-3'>
                <p>Shipping Discount</p>
                <p>N/A</p>
                </div>
                <div className='flex justify-between mb-3'>
                <p>Total Amount</p>
                <p>$ {total}</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                <p className='text-center'>Make payment</p>
                <FlutterWaveButton {...fwConfig} className='bg-[#FF9F0D] w-full text-white rounded mb-2 h-[40px] cursor-pointer'/>
            </div>
            </div>
    </div>
  )
}

export default Cart