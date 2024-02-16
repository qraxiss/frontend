import { Navigate } from 'react-router-dom'

//dashbord
import Home from 'Pages/Home'
//Catalog
//shop
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
import Verifyemail from 'Pages/User/Verifyemail'
import Logout from 'Pages/User/Logout'
import Error404 from 'Pages/User/Error404'
import Error500 from 'Pages/User/Error500'

//pages / Email
import Blackfriday from 'Pages/Product/Email Product/Blackfriday'
import Flashsale from 'Pages/Product/Email Product/Flashsale'
import Ordersuccess from 'Pages/Product/Email Product/Ordersuccess'
import Ordersuccess2 from 'Pages/Product/Email Product/Ordersuccess2'

//Productdetails
import Productdetails from 'Pages/Product/Productdetails'

//about
import About from 'Pages/Product/About'

//Purchase Guide
import Purchaseguide from 'Pages/Product/Purchaseguide'

//Terms of Conditions
import Termsconditions from 'Pages/Product/Termsconditions'

//Privacy Policy
import Privacypolicy from 'Pages/Product/Privacypolicy'

//Storelocator
import Storelocator from 'Pages/Product/Storelocator'

//FAQ
import FAQ from 'Pages/Product/FAQ'

//Invoice
import Invoice from 'Pages/Product/Invoice'

//contact
import ContactUs from 'Pages/ContactUs/Contact'

const authProtectedRoutes = [
    { path: '/', component: <Home /> },

    //shop
    { path: '/shop/address', component: <ShopIndex /> },
    { path: '/shop/order', component: <Trackorder /> },
    { path: '/shop/payment', component: <PaymentIndex /> },
    { path: '/shop/review', component: <Review />, isLight: 'light' },
    { path: '/shop/confirm', component: <Confirm /> },
    { path: '/shop/orderhistory', component: <Orderhistory /> },
    { path: '/shop/shopingcard', component: <Shopingcard /> },
    { path: '/shop/checkout', component: <Checkout /> },
    { path: '/shop/wishList', component: <WishList /> },

    { path: '/products', component: <Defaultgrid /> },

    //Productdetails
    { path: '/product-details', component: <Productdetails /> },

    //My Account
    { path: '/account', component: <MyAccount /> },

    //about
    { path: '/about-us', component: <About /> },
    //Purchase Guide
    { path: '/purchase-guide', component: <Purchaseguide /> },
    //Terms of Conditions
    { path: '/terms-conditions', component: <Termsconditions /> },
    //Privacy Policy
    { path: '/privacy-policy', component: <Privacypolicy /> },
    //Storelocator
    { path: '/store-locator', component: <Storelocator /> },
    //FAQ
    { path: '/ecommerce-faq', component: <FAQ /> },
    //Invoice
    { path: '/invoice', component: <Invoice /> },
    //contact us
    { path: '/contact', component: <ContactUs /> },

    { path: '*', component: <Navigate to="/" /> }
]

const publicRoutes = [
    //Signin
    { path: '/signin', component: <Signin /> },
    //SignUp
    { path: '/signup', component: <SignUp /> },
    //Logout
    { path: '/logout', component: <Logout /> },

    //Passwordreset
    { path: '/password-reset', component: <Passwordreset /> },
    //Passwordcreate
    { path: '/create-password', component: <Passwordcreate /> },
    //Successmsg
    { path: '/login-succes', component: <Successmsg /> },

    //error 404
    { path: '/404', component: <Error404 /> },
    //error 500
    { path: '/500', component: <Error500 /> }
]

export { authProtectedRoutes, publicRoutes }
