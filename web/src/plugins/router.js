import {createRouter, createWebHashHistory} from 'vue-router';
import BasicLayout from '@/components/layout/BasicLayout.vue'
import BlankLayout from '@/components/layout/BlankLayout.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        meta: {title: 'index'},
        component: BasicLayout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {title: '主页', icon: 'HomeFilled'},
                component: () => import('@/views/system/home/home.vue'),
            },
            {
                path: '/base',
                name: 'base',
                meta: {title: '基本数据', icon: 'HomeFilled'},
                component: BlankLayout,
                redirect: () => ({name: 'product'}),
                children: [
                    {
                        path: '/base/product',
                        name: 'product',
                        meta: {title: '产品信息', icon: 'HomeFilled'},
                        component: () => import('@/views/base/product/product.vue'),
                    },
                ],
            },
            // {
            //     path: '/buy',
            //     name: 'buy',
            //     meta: {title: '供应商', icon: 'HomeFilled'},
            //     component: BlankLayout,
            //     redirect: () => ({name: 'supplier'}),
            //     children: [
            //         {
            //             path: '/buy/supplier',
            //             name: 'supplier',
            //             meta: {title: '供应商', icon: 'HomeFilled'},
            //             component: () => import('../views/supplier/supplier.vue'),
            //         },
            //         {
            //             path: '/buy/supplierContract',
            //             name: 'buyContract',
            //             meta: {title: '采购合同', icon: 'HomeFilled'},
            //             component: () => import('../views/supplier/supplierContract.vue'),
            //         }
            //     ],
            // },
            // {
            //     path: '/sell',
            //     name: 'sell',
            //     meta: {title: '客户', icon: 'HomeFilled'},
            //     component: BlankLayout,
            //     redirect: () => ({name: 'customer'}),
            //     children: [
            //         {
            //             path: '/sell/customer',
            //             name: 'customer',
            //             meta: {title: '客户', icon: 'HomeFilled'},
            //             component: () => import('../views/customer/customer.vue'),
            //         },
            //         {
            //             path: '/sell/customerContract',
            //             name: 'sellContract',
            //             meta: {title: '销售合同', icon: 'HomeFilled'},
            //             component: () => import('../views/customer/customerContract.vue'),
            //         },
            //     ],
            // },
            // {
            //     path: '/deliver',
            //     name: 'deliver',
            //     meta: {title: '发货', icon: 'HomeFilled'},
            //     component: BlankLayout,
            //     redirect: () => ({name: 'deliverGoods'}),
            //     children: [
            //         {
            //             path: '/deliver/deliverGoods',
            //             name: 'deliverGoods',
            //             meta: {title: '发货', icon: 'HomeFilled'},
            //             component: () => import('../views/deliver/deliverGoods.vue'),
            //         },
            //         {
            //             path: '/deliver/invoice',
            //             name: 'invoice',
            //             meta: {title: '发货单', icon: 'HomeFilled'},
            //             component: () => import('../views/deliver/invoice.vue'),
            //         },
            //     ],
            // },
            // {
            //     path: '/setting',
            //     name: 'setting',
            //     meta: {title: '设置', icon: 'HomeFilled'},
            //     component: () => import('../views/system/setting.vue'),
            // },
            // {
            //     path: '/test',
            //     name: 'test',
            //     meta: {title: 'test', icon: 'HomeFilled'},
            //     component: () => import('../views/test.vue'),
            // },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/system/login/login.vue'),
    },
    {
        path: "/:any(.*)",
        name: "notFound",
        component: () => import("@/views/errors/404.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const white = [
    '/login'
]

router.beforeEach((to, from, next) => {

    if (white.indexOf(to.path) === -1 && !sessionStorage.getItem('token')) {
        next({path: '/login'})
        console.log(sessionStorage.getItem('token'))
    } else next()
})

export default router;