import { lazy } from 'react'

const Home = lazy(() => import('pages/Home'))
const Product = lazy(() => import('pages/Product'))
const ProductDetails = lazy(() => import('pages/ProductDetails'))
const NotFound = lazy(() => import('pages/NotFound'))


export const routes = [
  { path: '/', component: Home, private: false },
  { path: '/product', component: Product, private: false },
  { path: '/product-details', component: ProductDetails, private: false },

  { path: '/not-found', component: NotFound, private: false },
]
