import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/HomeSections/Wrapper";
import commerce from './lib/commerce'
import ProductsList from "./components/Products/ProductsList";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Contact from './components/Contact/Contact'
import ProductDetails from "./components/Products/[permalink]";
import Checkout from "./components/Checkout/Checkout";
import Confirmation from "./components/Confirmation/Confirmation";

function App(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({
    customer_reference: 'A123456',
    customer: {
      firstname: 'Amine',
      lastname: 'Elkhalidy'
    }
  });
  

  const history = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, [])


  const fetchProducts = () => {
    commerce.products.list().then(products => {
      setProducts(products.data);
    }).catch(error => console.log('There was an error fetching the products', error))

    setLoading(false);
  };

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    })
  };

  const fetchCategories = () => {
    commerce.categories.list().then(categories => setCategories(categories.data)).catch(error => console.log('There was an error fetching the categories', error))
  }

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then(item => setCart(item.cart)).catch(error => console.error('There was an error adding the item to the cart', error));
  }

  const handleUpdateCategory = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId).then((response) => setCart(response.cart)).catch((error) => console.error('There was an error removing the item from the cart', error));
  };
  
  const handleEmptyCart = () => {
    commerce.cart.empty().then((response) => setCart(response.cart)).catch((error) => console.error('There was an error emptying the cart', error));
  }

  const refreshCart = () =>  {
    commerce.cart.refresh().then((newCart) => {
      setCart(newCart);
    }).catch((error) => {
      console.log('There was an error refreshing your cart', error);
    });
  };

  const handleCaptureCheckout = (checkoutTokenId, newOrder) => {
    commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {
      // Save the order into state
      // setOrder(order);
      // Clear the cart
      refreshCart();
      // Send the user to the receipt 
      history.push('/confirmation');
      // Store the order in session storage so we can show it again if the
      // user refreshes the page!
      window.sessionStorage.setItem('order_receipt', JSON.stringify(order));   
    }).catch((error) => {
      console.log('There was an error confirming your order', error);
    });
  };


  return (
    <>
    <Header cart={cart} onRemoveFromCart={handleRemoveFromCart} onUpdateCartQty={handleUpdateCategory} onEmptyCart={handleEmptyCart} />
    <Routes>
      <Route path='/' element={<Wrapper />} />
      <Route path='/products' element={<ProductsList products={products} loading={loading} categories={categories} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products/:permalink' element={<ProductDetails onAddToCart={handleAddToCart} />} />
      <Route path='/checkout' element={<Checkout cart={cart} onCaptureCheckout={handleCaptureCheckout} />} />
      <Route path='/confirmation' element={<Confirmation order={order} />} />
    </Routes>
    </>
  )
  
}

export default App;
