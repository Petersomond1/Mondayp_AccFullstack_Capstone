import "./Nav.css";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Cart() {
      
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  // const carts = JSON.parse(localStorage.getItem('cart')) || []

const carts = [ {price: 100, quantity: 2, id: 1}]

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [carts])

  const handleInc = (id) => {
    const updatedCart = carts.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const handleDec = (id) => {
    const updatedCart = carts.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const removeProduct = (id) => {
    const updatedCart = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  if(carts.length === 0) {
    return <div className='az'>0</div>
    // later correct this to Read "Cart is Empty"
  }

  return (
<>
    <div className="count">0</div>
    <div className="cart_icon"></div>
    <div className="cart_text">Cart</div>

    <div className="a">
      <div className="b">
        <div className="c">
          <div className="d">
            <h1 className="e">Shopping Cart</h1>
            <h2 className="e">{carts?.length} Items</h2>
          </div>
          <div className="f">
            <h3 className="g">Product Details</h3>
            <h3 className="h">Quantity</h3>
            <h3 className="h">Price</h3>
            <h3 className="h">Total</h3>
          </div>
          {
            carts?.map(cart => {
              return (
                <div className="j">
                  <div className="k">
                    <div className="l">
                      <img className="m" src={cart?.image} alt={cart?.title} />
                    </div>
                    <div className="n">
                      <span className="o">{cart?.title}</span>
                      <span className="p">{cart?.category}</span>
                      <div className="q" onClick={() => removeProduct(cart?.id)}>Remove</div>
                    </div>
                  </div>
                  <div className="r">
                    <svg className="s" viewBox="0 0 448 512" onClick={() => handleDec(cart?.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input className="t" type="text" value={cart?.quantity} />

                    <svg className="u" onClick={() => handleInc(cart?.id)} viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="x">${cart?.price}</span>
                  <span className="y">${cart?.price * cart?.quantity}</span>
                </div>
              )
            })
          }

          <Link to={'/products'} className="z">

            <svg className="aa" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="ab">
          <h1 className="ac">Order Summary</h1>
          <div className="ad">
            <span className="ae">Items {carts?.length}</span>
            <span className="af">{total?.toFixed(2)}$</span>
          </div>
          <div>
            <label className="ag">Shipping</label>
            <select className="ah">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="ai">
            <label for="promo" className="aj">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="ak" />
          </div>
          <button className="al">Apply</button>
          <div className="am">
            <div className="an">
              <span>Total cost</span>
              <span>${(total + 10).toFixed(2)}</span>
            </div>
            <button onClick={() => navigate('/Login?redirect=shipping')}
            className="ao">
                Checkout
                </button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Cart;