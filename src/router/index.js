import { createRouter, createWebHistory } from 'vue-router' 
 
const routes = [ 
    { 
            path: '/', 
            name: 'ListSub', 
            component: () => import('../components/ListSub') 
        }, 
        { 
            path: '/create', 
            name: 'CreateSub', 
            component: () => import('../components/CreateSub') 
        }, 
        { 

            path: '/edit/:id', 
            name: 'edit', 
            component: () => import('../components/EditSub') 
        } 
] 
 
const router = createRouter({ 
      history: createWebHistory(process.env.BASE_URL), 
      routes 
}) 
 
export default router 