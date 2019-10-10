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
        menu: "yes",
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
        path: '/product-details/:pid',
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
        menu: "yes",
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
];