import { lazy } from 'react'

const Home = lazy(() => import('pages/Home'))
const Product = lazy(() => import('pages/Product'))
const ProductDetails = lazy(() => import('pages/ProductDetails'))
const NotFound = lazy(() => import('pages/NotFound'))


export const routes = [
  { path: '/', component: Home, exact: true, private: false },
  { path: '/product', component: Product, exact: true, private: false },
  { path: '/product-details/:id', component: ProductDetails, exact: true, private: false },

  { path: '/not-found', component: NotFound, private: false },
]
