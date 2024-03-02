import { Navigate } from 'react-router-dom'

import Home from 'Pages/Home'

import ShopIndex from 'Pages/Shop'
import Trackorder from 'Pages/Shop/Trackorder'
import PaymentIndex from 'Pages/Shop/Indexpayment'
import Review from 'Pages/Shop/Review'
import Confirm from 'Pages/Shop/Confirm'
import Orderhistory from 'Pages/Shop/Orederhistory'
import Shopingcard from 'Pages/Shop/Shopingcard'
import Checkout from 'Pages/Shop/Checkout'
import WishList from 'Pages/Shop/WhishList'

//pages /product / grid
import Defaultgrid from 'Pages/Product/Grid/Default'

//pages /user
import MyAccount from 'Pages/User/MyAccount'
import SignUp from 'Pages/User/SignUp'
import Signin from 'Pages/User/SignIn'
import Passwordreset from 'Pages/User/Passwordreset'
import Passwordcreate from 'Pages/User/Passwordcreate'
import Successmsg from 'Pages/User/Successmsg'
import Logout from 'Pages/User/Logout'
import Error404 from 'Pages/User/Error404'
import Error500 from 'Pages/User/Error500'

//Productdetails
import Productdetails from 'Pages/Product/Productdetails'

//about
import About from 'Pages/Product/About'

//contact
import ContactUs from 'Pages/ContactUs/Contact'
import Earn from 'Pages/Earn'

const authProtectedRoutes = [
    { path: '/shop/address', component: <ShopIndex /> },
    { path: '/shop/order', component: <Trackorder /> },
    { path: '/shop/payment', component: <PaymentIndex /> },
    { path: '/shop/review', component: <Review />, isLight: 'light' },
    { path: '/shop/confirm', component: <Confirm /> },
    { path: '/shop/orderhistory', component: <Orderhistory /> },
    { path: '/shop/shopingcard', component: <Shopingcard /> },
    { path: '/shop/checkout', component: <Checkout /> },
    { path: '/shop/wishList', component: <WishList /> },

    { path: '/earn', component: <Earn /> },

    { path: '/account', component: <MyAccount /> },
    { path: '/', component: <Home /> },
    { path: '/about-us', component: <About /> },
    { path: '/contact', component: <ContactUs /> },
    { path: '*', component: <Navigate to="/" /> },
    { path: '/category/:category/', component: <Defaultgrid /> },

    { path: '/product-details/:slug', component: <Productdetails /> },

    { path: '/signin', component: <Signin /> },
    { path: '/signup', component: <SignUp /> },
    { path: '/logout', component: <Logout /> },
    { path: '/password-reset', component: <Passwordreset /> },
    { path: '/create-password', component: <Passwordcreate /> },
    { path: '/login-success', component: <Successmsg /> },

    { path: '/404', component: <Error404 /> },
    { path: '/500', component: <Error500 /> }
]
export { authProtectedRoutes }
