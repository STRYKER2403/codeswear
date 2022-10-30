import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [cart, setcart] = useState({});
  const [user, setuser] = useState({value:null});
  const [key, setkey] = useState(0);
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {

    router.events.on('routeChangeStart', ()=>{setProgress(40)})
    router.events.on('routeChangeComplete', ()=>{setProgress(100)})

    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
         console.log(error);
         localStorage.clear();
    }

    const token = localStorage.getItem("token")
    if(token)
    {
      setuser({value:token})
      setkey(Math.random())
    }

  }, [router.query]);

  const logout = () =>{
    localStorage.removeItem("token")
    setuser({value:null})
    setkey(Math.random())
    router.push('/')
  }

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt=0;
    // Object.keys() method changes cart into iterable array
    let keys = Object.keys(myCart)

      for(let i=0; i<keys.length ;i++){
        subt += myCart[keys[i]].price * myCart[keys[i]].qty
      }
      setsubTotal(subt); 
  }

  const addToCart = (ItemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (ItemCode in cart) {
      newCart[ItemCode].qty = cart[ItemCode].qty + qty
    }
    else {
      newCart[ItemCode] = { qty: 1, price, name, size, variant }
    }

    setcart(newCart)
    saveCart(newCart);
  }

  const removeFromCart = (ItemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (ItemCode in cart) {
      newCart[ItemCode].qty = cart[ItemCode].qty - qty
    }
    if (newCart[ItemCode].qty <= 0) {
      delete newCart[ItemCode]
    }

    setcart(newCart)
    saveCart(newCart);
  }

  const clearCart = () => {
    setcart({})
    saveCart({})
  }

  const buyNow = (ItemCode, qty, price, name, size, variant) =>{
    let newCart = {};
    newCart[ItemCode] = { qty: 1, price, name, size, variant };

    setcart(newCart)
    saveCart(newCart);
    router.push('/checkout')
 }

  return <>
    <LoadingBar
        color='#E91E63'
        progress={progress}
        waitingTime = {400}
        onLoaderFinished={() => setProgress(0)}
      />

  {/* key={key} */}
    <Navbar logout={logout} user={user} cart={cart} addToCart = {addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component buyNow={buyNow} cart={cart} addToCart = {addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
