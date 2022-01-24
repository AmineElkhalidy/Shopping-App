import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from './CartItem'
const Container = styled.div`
.cart{
    position: fixed;
    background-color: var(--body-color);
    z-index: var(--z-fixed);
    width: 100%;
    height: 100vh;
    top: 0;
    right: -100%;
    padding: 3.5rem 2rem;
    transition: .4s;
    overflow: scroll;
}

.cart__title-center{
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  text-align: center;
  margin-bottom: var(--mb-2-5);
}

.cart__close{
  font-size: 2rem;
  color: var(--title-color);
  position: absolute;
  top: 1.25rem;
  right: 0.9rem;
  cursor: pointer;
}


.cart-card{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}


.cart-item{
  display: grid;
  grid-template-columns: 100px 150px;
  column-gap: 1rem;
}

.cart-item__image{
  height: 100px;
  width: 100px;
  border: 1px solid var(--first-color);
}

.cart-item__details-quantity{
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-0-25);
}

.cart-item__details-price{
  margin-bottom: var(--mb-0-25);
}

.cart__amount,
.cart__amount-content{
    display: flex;
    align-items: center;
}

.cart__amount{
  column-gap: 3rem;
}

.cart__amount-content{
  column-gap: 1rem;
}

.cart__amount-box{
  display: inline-flex;
  padding: .25rem;
  border: 1px solid var(--first-color);
  color: var(--title-color);
  cursor: pointer;
}

.cart-item__remove{
  font-size: 1.15rem;
  color: var(--container-color);
  cursor: pointer;
  background-color: white;
}


.cart__total{
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-1);
}

.cart__footer{
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
}

.show-cart{
  right: 0;
}

@media screen and (min-width: 767px){
.cart{
    width: 500px;
    box-shadow: -2px 0 4px hsla(0, 0%, 15%, .1);
}
}


`

const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {
  

    if(!cart.line_items) return <p>Loading...</p>;
    const handleEmptyCart = () => {
      onEmptyCart();
    };

    const renderEmptyMessage = () => {
        if (cart.total_unique_items > 0) {
          return;
        }
    
        return (
          <p className="cart__none">
            You have no items in your shopping cart, start adding some!
          </p>
        );
      }

      const renderItems = () => (
        
        cart.line_items.map((lineItem) => (
          <CartItem
            item={lineItem}
            key={lineItem.id}
            className="cart__inner"
            onRemoveFromCart={onRemoveFromCart}
            onUpdateCartQty={onUpdateCartQty}
          />
        ))
      );

      const renderTotal = () => (
        <div className="cart__total">
          <p className="cart__total-title">Subtotal:</p>
          <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
        </div>
      );

      return (
          <Container>
            <div className="cart" id="cart" >
                <i className="ri-close-line cart__close" id="cart-close"></i>

                <h2 className="cart__title-center">My Cart</h2>
                <div className='cart__container' >
                  <article className='cart-card' >
                    { renderEmptyMessage() }
                    { renderItems() }
                    { renderTotal() }
                  </article>
                </div>
                <div className="cart__footer">
                    <button className="button cart__btn-empty" onClick={handleEmptyCart}>Empty cart</button>
                    <Link to='/checkout' >
                      <button className="button cart__btn-checkout">Checkout</button> 
                    </Link>
                    
                </div>
            </div>
        </Container>
      );
}

export default Cart
