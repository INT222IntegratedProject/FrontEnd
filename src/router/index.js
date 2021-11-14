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
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../auth/Register.vue')
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