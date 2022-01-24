import React from 'react';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  }

  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  } 
  return (
    <div className="cart-item">
      <div className='cart-item__box' >
        <img className="cart-item__image" src={item.image.url} alt={item.name} />
      </div>

      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <p className="cart-item__details-quantity" >quantity : {item.quantity}</p>
        </div>
        <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>

        <div class="cart__amount">
            <div class="cart__amount-content">
              <button class="cart__amount-box" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
                <i class="ri-subtract-line"></i>
              </button>
              <button class="cart__amount-box" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
                <i class="ri-add-line"></i>
              </button>
            </div>

            <button
            type="button"
            className="cart-item__remove"
            onClick={handleRemoveFromCart}
            >
            <i className="ri-delete-bin-7-line cart__amount-trash"></i>
            </button>
        </div>
        

      </div>
    </div>
  );
};

export default CartItem
