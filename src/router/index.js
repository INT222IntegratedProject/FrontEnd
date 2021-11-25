import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/LandingPage.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () =>
            import ('../components/Product/Feedback/ShowFeedback.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../auth/Register.vue')
    },
    {
        path: '/show/:id',
        name: 'Modal',
        component:()=> import('../components/Product/ShowProduct.vue'),
        props: true
      },
      {
        path: '/edit/:id',
        name: 'Edit',
        component:()=> import('../components/Product/BasedEditProduct.vue'),
        props: true
      },
    {
        path: '/product',
        name: 'Product',
        component: () =>
            import ('../views/Product.vue')
    },
    {
        path: '/addproduct',
        name: 'addProduct',
        component: () =>
            import ('../components/Product/AddProduct.vue')
    },
    {
        path: '/product/T-Shirt',
        name: 'T-Shirt',
        component: () =>
            import ('../components/Product/ProductType/T-Shirt.vue')
    },
    {
        path: '/product/Shirt',
        name: 'Shirt',
        component: () =>
            import ('../components/Product/ProductType/Shirt.vue')
    },
    {
        path: '/product/Sweater',
        name: 'Sweater',
        component: () =>
            import ('../components/Product/ProductType/Sweater.vue')
    },
    {
        path: '/product/Women',
        name: 'Women',
        component: () =>
            import ('../components/Product/GenderProduct/FemaleProduct.vue')
    },
    {
        path: '/product/Men',
        name: 'Men',
        component: () =>
            import ('../components/Product/GenderProduct/MaleProduct.vue')
    },
    {
        path: '/product/Uniqlo',
        name: 'Uniqlo',
        component: () =>
            import ('../components/Product/BrandProduct/Uniqlo.vue')
    },
    {
        path: '/product/HM',
        name: 'HM',
        component: () =>
            import ('../components/Product/BrandProduct/HM.vue')
    },
    {
        path: '/product/Zara',
        name: 'Zara',
        component: () =>
            import ('../components/Product/BrandProduct/Zara.vue')
    },
    {
        path: '/userlist',
        name: 'UserList',
        component: () =>
            import ('../views/Users/Userlist.vue')
    },
    {
        path: '/edituser',
        name: 'Editusert',
        component: () =>
            import ('../views/Users/EditUser.vue')
    },
    

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router