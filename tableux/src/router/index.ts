// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UserManagement from '@/views/UserManagement.vue'
import Payment from '@/views/Payment.vue'
import Organization from '@/views/Organization.vue'
import Contents from '@/views/Contents.vue'
import Settings from '@/views/Settings.vue'
import Profile from '@/views/Profile.vue'
import Error404 from '@/views/Error404.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'usermangement',
                name: 'UserManagement',
                component:UserManagement
            },
            {
                path: 'organization',
                name: 'Organization',
                component:Organization
            },
            {
                path: 'payment',
                name: 'Payment',
                component:Payment
            },
            {
                path: 'contents',
                name: 'Contents',
                component:Contents
            },
            {
                path: 'settings',
                name: 'Settings',
                component:Settings
            }
        ]
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: "/:pathMatch(.*)*",
        name:'404',
        component: Error404
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router