import { lazy } from 'react';

export const MyRoutes = [
  {
    path: '/',
    component: lazy(() => import('../containers/Home')),
    title: "Home",
    menu: "yes",
  },
  {
    path: '/how-to-shop',
    component: lazy(() => import('../containers/HowToShop')),
    title: "HOW TO SHOP",
    menu: "no",
  },
  {
    path: '/products',
    component: lazy(() => import('../containers/Products')),
    title: "Products",
    menu: "yes",
  },
  {
    path: '/services',
    component: lazy(() => import('../components/OurServices')),
    title: "Services",
    menu: "no",
  },
  {
    path: '/online-goods',
    component: lazy(() => import('../containers/OnlineGoods')),
    title: "Online Goods",
    menu: "yes",
  },
  {
    path: '/products/:pid',
    component: lazy(() => import('../containers/ProductDetails')),
    title: "Product Details",
    menu: "no",
  },
  {
    path: '/blog',
    component: lazy(() => import('../containers/Blog')),
    title: "Blog",
    menu: "yes",
  },
  {
    path: '/login',
    component: lazy(() => import('../containers/Login')),
    title: "Login",
    menu: "no",
  },
  {
    path: '/user-register',
    component: lazy(() => import('../containers/UserRegister')),
    title: "User Register",
    menu: "no",
  },
  {
    path: '/upload-items',
    component: lazy(() => import('../containers/UploadItem')),
    title: "Upload Items",
    menu: "yes",
  },
  {
    path: '/user-edit',
    component: lazy(() => import('../containers/AccountSettings')),
    title: "Account Settings",
    menu: "no",
  },
  {
    path: '/favourites/:uid',
    component: lazy(() => import('../containers/Favourites')),
    title: "Favourites",
    menu: "no",
  },
  {
    path: '/contact',
    component: lazy(() => import('../containers/Contact')),
    title: "Contact",
    menu: "no",
  },
  {
    path: '/user/:uid',
    component: lazy(() => import('../containers/UserProfile')),
    title: "Author's Profile",
    menu: "no",
  },
  {
    path: '/blog/:id',
    component: lazy(() => import('../containers/BlogDetails')),
    title: "Blog Details",
    menu: "no",
  },
  {
    path: '/demo',
    component: lazy(() => import('../components/FileUpload')),
    title: "File Upload Demo",
    menu: "yes",
  },
  {
    path: '/user/:uid/items',
    component: lazy(() => import('../containers/UserItems')),
    title: "User Items",
    menu: "no",
  },
  {
    path: '*',
    component: lazy(() => import('../containers/NotFound')),
    title: "Blog Details",
    menu: "no",
  },
];