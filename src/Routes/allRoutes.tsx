import { Navigate } from 'react-router-dom'

import Home from 'Pages/Home'

import Checkout from 'Pages/Shop/checkout'
import Success from 'Pages/Shop/Success'

import Defaultgrid from 'Pages/Product/Grid/Default'

//pages /user
import Account from 'Pages/User/Account'
import Logout from 'Pages/User/Logout'

//Productdetails
import Productdetails from 'Pages/Product/Productdetails'

//about
import About from 'Pages/Product/About'

//contact
import Earn from 'Pages/Earn'

const authProtectedRoutes = [
    { path: '/shop/checkout', component: <Checkout /> },
    { path: '/shop/success/:id', component: <Success /> },

    { path: '/earn', component: <Earn /> },

    { path: '/account', component: <Account /> },
    { path: '/account/:section', component: <Account /> },
    { path: '/', component: <Home /> },
    { path: '/about-us', component: <About /> },
    { path: '*', component: <Navigate to="/" /> },
    { path: '/category/:category/', component: <Defaultgrid /> },

    { path: '/product-details/:slug', component: <Productdetails /> },

    { path: '/logout', component: <Logout /> }
]
export { authProtectedRoutes }
